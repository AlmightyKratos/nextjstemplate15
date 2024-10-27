import { text, uuid } from "drizzle-orm/pg-core"
import { pgTable } from "./db"

export const tasksTb = pgTable("tasks", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
})
