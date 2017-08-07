/**
 * Created by archit on 27/07/17.
 */
refresh() ;
function refresh()
{
    console.log('method called') ;
    var items = getUsers() ;
    console.log(items) ;
    for(var ind in items)
    {
        $('#friends_list').append('<li><a >'+items[ind]+'</a></li>') ;
    }
}
function addUserUI()
{
    var usern = $('#user_name').val() ;
    addUser(usern) ;
    $('#friends_list').append('<li><a >'+usern+'</a></li>') ;
}
$('#link').click(addUserUI) ;