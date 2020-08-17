import webdriver from "selenium-webdriver";


const driver = new webdriver.Builder().forBrowser("chrome").build();

driver.get("http://www.webdriverjs.com/");
driver.findElement(
    webdriver.By.css(".search-field.form-control")).sendKeys("WebdriverJs");
driver.findElement(webdriver.By.css("button.search-submit i")).click();
driver.wait(webdriver.until.elementTextIs(
    driver.findElement(webdriver.By.css(".vl-main-header>h1")),
    "Search Results for: WebdriverJs"),
    10000);
