package schema

import (
	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
	"entgo.io/ent/schema/index"
	"github.com/google/uuid"
)

// EventVolunteer holds the schema definition for the EventVolunteer entity.
type EventVolunteer struct {
	ent.Schema
}

// Fields of the EventVolunteer.
func (EventVolunteer) Fields() []ent.Field {
	return []ent.Field{
		field.UUID("id", uuid.UUID{}).Default(uuid.New).Unique(),
	}
}

// Edges of the EventVolunteer.
func (EventVolunteer) Edges() []ent.Edge {
	return []ent.Edge{
		edge.To("event", Event.Type).Unique().Required(),
		edge.To("volunteer", Volunteer.Type).Unique().Required(),
	}
}

func (EventVolunteer) Indexes() []ent.Index {
	return []ent.Index{
		index.Edges("event", "volunteer").Unique(),
	}
}
