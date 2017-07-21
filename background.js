/**
 * Created by archit on 18/07/17.
 */
chrome.extension.onRequest.addListener(function (request,sender)
{
    doIt();
}) ;

function doIt()
{
    var friends = ["uwi","KAN","npcompete94"]; //JSON.parse('http://codeforces.com/api/sinus_070.friends?onlyOnline=false');
    for(var i = 0; i<friends.length; i++)
    {
        printProblems(friends[i]);
    }
}
function printProblems(usern)
{
    console.log('creating ....') ;
    var x = $.get('http://codeforces.com/api/user.status?handle='+usern+'&from=1&count=5') ;
    var i ;
    // var obj = JSON.parse('{ "name":"John", "age":30, "city":"New York"}');
    var submissions = JSON.parse(Get('http://codeforces.com/api/user.status?handle='+usern+'&from=1&count=5'));
    var probs = submissions.result;
    var s  = "" ;
    var probSet = new Set();
    // alert(JSON.stringify(probs)) ;
    for(i = 0 ; i<probs.length ; i++)
    {
        probSet.add(((probs[i].problem).contestId+" "+(probs[i].problem).index)) ;
    }
    for (var problem of probSet)
    {
        s += problem+'\n';
    }
    alert(usern + '\n' + s);
}
function Get(yourUrl)
{
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;
}
