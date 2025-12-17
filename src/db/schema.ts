// src/db/schema.ts
import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core"

export const wishes = sqliteTable("wishes", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    item: text("item").notNull(),
    fulfilled: integer("fulfilled").notNull().default(0),
    tempColumn: text("temp_column"), // ADD THIS TEMPORARY LINE
    createdAt: integer("created_at").notNull(),
});