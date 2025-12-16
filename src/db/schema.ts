// src/db/schema.ts
import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core"

export const wishes = sqliteTable("wishes", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    item: text("item").notNull(),
    fulfilled: integer("fulfilled").notNull().default(0),
    // REMEMBER TO KEEP THE TEMPORARY COLUMN HERE FOR NOW
    tempColumn: text("temp_column"), 
    createdAt: integer("created_at").notNull(),
});