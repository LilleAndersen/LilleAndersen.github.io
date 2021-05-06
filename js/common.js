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

// Softloads content
fetch("../assets/json/school.json")
    .then(response => response.json())
    .then(data =>
    {
        for (let i = 0; i < data.school.length; i++)
        {
            document.getElementById("schoolcontent").innerHTML +=
                "<div id='" + data.school[i].title.replace(/\s/g, "") + "'>" +
                data.school[i].media + "<br>" +
                "<p>" + "<a class='date'>" + data.school[i].date + "</a>" +
                "<br>" + data.school[i].text +
                "</p>" +
                "</div>";
        }
    });

// Timeout
setTimeout(function () {
    resize()
},75)