const puppeteer = require("./page");
(async () => {
  const { page, browser } = await puppeteer();
  await page.goto("https://buyproperly.ca", { waitUntil: "networkidle2" });
  const date = new Date();
  await page.pdf({ path: `pdf-${date.getTime()}.pdf`, format: "A4" });
  await browser.close();
})();
