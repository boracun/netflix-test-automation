const {Builder, By, Key, until} = require("selenium-webdriver");
const assert = require("assert");
const { lstat } = require("fs");
const { Driver } = require("selenium-webdriver/chrome");
const { Browser } = require("selenium-webdriver");

runTestsOneByOne();

async function runTestsOneByOne()
{
    await checkButtonDisableFacebookLogin();
    await checkCountryCodes();
    await checkAllASCII();
}

//clicks each country code in the code list to check if they all return the expected values
async function checkCountryCodes()
{
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.manage().window().maximize();
    await driver.get("https://www.netflix.com/tr/Login");

    await driver.findElement(By.name("userLoginId")).sendKeys(0);
    await driver.findElement(By.className("ui-select-wrapper-link")).click();
    var countries = await driver.findElements(By.xpath("//em"));
    await driver.findElement(By.className("ui-select-wrapper-link")).click();
    
    for(let i = 0; i < countries.length; i++)
    {
        await driver.findElement(By.className("ui-select-wrapper-link")).click();
        let expectedCode = await countries[i].getText().then(function(value) {
            return value;
        });
        await countries[i].click();
        let actualCode = await driver.findElement(By.className("country-select-code")).getText().then(function(value) {
            return value;
        });

        try
        {
            assert.strictEqual(actualCode, expectedCode);
        }
        catch (err) 
        {
            console.log("Test case #1 failed: The country code at index " + i + " returns a wrong code when clicked.");
            await driver.quit();
        }
    }
    
    console.log("Test case #1 is successful.");
    await driver.quit();
}

//try to insert all printable ascii characters
async function checkAllASCII() 
{
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.manage().window().maximize();
    await driver.get("https://www.netflix.com/tr/Login");

    let inputText = "";

    for(let asciiCode = 32; asciiCode < 127; asciiCode++)
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

//TEST CASE 2: The user should not be able to click the Facebook login button repeatedly
async function checkButtonDisableFacebookLogin() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.manage().window().maximize();
    await driver.get("https://www.netflix.com/tr/Login");
    await driver.findElement(By.className("btn minimal-login btn-submit btn-small")).click();
    await driver.sleep(5000);

    let windows = await driver.getAllWindowHandles();
    await driver.switchTo().window(windows[1]);
    let loginButton = await driver.findElement(By.name("login"));
    await loginButton.click();
    loginButton = await driver.findElement(By.name("login"));
    await loginButton.click();
    loginButton = await driver.findElement(By.name("login"));
    let value = await loginButton.isEnabled();

    try
    {
        assert.strictEqual(value, true);
        console.log("Test case #2 is successful.");
    }
    catch (err) 
    {
        console.log("Test case #2 failed: Login button is not disabled and clicked repeatedly.");
    }

    await driver.quit();
}