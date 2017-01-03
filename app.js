const DashButton = require("dash-button");
const PHY_ADDR = "xx:xx:xx:xx:xx:xx";

let button = new DashButton(PHY_ADDR);

const webdriver = require('selenium-webdriver');

let driver;
let By = webdriver.By;

let stations;
let ch = 1;

driver = new webdriver.Builder().forBrowser('firefox').build();
driver.get('http://radiko.jp/').then(() => {
	driver.findElements(webdriver.By.css('#station-list li')).then((stationslist) => {
		stations = stationslist.length;
	});
});

button.addListener(() => {
	if(ch > stations) ch = 1;
	console.log(ch + '/'+ stations);
	driver.findElement(webdriver.By.css('#station-list li:nth-child('+ch+')')).click();
	ch++;
});