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

// Dynamically loads content
fetch("../../assets/json/school.json")
    .then(response => response.json())
    .then(data =>
    {
        for (let i = 0; i < data.school.length; i++)
        {
            document.getElementById("schoolcontent").innerHTML +=
                "<div id='" + data.school[i].title.replace(/\s/g, "") + "'>" +
                data.school[i].media + "<br>" +
                "<p class='date'>" + data.school[i].date + "</p>" +
                "<p>" + "<a class='projectname'>" + data.school[i].title + "</a>" +
                "<br>" + data.school[i].text +
                "</p>" +
                "</div>";
        }
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

// Passing a selector
lazyframe("iframe");
