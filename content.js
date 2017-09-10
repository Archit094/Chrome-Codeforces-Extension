console.log('page started') ;
chrome.extension.sendRequest({message : 'contentScriptMessage'}) ;
