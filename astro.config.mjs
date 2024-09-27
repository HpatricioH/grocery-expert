import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import icon from "astro-icon"
import auth from "auth-astro"
import sentry from "@sentry/astro"

import vercel from "@astrojs/vercel/serverless"

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), auth(), sentry({
    dsn: "https://33329a8e9ef071173d630ec4a290effe@o4504914110251008.ingest.us.sentry.io/4508010968121344",
    sourceMapsUploadOptions: {
      project: "groceryexpert",
      authToken: process.env.SENTRY_AUTH_TOKEN,
    },
  })],
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  })
})