// src/db/index.ts (The final, robust version)
import "dotenv/config"
import { drizzle } from "drizzle-orm/bun-sqlite"
import { migrate } from "drizzle-orm/bun-sqlite/migrator" // 1. Import migrate
import { Database } from "bun:sqlite" // 2. Import Database class
import * as schema from "./schema" // 3. Import schema

// ... (rest of the file remains the same)
const dbPath = process.env.DATABASE_URL || process.env.DB_FILE_NAME || "./my.db"

// Use the Bun Database class to open the connection
const sqlite = new Database(dbPath) 
export const db = drizzle(sqlite, { schema }) // Pass the Bun client to drizzle

// 4. *** THE CRUCIAL MIGRATION STEP ***
// Run migration to ensure tables exist on server startup
try {
    migrate(db, { migrationsFolder: "./drizzle" })
    console.log("Database migration successful!")
} catch (e) {
    console.error("Database migration failed:", e)
}

// Ensure you export the client at the very end
export { sqlite }