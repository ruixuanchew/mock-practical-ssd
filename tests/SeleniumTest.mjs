const { Builder, By } = require('selenium-webdriver');

async function runTest() {
  const driver = await new Builder().forBrowser('chrome').usingServer('http://localhost:4444/wd/hub').build();

  try {
    await driver.get('http://localhost:8080'); // ✅ Must match what http-server uses
    const heading = await driver.findElement(By.tagName('h1')).getText();
    console.log('Found heading text:', heading);
    if (heading !== 'Expected Heading') {
      throw new Error('Heading text does not match!');
    }
  } finally {
    await driver.quit();
  }
}

runTest();
