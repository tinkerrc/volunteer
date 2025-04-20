package schema

import (
	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
	"github.com/google/uuid"
)

// Event holds the schema definition for the Event entity.
type Event struct {
	ent.Schema
}

// Fields of the Event.
func (Event) Fields() []ent.Field {
	return []ent.Field{
		field.UUID("id", uuid.UUID{}).Default(uuid.New).Unique(),
		field.String("name"),
		field.String("description"),
		field.Bool("is_recurring"),
		field.Bool("is_recur_active").Optional().Nillable(),
		field.String("recur_description").Optional().Nillable(),
		field.Time("start").Optional().Nillable(),
		field.Time("end").Optional().Nillable(),
	}
}

// Edges of the Event.
func (Event) Edges() []ent.Edge {
	return []ent.Edge{
		edge.To("certs", Cert.Type),
	}
}
