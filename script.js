console.log("Working !!!!");

const btn = document.querySelector(".btn");
const input = document.querySelector("input");
const table = document.querySelector("tbody");
const spinner = document.querySelector(".spinner-border");

spinner.classList.add("show");

function hideSpinner() {
    spinner.classList.remove("show");
    spinner.classList.add("hide");
}

function GrabItems(url){
    table.innerHTML = '';
    const fetchPromise = fetch(url);
    fetchPromise.then(response => {
    return response.json();
    }).then(people => {
        people.forEach(function(item,i) {

            hideSpinner();
            
            const tr = document.createElement("tr");

            const th = document.createElement("th");
            th.appendChild(document.createTextNode(i));

            const td1 = document.createElement("td");
            td1.appendChild(document.createTextNode(item.name));

            const td2 = document.createElement("td");
            td2.appendChild(document.createTextNode(item.birthday));

            const td3 = document.createElement("td");
            td3.appendChild(document.createTextNode(item.status));

            const td4 = document.createElement("td");
            td4.className = "w-25";
            const img = document.createElement("img");
            img.className ="img-fluid img-thumbnail";
            img.setAttribute("src",item.img);
            td4.appendChild(img);



            tr.appendChild(th);
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);

            table.appendChild(tr);

        });

    });
}

GrabItems("https://www.breakingbadapi.com/api/characters");





btn.addEventListener("click",function(event) {

    const url = "https://www.breakingbadapi.com/api/characters?name="+input.value;
    GrabItems(url);

    
    
    });
