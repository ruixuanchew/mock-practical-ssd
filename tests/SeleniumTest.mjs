import { Builder, By, until } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';

const runTest = async () => {
  const driver = await new Builder()
    .forBrowser('chrome')
    .usingServer('http://localhost:4444/wd/hub') // Connect to the GitHub Actions service
    .setChromeOptions(new chrome.Options())
    .build();

  try {
    await driver.get('http://nginx'); // Access NGINX service

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
