
chrome.extension.onRequest.addListener(function (request,sender)
{

    doIt();
});

function doIt()
{
    //uncomment the below commented part to see how it works
    // alert(getUsers());
    addUser(['uwi','KAN','Petr']);
    //
    // alert(getUsers());
    //
    addUser("tourist");
    //
    // alert(getUsers());
    var ls1 = ["Um_nik","send_nodes"];
    addUserList(ls1);

    friends = getUsers().split(',');
    for(var i = 0; i<friends.length; i++)
    {
        printProblems(friends[i]);
    }
}

function getUsers()
{
    return localStorage.getItem('users');
}
function addUser(user)
{
    var oldUsers = (getUsers()).split(',');
    oldUsers.push(user);
    writeToList("users",oldUsers);
}
function addUserList(ls) {
    var ls1 = getUsers().split(',');
    alert(ls1);
    ls1.push.apply(ls1,ls);
    alert(ls1);
    writeToList(ls1);
}

function writeToList(name, ls)
{
    localStorage.setItem(name,ls);
}

function printProblems(usern)
{
    console.log('creating ....') ;
//     var x = $.get('http://codeforces.com/api/user.status?handle='+usern+'&from=1&count=5') ;
    var i ;
    // var obj = JSON.parse('{ "name":"John", "age":30, "city":"New York"}');
    var submissions = JSON.parse(Get('http://codeforces.com/api/user.status?handle='+usern+'&from=1&count=5'));
    var probs = submissions.result;
    var s  = "" ;
    var probSet = new Set();

    for(i = 0 ; i<probs.length ; i++)
    {
        probSet.add(((probs[i].problem).contestId+" "+(probs[i].problem).index)) ;
    }


    for (var problem of probSet)
    {
        s += problem+'\n';
    }

    // addProblem(yy);
    alert(usern + '\n' + s);
}
function Get(yourUrl)
{
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;
}
