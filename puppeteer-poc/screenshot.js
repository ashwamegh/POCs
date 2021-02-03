const puppeteer = require("./page");
(async () => {
  const { page, browser } = await puppeteer();
  await page.goto("https://buyproperly.ca");
  const date = new Date();
  await page.screenshot({ path: `screenshot-${date.getTime()}.png` });
  await browser.close();
})();
