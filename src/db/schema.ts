// src/db/schema.ts
import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core"

export const wishes = sqliteTable("wishes", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    item: text("item").notNull(),
    fulfilled: integer("fulfilled").notNull().default(0),
    createdAt: integer("created_at").notNull(),
});

export const cookies = sqliteTable("cookies", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    item: text("cookie").notNull(),
    eaten: integer("eaten").notNull().default(0),
    createdAt: integer("created_at").notNull(),
});

export const snow = sqliteTable("snow", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    item: text("item").notNull(),
    fun: integer("fun").notNull().default(0),
    createdAt: integer("created_at").notNull(),
});