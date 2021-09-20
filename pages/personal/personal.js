// Dynamically loads content
fetch("personal.json")
    .then(response => response.json())
    .then(data =>
    {
        for (let i = 0; i < data.personal.length; i++)
        {
            const oddeven = i % 2 === 0 ? "even" : "odd";
            document.querySelector("#schoolcontent").innerHTML += `
                <div id="${data.personal[i].title.replace(/\s/g, "")}" class="subpage-content-flex ${oddeven}">
                ${data.personal[i].media} <br>
                <p class="content"> 
                    <br>
                    <b class="projecttitle"> ${data.personal[i].title} </b>
                    <br> ${data.personal[i].text}
                </p>
                </div>
            `;
        }
    });