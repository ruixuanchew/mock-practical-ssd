import { Builder, By, until } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';

const runTest = async () => {
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('http://nginxwebsvr'); // Docker Compose hostname

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

