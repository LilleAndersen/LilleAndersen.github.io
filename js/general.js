window.onscroll = function () {
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
        console.log(data)
        for (let i = 0; i < data.school.length; i++)
        {
            document.getElementById("schoolcontent").innerHTML +=
                "<div>" +
                "<h2>" + data.school[i].date + "</h2>" +
                "<p>" + data.school[i].text + "</p>" +
                "</div>";
        }
    });
