package api

import (
	"context"
	"errors"

	"connectrpc.com/connect"

	"github.com/google/uuid"
	apiv1 "github.com/tinkerrc/volunteer/proto/api/v1" // generated by protoc-gen-go
)

func (s *APIServer) UpdateCert(
	ctx context.Context,
	req *connect.Request[apiv1.UpdateCertRequest],
) (*connect.Response[apiv1.UpdateCertResponse], error) {
	err := s.ensureAdmin(ctx)
	if err != nil {
		return nil, err
	}
	m := req.Msg
	cid, err := uuid.Parse(m.Id)
	if err != nil {
		return nil, connect.NewError(connect.CodeInvalidArgument, errors.New("invalid cert id"))
	}
	update := s.Db.Cert.UpdateOneID(cid)
	if m.Name != nil {
		update = update.SetName(*m.Name)
	}
	if m.Description != nil {
		update = update.SetDescription(*m.Description)
	}
	_, err = update.Save(ctx)
	if err != nil {
		return nil, connect.NewError(connect.CodeNotFound, errors.New("cert not found"))
	}
	res := connect.NewResponse(&apiv1.UpdateCertResponse{})
	return res, nil
}
