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
  var dog=document.getElementById("dogPic");
    var oldLeft =dog.style.left;
    dog.style.left=Math.floor((Math.random()*200)+1)+'px'
    dog.style.top = Math.floor((Math.random()*200)+1)+'px'
});

document.addEventListener('DOMContentLoaded', scroll, false);