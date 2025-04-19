package api

import (
	"context"
	"net/http"

	"connectrpc.com/authn"
	"github.com/tinkerrc/volunteer/ent"
)

func Authenticate(db *ent.Client) func(context.Context, *http.Request) (any, error) {
	return func(ctx context.Context, req *http.Request) (any, error) {
		authn.BearerToken(req)
		return nil, nil
	}
}
