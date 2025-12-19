// src/db/index.ts
import "dotenv/config"
import { drizzle } from "drizzle-orm/bun-sqlite"
import { Database } from "bun:sqlite"

const sqlite = new Database(process.env.DB_FILE_NAME || "./my.db")

console.log("Database initialized successfully")

export const db = drizzle(sqlite)