/**
 * Created by archit on 18/07/17.
 */
chrome.extension.onRequest.addListener(function (request,sender)
{
    f1() ;
}) ;
function f1()
{
    console.log('creating ....') ;
    var x = $.get('http://codeforces.com/api/user.status?handle=npcompete94&from=1&count=5') ;
    var i ;
    // var obj = JSON.parse('{ "name":"John", "age":30, "city":"New York"}');
    var submissions = JSON.parse(Get('http://codeforces.com/api/user.status?handle=npcompete94&from=1&count=5'));
    var probs = submissions.result;
    var s  = "" ;
    alert(JSON.stringify(probs)) ;
    for(i = 0 ; i<probs.length ; i++)
    {
        s+=((probs[i].problem).contestId+" "+(probs[i].problem).index)+'\n' ;
    }
    alert(s) ;
}
function Get(yourUrl)
{
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;
}
