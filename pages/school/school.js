// Dynamically loads content
fetch("school.json")
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