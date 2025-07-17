import { Builder, By, until } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';

const runTest = async () => {
  const driver = await new Builder()
    .forBrowser('chrome')
    .usingServer('http://localhost:4444/wd/hub')
    .setChromeOptions(new chrome.Options())
    .build();

  try {
    // ACCESS VIA nginx SERVICE NAME
    await driver.get('http://nginx');

    const heading = await driver.wait(
      until.elementLocated(By.css('h1')),
      5000
    );

    const text = await heading.getText();
    console.log('Found heading text:', text);

    if (text !== 'Ruixuan (2302036) Practical') {
      throw new Error('Heading text does not match!');
    }

  } finally {
    await driver.quit();
  }
};

runTest();
