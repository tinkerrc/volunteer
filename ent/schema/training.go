package schema

import (
	"time"

	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
	"entgo.io/ent/schema/index"
	"github.com/google/uuid"
)

// Training holds the schema definition for the Training entity.
type Training struct {
	ent.Schema
}

// Fields of the Training.
func (Training) Fields() []ent.Field {
	return []ent.Field{
		field.UUID("id", uuid.UUID{}).Default(uuid.New).Unique(),
		field.Time("start_date").Default(time.Now),
		field.Time("end_date").Optional(),
		field.Bool("is_certified").Default(false),
	}
}

// Edges of the Training.
func (Training) Edges() []ent.Edge {
	return []ent.Edge{
		edge.To("volunteer", Volunteer.Type).Unique(),
		edge.To("cert", Cert.Type).Unique(),
	}
}

func (Training) Indexes() []ent.Index {
	return []ent.Index{
		index.Edges("volunteer", "cert").Unique(),
	}
}
