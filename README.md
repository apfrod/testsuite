Mocha Webdriver Test Suite Example
==================================

An example mocha test suite using webdriver, with configuration using command-line options.

### Usage

Have selenium running:
```shell
java -jar selenium-server-standalone-2.31.0.jar
```

And in another terminal, run the suite:
```shell
mocha test/
```

There are two tests, which both include browser.js. This creates the connection to webdriver, does init and end in 'before' and 'after' mocha things and adds extra options for running the tests:
```shell
$ node test/browser.js -h

  Usage: browser.js [options]

  Options:

    -h, --help             output usage information
    --log <level>          Log level: verbose | silent | command | data | result
    --selenium <hostname>  Selenium server host
    --port <number>        Selenium server port
    --browser <browser>    Browser: phantomjs | chrome | firefox | ie (if you have them set up)
    --url <url>            URL to init the browser with
```

So you can run the whole suite or run individual tests, and they will all re-use one webdriver connection:
```shell
mocha test/test1.js
```
Or you can quickly try against another browser:
```shell
mocha test/test1.js --browser chrome
```

Options can also be put into the file 'test.opts'. test/mocha.opts is also provided as an example, where mocha options go.

### Dependencies

+    [webdriverjs](https://github.com/camme/webdriverjs)
+    [commander](http://visionmedia.github.io/commander.js/)
+    [mocha](http://visionmedia.github.io/mocha/)
+    [selenium](http://docs.seleniumhq.org/)
+    [phantomjs](http://phantomjs.org/)
