const container = document.querySelector("#container");

const button = document.querySelector("#newGame");
button.addEventListener("click", newGame);

function newGame(){
    clearboard();
    createBoard();
    enableEtchASketch();
}

function clearboard(){
    container.innerHTML = '';
}

function createBoard(){
    const BOARD_PIXELS = 960;
    const pixelsPerSide = getPixelsPerSide(BOARD_PIXELS);
    createGrid(BOARD_PIXELS/pixelsPerSide);
    setSquareSize(pixelsPerSide)    
}

function getPixelsPerSide(x){
    const BOARD = x;
    let valid = false;
    let pixelsPerSide = 0;
    while (valid === false){
        let userInput = parseInt(prompt('How many squares on each side?'));
        if (
            userInput > 0 &&
            userInput < 100 &&
            isNaN(userInput) === false &&
            Number.isInteger(userInput)
        ){
            valid = true;
            pixelsPerSide = BOARD / userInput;
        }
    }    
    return pixelsPerSide;
}

function createGrid(x){
    for (let i = 0; i < x * x; i++){
        const square = document.createElement("div");
        container.appendChild(square);
    }
}

function setSquareSize(x){
    const squares = document.querySelectorAll('#container > div')
    for (let i = 0; i < squares.length; i++){
        squares[i].style.width = `${x}px`;
        squares[i].style.height = `${x}px`;
    }
}

function enableEtchASketch(){
    const squares = document.querySelectorAll('#container > div');
    for (let i = 0; i < squares.length; i++){
        squares[i].addEventListener("mouseover", function() {
            squares[i].style.backgroundColor = "red";
        });
    }
}