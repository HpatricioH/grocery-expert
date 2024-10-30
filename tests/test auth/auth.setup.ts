import * as path from "node:path"
import { expect, test as setup } from "@playwright/test"

const authFile = path.join("*", "../playwright/.auth/user.json")

setup("authenticate", async ({ page }) => {
  // navigate to main page and click on get started to log in using google.
  await page.goto("http://localhost:4321/")
  await page.getByRole("link", { name: "Get Started" }).click()
  await page.getByRole("button", { name: "Sign up with google" }).click()

  // google authentication process
  await page.waitForURL("**/accounts.google.com/**", { timeout: 30000 })
  await expect(page.getByLabel("Email or phone")).toBeVisible({ timeout: 3000 })

  const googleEmail = process.env.GOOGLE_EMAIL
  if (!googleEmail) throw new Error("GOOGLE_EMAIL environment variable is not set")
  await page.getByLabel("Email or phone").fill(googleEmail)

  await page.getByRole("button", { name: "Next" }).click()
  await page.waitForSelector("input[type=\"password\"]", { timeout: 40000 })
  await expect(page.getByLabel("Enter your password")).toBeVisible()

  const googlePassword = process.env.GOOGLE_PASSWORD
  if (!googlePassword) throw new Error("GOOGLE_PASSWORD environment variable is not set")
  await page.getByLabel("Enter your password").fill(googlePassword)

  await page.getByRole("button", { name: "Next" }).click()

  await expect(page.getByRole("heading", { name: "2-Step Verification" })).toBeVisible()
  await expect(page.getByRole("heading", { name: "Sign in to billGenerator" })).toBeVisible({ timeout: 4000000 })

  await page.getByRole("button", { name: "Continue" }).click()

  await page.waitForURL("http://localhost:4321/pantry", { timeout: 400000 })
  await expect(page).toHaveURL("http://localhost:4321/pantry")

  await page.context().storageState({ path: authFile })
})