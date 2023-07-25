// get variables
const adjustGridButton = document.querySelector('.adjust-grid-button');
const mainContainer = document.querySelector('.container-main');
let boxes = document.getElementsByClassName("boxes");
let boxCount = document.getElementsByClassName("boxes");

// event listeners
window.addEventListener("DOMContentLoaded", makeGrid(16));
adjustGridButton.addEventListener('click', promptUser);

function removeGrids() {
    for (let i = boxes.length-1; i >= 0; i--) {
        boxes[i].remove();
    }
}

function makeGrid(num) {

    for (let rows = 0; rows < num; rows++) {
        for (let columns = 0; columns< num; columns++) {
            mainContainer.style.setProperty('grid-template-columns', `repeat(${num}, 1fr)`);
            let grid = document.createElement("div");
            grid.classList.add('boxes');
            mainContainer.appendChild(grid);
            sessionStorage.setItem("latestBoxNum", `${num}`);
        }
    }
    
}

function promptUser() {
    let newGridNum = prompt("Enter new grid dimensions (max 100):");
    
    if (newGridNum > 100 || newGridNum < 1){
        promptUser();
    }
    else if (newGridNum === null ) {
        removeGrids();
        let data = sessionStorage.getItem("latestBoxNum");
        makeGrid(data);
    }
    else if ( (isNaN(newGridNum)) || newGridNum == undefined || newGridNum == "" || newGridNum == 0) {
        removeGrids();
        let data = sessionStorage.getItem("latestBoxNum");
        makeGrid(data);
        }
    else {
        removeGrids();
        sessionStorage.removeItem("latestBoxNum");
        makeGrid(newGridNum);
    }
}