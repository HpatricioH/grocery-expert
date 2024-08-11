import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import icon from "astro-icon"
import auth from "auth-astro"
import vercel from "@astrojs/vercel/serverless"

import db from "@astrojs/db"

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), auth(), db()],
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  })
})