var webdriver = require('selenium-webdriver');
var Chance = require('chance');
var chance = new Chance();
var async = require('async');


var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

console.log("Begin script.");
console.log("\t--- begin signup ---");
driver.get("http://www.hgtv.com/content/hgtv-com/en/design/hgtv-smart-home/sweepstakes/enter.html");

// setTimeout(function(){
driver.findElement(webdriver.By.id("xReturningUserEmail")).click();
// }, 3000);    
// driver.findElement(webdriver.By.id("xReturningUserEmail")).click();
// "xReturningUserEmail"
