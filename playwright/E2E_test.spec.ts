import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page.getByRole("link", { name: "Home" }).click();
  await page.getByRole("link", { name: "Register Users" }).click();
  await page.getByLabel("First Name").click();
  await page.getByLabel("First Name").fill("Hi");
  await page.getByLabel("First Name").press("Tab");
  await page.getByLabel("Last Name").fill("Hi");
  await page.getByLabel("Last Name").press("Tab");
  await page.getByLabel("Email").fill("Hi");
  await page.getByLabel("Email").press("Tab");
  await page.getByLabel("Password").fill("Hi");
  await page.getByRole("button", { name: "Submit" }).click();
  await page.getByRole("link", { name: "Show Users" }).click();
  await page
    .locator("div")
    .filter({ hasText: /^EditFirst Name: HiLast Name: HiEmail: HiDelete$/ })
    .getByRole("button", { name: "Edit" })
    .click();
  await page.getByLabel("First Name").click({
    clickCount: 5,
  });
  await page.getByLabel("First Name").fill("Hello");
  await page.getByLabel("First Name").press("Tab");
  await page.getByLabel("Last Name").fill("hello");
  await page.getByLabel("Last Name").press("Tab");
  await page.getByLabel("Email").fill("hello");
  await page.getByLabel("Email").press("Tab");
  await page.getByLabel("Password").fill("Hello");
  await page.getByRole("button", { name: "Confirm" }).click();
  await page.getByRole("link", { name: "Show Users" }).click();
  await page
    .locator("div")
    .filter({
      hasText: /^EditFirst Name: HelloLast Name: helloEmail: helloDelete$/,
    })
    .getByRole("button", { name: "Delete" })
    .click();
});
