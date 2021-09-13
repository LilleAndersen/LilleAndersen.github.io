// Dynamically loads content
fetch("freetime.json")
    .then(response => response.json())
    .then(data =>
    {
        for (let i = 0; i < data.freetime.length; i++)
        {
            document.querySelector("#schoolcontent").innerHTML += `
                <div id="${data.freetime[i].title.replace(/\s/g, "")}" class="subpage-content-flex">
                ${data.freetime[i].media} <br>
                <p class="date"> 
                    ${data.freetime[i].date} 
                </p>
                <p class="content"> 
                    <a class="projectname"> ${data.freetime[i].title} </a>
                    <br> ${data.freetime[i].text}
                </p>
                </div>
            `;
        }
    });