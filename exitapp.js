// JavaScript Document

document.addEventListener("deviceready", appReady, false);

//HANDLE BACK BUTTON
function appReady()
{   
    document.addEventListener('backbutton', function(e){
        var activePage = $.mobile.activePage.attr('id');

        if(activePage == 'menuPage')
        {
            e.preventDefault();
            navigator.app.exitApp();
        }
        else if(activePage == 'Page2')
        {
            e.preventDefault();
            $.mobile.changePage('#menuPage');
        }
        else 
        {
             navigator.app.backHistory();
        }
    }, false);
}