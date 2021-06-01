$("#header-pre").load("/sections/header.html")

// Changes visibility in #backtotop after certain amount of px is scrolled
window.onscroll = function () {
    if (window.pageYOffset >= 500) {
        document.querySelector("#backtotop").style.opacity="1";
        document.querySelector("#subpage-header #header").style.boxShadow="0 0 2rem var(--bkg)";
        document.querySelector("#subpage-header #header").style.padding=".5vw 0 .5vw 0";
        document.querySelector("#subpage-header #header").style.background="rgba(251,99,81,.8)";
        document.querySelector("#subpage-header #homebtn:hover, #schoolbtn:hover, #freetimebtn:hover").style.color="rgb(23,23,82)";
        // document.getElementById("backtotop").style.display="inline-block";
    }
    else {
        document.querySelector("#backtotop").style.opacity="0";
        document.querySelector("#subpage-header #header").style.boxShadow="0 0 0 0";
        document.querySelector("#subpage-header #header").style.padding="2vw 0 2vw 0";
        document.querySelector("#subpage-header #header").style.background="none";
        document.querySelector("#subpage-header #homebtn:hover, #schoolbtn:hover, #freetimebtn:hover").style.color="rgb(251,99,81)";
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
