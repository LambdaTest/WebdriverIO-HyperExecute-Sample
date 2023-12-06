const browser = 'Chrome';
exports.config = {
  services: [
    [
      "lambdatest",
      {
        tunnel: false,
        lambdatestOpts: {
          logFile: "tunnel.log"
        }
      }
    ]
  ],
  user: process.env.LT_USERNAME,
  key: process.env.LT_ACCESS_KEY,
  buildName: process.env.LT_BUILD_NAME,
  exclude: [],

  capabilities: [
    {
      "LT:Options": {
      browserName:  browser,
      version: "latest",
      name: "Test WebdriverIO",
      build: "WebDriver Selenium Sample",
      visual: true,
      console: true,
      network: true,
      platformName: process.env.HYPEREXECUTE_PLATFORM || 'windows 10'  
    }
    }],
  logLevel: "info",
  coloredLogs: true,
  screenshotPath: "./errorShots/",
  waitforTimeout: 100000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 1,
  path: "/wd/hub",
  hostname: "hub.lambdatest.com",
  port: 80,
  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 12000000
  }
};
