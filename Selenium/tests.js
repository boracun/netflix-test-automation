const {Builder, By, Key} = require("selenium-webdriver");
const assert = require("assert");
const { lstat } = require("fs");

async function checkCountryCodes()
{
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https://www.netflix.com/tr/Login");

    var str = await driver.findElement(By.className("btn login-button btn-submit btn-small")).click();

    /*let searchText = await driver.findElement(By.className("gLFyf gsfi")).getText().then(function(value) {
        return value;
    });

    //assert.strictEqual(searchText, "selenium");
    console.log(searchText);

    await driver.quit();*/
}

checkCountryCodes();