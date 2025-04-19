package api

import (
	"github.com/auth0/go-auth0/authentication"
	"github.com/tinkerrc/volunteer/ent"
)

type APIServer struct {
	Db         *ent.Client
	AdminEmail string
	AuthAPI    *authentication.Authentication
}
