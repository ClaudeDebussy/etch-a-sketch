const container = document.querySelector("#container");

const button = document.querySelector("#newGame")
button.addEventListener("click", setBoardSize)

function setBoardSize(){
    const BOARD = 960;
    let userInput = prompt('How many squares on each side?')
    userInput = Math.floor(userInput)
    const squareSidesLength = BOARD/userInput
    createGrid(userInput);
    
    const squares = document.querySelectorAll('#container > div')
    console.log(squares);
    for (let i = 0; i < squares.length; i++){
        squares[i].style.width = `${squareSidesLength}px`;
        squares[i].style.height = `${squareSidesLength}px`;
    }
}

function createGrid(x){
    for (let i = 0; i < x * x; i++){
        const square = document.createElement("div");
        container.appendChild(square);
    }
    
}

