package schema

import (
	"entgo.io/ent"
	"entgo.io/ent/schema/field"
	"github.com/google/uuid"
)

// Cert holds the schema definition for the Cert entity.
type Cert struct {
	ent.Schema
}

// Fields of the Cert.
func (Cert) Fields() []ent.Field {
	return []ent.Field{
		field.UUID("id", uuid.UUID{}).Default(uuid.New).Unique(),
		field.String("name"),
		field.String("description"),
	}
}

// Edges of the Cert.
func (Cert) Edges() []ent.Edge {
	return nil
}
