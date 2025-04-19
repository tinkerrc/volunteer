package api

import "github.com/tinkerrc/volunteer/ent"

type APIServer struct {
	Db         *ent.Client
	AdminEmail string
}
