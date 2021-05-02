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

fetch("../assets/json/school.json")
    .then(response => response.json())
    .then(data =>
    {
        for (let i = 0; i < data.school.length; i++)
        {
            document.getElementById("content").innerHTML +=
                "<div id='" + data.school[i].title.replace(/\s/g, "") + "'>" +
                "<h2>" + data.school[i].title + "</h2>" +
                "<p>" + data.school[i].content + "</p>" +
                "</div>";
        }
    });
