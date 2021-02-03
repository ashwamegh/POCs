const puppeteer = require("puppeteer");

function puppeteerPage() {
  return new Promise(async (resolve) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    page.setViewport({
      width: 1920,
      height: 1080,
      deviceScaleFactor: 1,
    });
    resolve({ page, browser });
  });
}

module.exports = puppeteerPage;
