$("#header-pre").load("/sections/header.html")
console.log("you're cringe")

const blueHover = '#subpage-header #homebtn:hover, #schoolbtn:hover, #freetimebtn:hover { color: rgb(23,23,82) }';
const pinkHover = '#subpage-header #homebtn:hover, #schoolbtn:hover, #freetimebtn:hover { color: rgb(251,99,81) }';
const style = document.createElement('style');

// Changes visibility in #backtotop after certain amount of px is scrolled
window.onscroll = function () {
    console.log(pageYOffset)
    if (window.pageYOffset >= 800) {
        document.querySelector("#backtotop").style.opacity="1";
        document.querySelector("#background").style.opacity="0";
        // document.querySelector("#subpage-header #header").style.boxShadow="0 0 2rem var(--bkg)";
        // document.querySelector("#subpage-header #header").style.padding=".5vw 0 .5vw 0";
        // document.querySelector("#subpage-header #header").style.background="rgba(251,99,81,.8)";
        // document.querySelector("#subpage-header #homebtn:hover, #schoolbtn:hover, #freetimebtn:hover").style.color="rgb(23,23,82)";
        // if (style.styleSheet) {
        //     style.styleSheet.cssText = blueHover;
        // } else {
        //     style.appendChild(document.createTextNode(blueHover));
        // }
        // document.getElementById("backtotop").style.display="inline-block";
    }
    else {
        document.querySelector("#backtotop").style.opacity="0";
        document.querySelector("#background").style.opacity="100";
        // document.querySelector("#subpage-header #header").style.boxShadow="0";
        // document.querySelector("#subpage-header #header").style.padding="2vw 0 2vw 0";
        // document.querySelector("#subpage-header #header").style.background="none";
        // document.querySelector("#subpage-header #homebtn:hover, #schoolbtn:hover, #freetimebtn:hover").style.color="rgb(251,99,81)";
        // if (style.styleSheet) {
        //     style.styleSheet.cssText = pinkHover;
        // } else {
        //     style.appendChild(document.createTextNode(pinkHover));
        // }
        // document.getElementById("backtotop").style.display="none";
    }
}

document.getElementsByTagName('head')[0].appendChild(style);

// Resize timeout
setTimeout(function () {
    resize()
},100)

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
