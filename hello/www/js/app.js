$('#tab-bar a').on('click', function(e){
    e.preventDefault();
    var nextPage = $(e.target.hash);
    page(nextPage); //You need to add this for it to work
    $("#pages .current").removeClass("current");
    nextPage.addClass("current");
});

function page(toPage) {
    var toPage = $(toPage),
        fromPage = $("#pages .current");
    toPage.addClass("current fade in").one("webkitAnimationEnd", function(){
        fromPage.removeClass("current fade out");
        toPage.removeClass("fade in")
    });
    fromPage.addClass("fade out");
}

function page(toPage) {
    var toPage = $(toPage),
        fromPage = $("#pages .current");
    if(toPage.hasClass("current") || toPage === fromPage) {
        return;
    };
    toPage.addClass("current fade in").one("webkitAnimationEnd", function(){
        fromPage.removeClass("current fade out");
        toPage.removeClass("fade in")
    });
    fromPage.addClass("fade out");
}

var theScroll;
function scroll(){
    theScroll = new iScroll('wrapper');
}


$('#btn').on('click', function(e){
    $.get( "http://localhost/upload.php?client=", function( data ) {
       alert( "Data Loaded: " + data );
        var dog=document.getElementById("dogPic");
        var house=document.getElementById("housePic");
        dog.style.left= house.offsetLeft+house.width/2 + data/10+ 'px';
        dog.style.top =  house.height/2 + data/10+ 'px';

    });

// alert(house.height);



});

document.addEventListener('DOMContentLoaded', scroll, false);





//var promise = Kinvey.ping();
//promise.then(function(response) {
//    console.log('Kinvey Ping Success. Kinvey Service is alive, version: ' + response.version + ', response: ' + response.kinvey);
//}, function(error) {
//    console.log('Kinvey Ping Failed. Response: ' + error.description);
//});
