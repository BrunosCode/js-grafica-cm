// Chiedere all'utente di inserire il numero di celle di cui sarà composto il campo da gioco.
// Tramite una funzione javascript disegnare in pagina la griglia con massimo 10 celle per riga.
// Al click su una cella dovrà essere mostrato con un alert il numero della cella e il suo background diventerà rosso.

// # MINED FIELD

// ## VARIABLE
const field = document.getElementById("field");
const startBtn = document.getElementById("startBtn");
const results = document.getElementById("results");

// ## FUNCTIONS
// 1. Ask the number of cells to the user
// const userChoosenNumber = (max) => {
//     let userNumber = parseInt(prompt(`Choose a number of rows,  ${max} is the maximum`));
//     if ( !isNaN(userNumber) && userNumber >= 0 && userNumber <= max ) {
//         console.log(`userNumber ${userNumber}`);
//         return userNumber;
//     } else {
//         alert("Invalid number");
//         return userChooseANumber(max);
//     }
// }
const userChoosenNumber = (max) => {
    let userNumber = document.getElementById("rows").value;
    if ( !isNaN(userNumber) && userNumber > 0 && userNumber <= max ) {
        console.log(`userNumber ${userNumber}`)
        return userNumber;
    } else {
        results.innerHTML = "Invalid Input";
    }
}

// 2. Generate mines index
// input: min, max, number of mines
const generateMines = (max, minesNumber) => {
    let mines = [];
    // to avoid mines index repetition
    // 2a. create an array containing each cell's index
    let minesStock = [];
    for (let i = 0; i < max; i++) {
        minesStock.push(i);
    }
    // 2b. pick a random number from minesStock, remove it and add it to the mines array
    for (let i = 0; i < minesNumber; i++) {
        let randomNumber = Math.floor(Math.random() * minesStock.length);
        mines.push(minesStock[randomNumber]);
        minesStock.splice(randomNumber, 1);
    }
    console.log(`minesIndex ${mines}`);
    return mines;
}

// 3. Function inject a number of html cells in the document, some of which are mined
// const createField = (rows, columns) => {
//     let cells = rows * columns;
//     for (let i = 0; i < cells; i++) {
//         field.innerHTML += `<div class="cell mined"></div>`
//     }
// }
const createMinedField = (rows, columns, mines) => {
    field.innerHTML = "";
    results.innerHTML = "";
    let cells = rows * columns;
    console.log(`cells ${cells}`);
    for (let i = 0; i < cells; i++) {
        if (mines.includes(i)) {
            field.innerHTML += `<div class="cell mined"></div>`;
        } else {
            field.innerHTML += `<div class="cell"></div>`;
        }
    }
}

// 4. Color of red the clicked cell
const digCell = (event) => {
    let diggedCell = event.target;
    console.log(diggedCell);
    diggedCell.classList.add("digged");
    if (diggedCell.classList.contains("mined")) {
        results.innerHTML = "You lost";
        field.innerHTML = "";
    }
}

// ## EVENT LISTENERS
// 5. Add event listener to the field
field.addEventListener("click", digCell);

// ## MAIN SCRIPT
// 6. Start the script and create field
startBtn.addEventListener("click", () => {
    let rows = 10;
    let cols = userChoosenNumber(10);
    let minesNumber = 3 * cols;
    createMinedField(rows, cols, generateMines(rows * cols, minesNumber));
})