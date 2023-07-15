const puppeteer = require('puppeteer');

async function run() {
  // Launch a headful browser
  const browser = await puppeteer.launch({ headless: false });
  
  // Create a new page
  const page = await browser.newPage();
  
  // Go to the website "swap.defillama.com"
  await page.goto('https://swap.defillama.com');
  
  // Set the viewport size
  await page.setViewport({ width: 1000, height: 900 });
  
  // Wait for a specific component on the page to load
  const componentSelector = '.dlZmAt';
  await page.waitForSelector(componentSelector);
  
  // Fill the form with "Arbitrum One" and the value "12"
  await page.type("#react-select-2-input", "Arbitrum One");
  await page.click("#react-select-2-input", { clickCount: 1 });
  await page.keyboard.press('Enter', { delay: 10 });
  await page.click(".css-lv0ed5", { clickCount: 3 });
  await page.type(".css-lv0ed5", "12");
  
  // Select the "USDC" token from a popup menu
  await page.click(".css-qjhap", { clickCount: 1 });
  const optionSelector = '.cjxQGj'; // Selector for the options in the popup menu
  const optionIndex = 1; // Index of the second option (zero-based)
  
  // Get all the options in the popup menu
  const options = await page.$$eval(optionSelector, elements => elements.map(el => el.innerText));
  
  // Find the index of the desired option based on its attribute
  const desiredOptionIndex = options.findIndex(option => option.includes('USD Coin (USDC)'));
  
  // Click on the desired option
  const desiredOption = await page.$$(optionSelector).then(options => options[desiredOptionIndex || optionIndex]);
  await desiredOption.click();
  
  // Perform a swap using the "Swap" button
  await page.click(".css-v1p1bl", { clickCount: 1 });
  
  // Select the "WBTC" token from another popup menu
  await page.click(".css-qjhap", { clickCount: 1 });
  await page.type(".css-s1d1f4", "Wrapped BTC");
  await page.waitForTimeout(1000);
  await page.click(".jUxgJZ", { clickCount: 1 });
  await page.click(".cjxQGj", { clickCount: 1 });
  
  // Wait for a specific duration
  await page.waitForTimeout(8000);
  
  // Fetch all elements with the specified class
  const elements = await page.$$('.knYyMy');
  
  // Click on the second element (index 1)
  await elements[1].click();
  
  // Capture a screenshot of the page
  await page.screenshot({ path: 'screenshot.png' });
  
  // Keep the browser window open
  await new Promise(() => {});
}

run().catch(console.error);
