// Dynamically loads content
fetch("school.json")
    .then(response => response.json())
    .then(data =>
    {
        for (let i = 0; i < data.school.length; i++)
        {
            let oddeven = "";
            console.log(i)
            if ( i % 2 === 0) {
                oddeven = "even";
            } else {
                oddeven = "odd";
            }
            document.querySelector("#schoolcontent").innerHTML += `
                <div id="${data.school[i].title.replace(/\s/g, "")}" class="subpage-content-flex ${oddeven}">
                ${data.school[i].media} <br>
                <p class="content"> 
                    <b class="date"> 
                    ${data.school[i].date}
                    <br>
                    </b>
                    <b class="projecttitle"> ${data.school[i].title} </b>
                    <br> ${data.school[i].text}
                </p>
                </div>
            `;
                // "<div id='" + data.school[i].title.replace(/\s/g, "") + "'>" +
                // data.school[i].media + "<br>" +
                // "<p class='date'>" + data.school[i].date + "</p>" +
                // "<p>" + "<h1 class='projectname'>" + data.school[i].title + "</h1>" +
                // "<br>" + data.school[i].text +
                // "</p>" +
                // "</div>";
        }
    });