import { test, Page } from "@playwright/test";

let page: Page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});

test.afterAll(async () => {
  await page.close();
});

test.describe.serial("E2E test", () => {
  test("Register User", async () => {
    await page.goto("http://localhost:5173/");
    await page.getByRole("link", { name: "Register Users" }).click();
    await page.getByLabel("First Name").fill("Giga");
    await page.getByLabel("Last Name").fill("Chad");
    await page.getByLabel("Email").fill("Giga@email.com");
    await page.getByLabel("Password").fill("I_Love_My_Little_Ponies");
    await page.getByRole("button", { name: "Submit" }).click();
  });

  test("Go to show users", async () => {
    await page.getByRole("link", { name: "Show Users" }).click();
  });

  test("Edit user", async () => {
    await page
      .locator("div")
      .filter({
        hasText:
          /^EditFirst Name: GigaLast Name: ChadEmail: Giga@email\.comDelete$/,
      })
      .getByRole("button", { name: "Edit" })
      .click();
    await page.getByLabel("First Name").fill("Twilight");
    await page.getByLabel("Last Name").fill("Sparkle");
    await page.getByLabel("Email").fill("I_Love_Pinkie_Pie@email.com");
    await page.getByLabel("Password").fill("IncestLord3");
    await page.getByRole("button", { name: "Confirm" }).click();
  });

  test("Remove user", async () => {
    await page.getByRole("link", { name: "Show Users" }).click();
    await page
      .locator("div")
      .filter({
        hasText:
          /^EditFirst Name: TwilightLast Name: SparkleEmail: I_Love_Pinkie_Pie@email.comDelete$/,
      })
      .getByRole("button", { name: "Delete" })
      .click();
  });
});
