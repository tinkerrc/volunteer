package schema

import "entgo.io/ent"

// Volunteer holds the schema definition for the Volunteer entity.
type Volunteer struct {
	ent.Schema
}

// Fields of the Volunteer.
func (Volunteer) Fields() []ent.Field {
	return nil
}

// Edges of the Volunteer.
func (Volunteer) Edges() []ent.Edge {
	return nil
}
