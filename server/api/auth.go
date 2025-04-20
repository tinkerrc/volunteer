package api

import (
	"context"
	"errors"
	"log"
	"net/http"
	"net/url"
	"os"
	"time"

	"connectrpc.com/authn"
	"connectrpc.com/connect"
	"github.com/auth0/go-jwt-middleware/v2/jwks"
	"github.com/auth0/go-jwt-middleware/v2/validator"
	"github.com/tinkerrc/volunteer/ent"
	"github.com/tinkerrc/volunteer/ent/volunteer"
)

// CustomClaims contains custom data we want from the token.
type CustomClaims struct {
	Scope string `json:"scope"`
	Email string `json:"user_email"`
}

// Validate does nothing for this example, but we need
// it to satisfy validator.CustomClaims interface.
func (c CustomClaims) Validate(ctx context.Context) error {
	return nil
}

func Authenticate(db *ent.Client) func(context.Context, *http.Request) (any, error) {
	issuerURL, err := url.Parse("https://" + os.Getenv("AUTH0_DOMAIN") + "/")
	if err != nil {
		log.Fatalf("Failed to parse the issuer url: %v", err)
	}

	provider := jwks.NewCachingProvider(issuerURL, 5*time.Minute)

	jwtValidator, err := validator.New(
		provider.KeyFunc,
		validator.RS256,
		issuerURL.String(),
		[]string{"https://dev-v8cbdhmtmu4lj338.us.auth0.com/api/v2/"},
		validator.WithCustomClaims(
			func() validator.CustomClaims {
				return &CustomClaims{}
			},
		),
		validator.WithAllowedClockSkew(time.Minute),
	)

	if err != nil {
		log.Fatalf("Failed to set up the jwt validator")
	}

	return func(ctx context.Context, req *http.Request) (any, error) {
		token, ok := authn.BearerToken(req)
		if !ok {
			return nil, authn.Errorf("unauthenticated")
		}

		token_data, err := jwtValidator.ValidateToken(ctx, token)
		if err != nil {
			return nil, authn.Errorf("invalid token")
		}
		claims, ok := token_data.(*validator.ValidatedClaims)
		if !ok {
			return nil, authn.Errorf("invalid token")
		}
		customClaims, ok := claims.CustomClaims.(CustomClaims)
		if !ok {
			return nil, authn.Errorf("missing email claim")
		}

		return customClaims.Email, nil
	}
}

func DebugAuthenticate(db *ent.Client) func(context.Context, *http.Request) (any, error) {
	return func(ctx context.Context, req *http.Request) (any, error) {
		token, ok := authn.BearerToken(req)
		if !ok {
			return nil, authn.Errorf("unauthenticated")
		}
		return token, nil
	}
}

func (s *APIServer) ensureAdmin(ctx context.Context) error {
	email, ok := authn.GetInfo(ctx).(string)
	if !ok {
		return authn.Errorf("unauthenticated")
	}
	if email != s.AdminEmail {
		return connect.NewError(connect.CodePermissionDenied, errors.New("unauthorized"))
	}
	return nil
}

func (s *APIServer) ensureVolunteer(ctx context.Context) (*ent.Volunteer, error) {
	email, ok := authn.GetInfo(ctx).(string)
	if !ok {
		return nil, authn.Errorf("unauthenticated")
	}
	u, err := s.Db.Volunteer.Query().Where(volunteer.EmailEQ(email)).Only(ctx)
	if err != nil {
		return nil, authn.Errorf("unauthenticated")
	}
	return u, nil
}
