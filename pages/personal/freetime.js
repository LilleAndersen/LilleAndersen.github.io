// Dynamically loads content
fetch("/pages/freetime/freetime.json")
    .then(response => response.json())
    .then(data =>
    {
        for (let i = 0; i < data.freetime.length; i++)
        {
            document.getElementById("schoolcontent").innerHTML +=
                "<div id='" + data.freetime[i].title.replace(/\s/g, "") + "'>" +
                data.freetime[i].media + "<br>" +
                "<p>" + "<a class='projectname'>" + data.freetime[i].title + "</a>" +
                "<br>" + data.freetime[i].text +
                "</p>" +
                "</div>";
        }
    });