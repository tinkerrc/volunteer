package schema

import "entgo.io/ent"

// TimeLog holds the schema definition for the TimeLog entity.
type TimeLog struct {
	ent.Schema
}

// Fields of the TimeLog.
func (TimeLog) Fields() []ent.Field {
	return nil
}

// Edges of the TimeLog.
func (TimeLog) Edges() []ent.Edge {
	return nil
}
