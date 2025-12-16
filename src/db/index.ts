// src/db/index.ts (The most robust version)
import "dotenv/config"
import { drizzle } from "drizzle-orm/bun-sqlite"

// This checks for the common deployment variable first, then your local one, 
// and finally defaults to the hardcoded path if all else fails.
const dbPath = process.env.DATABASE_URL || process.env.DB_FILE_NAME || "./my.db"

export const db = drizzle(dbPath)