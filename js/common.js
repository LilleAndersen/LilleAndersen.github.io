$("#header-pre").load("/sections/header.html")

// Changes visibility in #backtotop after certain amount of px is scrolled
window.onscroll = function () {
    if (window.pageYOffset >= 400) {
        document.querySelector("#backtotop").style.opacity="1";
        document.querySelector("#subpage-header #header").style.boxShadow="0 1px 30px 0 var(--bkg)";
        // document.getElementById("backtotop").style.display="inline-block";
    }
    else {
        document.querySelector("#backtotop").style.opacity="0";
        document.querySelector("#subpage-header #header").style.boxShadow="0 0 0 0";
        // document.getElementById("backtotop").style.display="none";
    }
}

// Spins Github logo
$(document).ready(function(){
    $(".img").hover(function(){
        $(".bodyP").addClass("adamfade");
    }, function () {
        $(".bodyP").removeClass("adamfade");
    });
});

// Resize timeout
setTimeout(function () {
    resize()
},100)

// Preloader

$(window).on("load", function () {
    $(".loader-wrapper").slideDown("slow").fadeOut("slow");
    setTimeout(function () {
        document.querySelector("#school").style.overflowY="scroll";
    }, 250)

});
