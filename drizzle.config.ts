import type { Config } from "drizzle-kit"

import { config } from "dotenv"

config()

export default {
  schema: "./db/schema.ts",
  out: "./migrations",
  dialect: "sqlite",
  driver: "turso",
  dbCredentials: {
    url: process.env.TURSO_DATABASE_URL as string,
    authToken: process.env.TURSO_DATABASE_TOKEN,
  },
} satisfies Config