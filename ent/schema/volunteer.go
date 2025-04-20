package schema

import (
	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
	"entgo.io/ent/schema/index"
	"github.com/google/uuid"
)

// Volunteer holds the schema definition for the Volunteer entity.
type Volunteer struct {
	ent.Schema
}

// Fields of the Volunteer.
func (Volunteer) Fields() []ent.Field {
	return []ent.Field{
		field.UUID("id", uuid.UUID{}).Default(uuid.New).Unique(),
		field.String("email").Unique(),
		field.String("first_name"),
		field.String("middle_name"),
		field.String("last_name"),
		field.String("phone"),
		field.String("address"),
		field.String("notes"),
	}
}

// Edges of the Volunteer.
func (Volunteer) Edges() []ent.Edge {
	return []ent.Edge{
		edge.From("volunteer_records", EventVolunteer.Type).Ref("volunteer"),
	}
}

func (Volunteer) Indexes() []ent.Index {
	return []ent.Index{
		index.Fields("first_name", "last_name"),
	}
}
