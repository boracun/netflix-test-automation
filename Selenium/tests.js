const {Builder, By, Key, until} = require("selenium-webdriver");
const assert = require("assert");
const { lstat } = require("fs");
const { Driver } = require("selenium-webdriver/chrome");
const { Browser } = require("selenium-webdriver");
const { Actions } = require("selenium-webdriver/lib/input");

runTestsOneByOne();

async function runTestsOneByOne()
{
    //await checkButtonDisableFacebookLogin();
    //await checkCountryCodes();
    await checkLengthConstraints();
    await checkElementLoss();
    await checkAllASCII();
}

//TEST CASE 1: The user should not be able to click the Facebook login button repeatedly
async function checkButtonDisableFacebookLogin() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.manage().window().maximize();
    await driver.get("http://localhost/netflix-test-automation/netflix-login-page");
    await driver.findElement(By.className("face_login")).click();
    await driver.sleep(1000);

    let windows = await driver.getAllWindowHandles();
    await driver.switchTo().window(windows[1]);
    await driver.sleep(1000);
    await driver.findElement(By.id("fcLogin")).click();
    let value = await driver.findElement(By.id("fcLogin")).isEnabled();

    try
    {
        assert.strictEqual(value, false);
        console.log("Test case #1 is successful.");
    }
    catch (err) 
    {
        console.log("Test case #1 failed: Login button is not disabled and might be clicked repeatedly.");
    }
    await driver.quit();
}

//TEST CASE 2: Check that all the codes in the country code list add the respective code to the phone number.
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
            console.log("Test case #2 failed: The country code at index " + i + " returns a wrong code when clicked.");
            await driver.quit();
        }
    }
    
    console.log("Test case #2 is successful.");
    await driver.quit();
}

//TEST CASE 3: Check that the length constraints for the input field are correct for the first 60 characters for email (Length between 5 and 50 is valid)
//and for 70 characters for password (Length between 4 and 60 is valid).
async function checkLengthConstraints() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.manage().window().maximize();
    await driver.get("http://localhost/netflix-test-automation/netflix-login-page");
    await driver.findElement(By.id("password")).sendKeys("abcde");

    for(let i = 0; i < 60; i++) {

        let el = await driver.findElement(By.className("header"));
        await new Actions(driver).move(el).click().perform();
        
        if ((i >= 5 && i <= 50) || i == 0) {
            try {
                await driver.findElement(By.className("emailError"));
                console.log("Test case #3 failed, email constraints are violated.");
                await driver.quit();
            }
            catch (err) {
                
            }
        }
        else {
            try {
                await driver.findElement(By.className("emailError"));
            }
            catch (err) {
                console.log("Test case #3 failed, email constraints are violated.");
                await driver.quit();
            }
        }
        await driver.findElement(By.id("email")).sendKeys("a");
    }

    await driver.navigate().refresh();

    await driver.findElement(By.id("email")).sendKeys("abcde");

    for(let i = 0; i < 70; i++) {

        let el = await driver.findElement(By.className("header"));
        await new Actions(driver).move(el).click().perform();
        
        if ((i >= 4 && i <= 60) || i == 0) {
            try {
                await driver.findElement(By.className("passError"));
                console.log("Test case #3 failed, password constraints are violated.");
                await driver.quit();
            }
            catch (err) {
                
            }
        }
        else {
            try {
                await driver.findElement(By.className("passError"));
            }
            catch (err) {
                console.log("Test case #3 failed, password constraints are violated.");
                await driver.quit();
            }
        }
        await driver.findElement(By.id("password")).sendKeys("a");
    }

    console.log("Test case #3 is successful.");

    await driver.quit();
}

//TEST CASE 4: Check that all the existing elements are still present after clicking facebook button and clicking login button with a 5 length input for password and email
async function checkElementLoss() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.manage().window().maximize();
    await driver.get("http://localhost/netflix-test-automation/netflix-login-page");
    let afterSet = new Set();
    let priorArr = [];
    let allElementsPrior = await driver.findElements(By.xpath("//*"));
    for (let i = 0; i < allElementsPrior; i++) {
        allElementsPrior[i].id_.then((id) => {priorArr[i] = id;});
    }

    await driver.findElement(By.id("password")).sendKeys("abcde");
    await driver.findElement(By.id("email")).sendKeys("abcde");
    await driver.findElement(By.id("signIn")).click();
    await driver.findElement(By.id("signIn")).click();
    await driver.sleep(5000);

    let allElementsAfter = await driver.findElements(By.xpath("//*"));
    for (let i = 0; i < allElementsAfter; i++) {
        allElementsPrior[i].id_.then((id) => {afterSet.add(id)});
    }

    for (let i = 0; i < priorArr.length; i++) {
        if (!afterSet.has(priorArr[i])) {
            console.log("Test case #4 failed, some elements are lost.");
            await driver.quit();
        }
    }

    console.log("Test case #4 is successful.");
    await driver.quit();
}

//TEST CASE 5: Check that all ASCII characters can be inserted to both text fields.
//try to insert all printable ascii characters
async function checkAllASCII() 
{
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.manage().window().maximize();
    await driver.get("http://localhost/netflix-test-automation/netflix-login-page");

    let inputText = "";

    for(let asciiCode = 32; asciiCode < 127; asciiCode++)
    {
        inputText += String.fromCharCode(asciiCode);
        await driver.findElement(By.id("email")).sendKeys(String.fromCharCode(asciiCode));
        await driver.findElement(By.id("password")).sendKeys(String.fromCharCode(asciiCode));
    }

    let userId = await driver.findElement(By.id("email")).getAttribute("value").then(function(value) {
        return value;
    });

    let password = await driver.findElement(By.id("password")).getAttribute("value").then(function(value) {
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