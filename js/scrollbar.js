window.onscroll = function () {
    console.log(window.pageYOffset)
    if (window.pageYOffset >= 800) {
        document.getElementById("backtotop").style.opacity="1";
    }
    else {
        document.getElementById("backtotop").style.opacity="0";
    }
}

$(document).ready(function(){
    $(".img").hover(function(){
        $(".bodyP").addClass("adamfade");
    }, function () {
        $(".bodyP").removeClass("adamfade");
    });
});
