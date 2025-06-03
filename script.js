const container = document.querySelector("#container");

function createGrid(x){
    for (let i = 0; i < x * x; i++){
        const div = document.createElement("div");
        //div.classList.add("box");
        container.appendChild(div);
        console.log(i + " has been created.");
    }
}

createGrid(16);