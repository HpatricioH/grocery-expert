import { expect, test } from "@playwright/test"

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:4321/")
})

test("has title", async ({ page }) => {
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Welcome to Grocery Expert/)
})

test("get started link", async ({ page }) => {
  await page.getByTestId("getStarted").click()

  await page.waitForURL("**/pantry")
})

test("Navigate to recipies", async ({ page }) => {
  await page.getByTestId("navigation").click()
  await page.getByRole("link", { name: "Recipes" }).click()

  await expect(page).toHaveURL("http://localhost:4321/recipes/")
})
