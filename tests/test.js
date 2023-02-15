const puppeteer = require("puppeteer");
const browser = null;

describe("Google", () => {
  beforeAll(async () => {
    await page.goto("http://localhost:8080");
  });

  it('should be titled "My First Web Page"', async () => {
    await page.waitForSelector("h1");
    const title = await page.$eval("h1", (el) => el.textContent);
    expect(title).toBe("My First Web Page");
  });
});
