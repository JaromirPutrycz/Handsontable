const {By, Builder, Browser} = require('selenium-webdriver');
const assert = require("assert");
(async function firstTest() {
 let driver;
 try {
 driver = await new Builder().forBrowser(Browser.FIREFOX).build();
 await driver.manage().setTimeouts({implicit: 20000});
 await driver.get('https://handsontable.com/demo')
 const resources = await driver.findElement(By.className('CybotCookiebotDialogBodyButton'));
 console.log(await resources.isDisplayed());  // Check if element is displayed
 //console.log(Button)
 await resources.click();
 } catch (e) {
 console.log(e)
 } finally {
 await driver.quit();
 }
}())
