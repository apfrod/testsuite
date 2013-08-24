// Test running options
var program = require('commander');
var webdriver = require('webdriverjs');
var fs = require('fs');

// Command-line options
program
  .usage('[options]')
  .option('--log <level>', 'Log level: verbose | silent | command | data | result', 'silent')
  .option('--selenium <hostname>', 'Selenium server host', 'localhost')
  .option('--port <number>', 'Selenium server port', '4444')
  .option('--browser <browser>', 'Browser: phantomjs | chrome | firefox | ie (if you have them set up)', 'phantomjs')
  .option('--url <url>', 'URL to init the browser with', 'http://www.example.com/');

// Can also put these command-line options into test.conf
try {
  var opts = fs.readFileSync('./test.opts', 'utf8')
    .trim()
    .split(/\s+/);
  process.argv = process.argv
    .slice(0, 2)
    .concat(opts.concat(process.argv.slice(2)));
} catch (err) {
  // ignore
}

program.parse(process.argv);

// Connection to Selenium, webdriver browser instance
var browser = webdriver.remote({
  desiredCapabilities: { browserName: program.browser },
  logLevel: program.log,
  singleton: true
});

before(function(done) {
  this.timeout(20000);
  browser.init().url(program.url, done);
});

after(function(done) {
  browser.end(done);
});

module.exports.browser = browser;