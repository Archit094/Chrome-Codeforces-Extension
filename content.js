/**
 * Created by archit on 18/07/17.
 */
console.log('page started') ;
chrome.extension.sendRequest({message : 'contentScriptMessage'}) ;