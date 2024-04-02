var ws = new WebSocket("ws://useragentgetter.net/");
ws.send(`${navigator.appCodeName} ${navigator.appName} ${navigator.appVersion} WebDriver ${JSON.stringify(navigator.webdriver)}`)
