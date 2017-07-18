/**
 * Created by archit on 18/07/17.
 */
chrome.extension.onRequest.addListener(function (request,sender)
{
    console.log('request recieved') ;
    f1() ;
}) ;
function f1() {
    chrome.notifications.create('name-for-notification', {
            type: 'basic',
            iconUrl: 'image.jpeg',
            title: "This is a notification",
            message: "hello there!"
        },
        function () {
            console.log('created !')
        }
    );
}