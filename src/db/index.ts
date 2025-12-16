import { Database } from "bun:sqlite" // NOTE: You may need to add this import!
import { drizzle } from "drizzle-orm/bun-sqlite"

// Create the database connection using the file Drizzle created
const sqlite = new Database("./my.db") 

// Export the Drizzle instance
export const db = drizzle(sqlite)