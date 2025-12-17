// src/db/index.ts
import "dotenv/config"
import { drizzle } from "drizzle-orm/bun-sqlite"
import { Database } from "bun:sqlite"

const sqlite = new Database(process.env.DB_FILE_NAME!)

// Create table if it doesn't exist
sqlite.run(`
  CREATE TABLE IF NOT EXISTS wishes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    item TEXT NOT NULL,
    fulfilled INTEGER NOT NULL DEFAULT 0,
    created_at INTEGER NOT NULL
  )
`)

console.log("Database initialized successfully")

export const db = drizzle(sqlite)