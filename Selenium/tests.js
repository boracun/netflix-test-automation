const {Builder, By, Key} = require("selenium-webdriver");
const assert = require("assert");
const { lstat } = require("fs");

async function checkCountryCodes()
{
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.manage().window().maximize();
    await driver.get("https://www.netflix.com/tr/Login");

    await driver.findElement(By.name("userLoginId")).sendKeys(0);
    /*let countryCode = await driver.findElement(By.xpath("//em[last()]")).getText().then(function(value) {
        return value;
    });*/

    let countryCodes = await driver.findElements(By.className("country-code"));

    console.log(countryCodes[2].getText().then(function(value) {
        return value;
    }));

    /*let countryCode = await driver.findElement(By.xpath("//li[first()]")).getText().then(function(value) {
        return value;
    });*/

    //assert.strictEqual(searchText, "selenium");

    //await driver.quit();
}

//try to insert all printable ascii characters
async function checkAllASCII() 
{
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.manage().window().maximize();
    await driver.get("https://www.netflix.com/tr/Login");

    let inputText = "";

    for(asciiCode = 32; asciiCode < 127; asciiCode++)
    {
        inputText += String.fromCharCode(asciiCode);
        await driver.findElement(By.name("userLoginId")).sendKeys(String.fromCharCode(asciiCode));
        await driver.findElement(By.name("password")).sendKeys(String.fromCharCode(asciiCode));
    }

    let userId = await driver.findElement(By.name("userLoginId")).getAttribute("value").then(function(value) {
        return value;
    });

    let password = await driver.findElement(By.name("password")).getAttribute("value").then(function(value) {
        return value;
    });

    try
    {
        assert.strictEqual(userId, inputText);
        try
        {
            assert.strictEqual(password, inputText);
            console.log("Test case #5 is successful.");
        }
        catch (err) 
        {
            console.log("Test case #5 failed: The expected and actual user passwords do not match.");
        }
    }
    catch (err) 
    {
        console.log("Test case #5 failed: The expected and actual user IDs do not match.");
    }

    await driver.quit();
}

//checkCountryCodes();
checkAllASCII();