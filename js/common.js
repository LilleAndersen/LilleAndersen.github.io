$("#header-pre").load("/sections/header.html")


// window.onresize = function () {
//     if (window.innerWidth <= 500) {
//         document.querySelector("#header-pre").innerHTML = "";
//         $("#header-pre").load("/sections/test.html")
//     }
//     if (window.innerWidth >= 500) {
//         document.querySelector("#header-pre").innerHTML = "";
//         $("#header-pre").load("/sections/header.html")
//     }
// }

document.querySelector("#backtotop").onclick = function () {
    document.querySelector("#backtotop").style.display="none";
}


// Changes visibility in #backtotop after certain amount of px is scrolled
window.onscroll = function () {
    if (window.pageYOffset >= 700) {
        document.querySelector("#backtotop").style.opacity="1";
        document.querySelector("#background").style.opacity="0";
        // document.getElementById("backtotop").style.display="inline-block";
    }
    else {
        document.querySelector("#backtotop").style.opacity="0";
        document.querySelector("#background").style.opacity="100";
        // document.getElementById("backtotop").style.display="none";
    }
}


// Resize timeout
//setTimeout(function () {
//    resize()
//},100)

// Preloader

// $(window).on("load", function () {
//     $(".loader-wrapper").slideDown("slow").fadeOut("slow");
//     setTimeout(function () {
//         document.querySelector("#school").style.overflowY="scroll";
//     }, 250)
//
// });


topbar.config({
    autoRun      : true,
    barThickness : 5,
    barColors    : {
        '0'        : 'rgba(26,  188, 156, .7)',
        '.3'       : 'rgba(41,  128, 185, .7)',
        '1.0'      : 'rgba(231, 76,  60,  .7)'
    },
    shadowBlur   : 5,
    // shadowColor  : 'rgba(0, 0, 0, .5)',
    className    : 'topbar',
})
topbar.show();
(function step() {
    setTimeout(function() {
        if (topbar.progress('+.001') < 1) step()
    }, 16)
})()

setTimeout(function() {
    topbar.hide()
}, 500)
