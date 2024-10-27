import { pgTableCreator } from "drizzle-orm/pg-core"
import { drizzle } from "drizzle-orm/node-postgres"
import { Pool } from "pg"

const pool = new Pool({
  connectionString: process.env.DATABASE_URL!,
})

export const db = drizzle({ client: pool })
export const pgTable = pgTableCreator((name) => `appname_${name}`)
