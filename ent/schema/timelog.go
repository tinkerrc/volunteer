package schema

import (
	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
	"github.com/google/uuid"
)

// TimeLog holds the schema definition for the TimeLog entity.
type TimeLog struct {
	ent.Schema
}

// Fields of the TimeLog.
func (TimeLog) Fields() []ent.Field {
	return []ent.Field{
		field.UUID("id", uuid.UUID{}).Default(uuid.New).Unique(),
		field.Int("hours"),
		field.Int("minutes"),
		field.Time("date"),
	}
}

// Edges of the TimeLog.
func (TimeLog) Edges() []ent.Edge {
	return []ent.Edge{
		edge.To("volunteer", Volunteer.Type).Unique().Required(),
		edge.To("event", Event.Type).Unique(),
	}
}
