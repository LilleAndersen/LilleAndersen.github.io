$("#header-pre").load("/sections/header.html")

// Changes visibility in #backtotop after certain amount of px is scrolled
window.onscroll = function () {
    if (window.pageYOffset >= 800) {
        document.getElementById("backtotop").style.opacity="1";
        // document.getElementById("backtotop").style.display="inline-block";
    }
    else {
        document.getElementById("backtotop").style.opacity="0";
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

function CopyToClipboard(little)
{
    var r = document.createRange();
    r.selectNode(document.getElementById(little));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    alert("shit")
}
