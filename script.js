const container = document.querySelector("#container");

const button = document.querySelector("#newGame");
button.addEventListener("click", newGame);

function newGame(){
    clearboard();
    createBoard();
}

function createBoard(){
    const BOARD = 960;
    const pixelsPerSide = getPixelsPerSide();
    createGrid(BOARD/pixelsPerSide);
    setSquareSize(pixelsPerSide)    
}

function getPixelsPerSide(){
    const BOARD = 960;
    let userInput = prompt('How many squares on each side?')
    userInput = Math.floor(userInput)
    return BOARD/userInput
}

function createGrid(x){
    for (let i = 0; i < x * x; i++){
        const square = document.createElement("div");
        container.appendChild(square);
    }
}

function setSquareSize(x){
    const squares = document.querySelectorAll('#container > div')
    console.log(squares);
    for (let i = 0; i < squares.length; i++){
        squares[i].style.width = `${x}px`;
        squares[i].style.height = `${x}px`;
    }
}

function clearboard(){
    container.innerHTML = '';
}