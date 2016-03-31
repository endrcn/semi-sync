# Semi-Sync
[![NPM version](https://img.shields.io/npm/v/semi-sync.svg)](https://www.npmjs.com/package/semi-sync)

Semi-Sync allows you to semi-synchronous requests. There are two ways you can send links that you want to request.
You can send links in the array or file.

## Example Code
```javascript
var semiSync = require("semi-sync");

semiSync.requestLinksFromArray(linksArray, requestLimitInSameTime, function(err, results){
	if(err) console.log(err);
	//...
});

semiSync.requestLinksFromFile(linksFilePath, requestLimitInSameTime, function(err, results){
	if(err) console.log(err);
	//...
});

```
There are two functions in semi-sync module.

## Download
The source is available for download from [GitHub](https://github.com/endrcn/semi-sync). Alternatively you can install using npm:

`npm install --save semi-sync`
