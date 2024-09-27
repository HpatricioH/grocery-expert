import { drizzle } from "drizzle-orm/libsql"
import { createClient } from "@libsql/client"

const turso = createClient({
  url: import.meta.env.TURSO_DATABASE_URL! as string,
  authToken: import.meta.env.TURSO_DATABASE_TOKEN as string,
})

export const db = drizzle(turso)