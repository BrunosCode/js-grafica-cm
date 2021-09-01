// Chiedere all'utente di inserire il numero di celle di cui sarà composto il campo da gioco.
// Tramite una funzione javascript disegnare in pagina la griglia con massimo 10 celle per riga.
// Al click su una cella dovrà essere mostrato con un alert il numero della cella e il suo background diventerà rosso.

// # MINED FIELD

// ## VARIABLE
const field = document.getElementById("field");

// ## FUNCTIONS
// 1. Ask the number of cells to the user
const userChoosenNumber = (min, max) => {
    let userNumber = parseInt(prompt(`Choose a number of rows, between ${min} and ${max}`))
    if ( !isNaN(userNumber) && userNumber >= min && userNumber <= max ) {
        return userNumber;
    } else {
        alert("Invalid number");
        return userChooseANumber(min, max);
    }
}
// 2. Function inject a number of html cells in the document
const createField = (rows, columns) => {
    let cells = rows * columns;
    for (let i = 0; i < cells; i++) {
        field.innerHTML += `<div class="cell"></div>`
    }
}
// 3. Color of red the clicked cell
const digCell = (event) => {
    event.target.classList.add("digged");
}

// ## EVENT LISTENERS
// 4. Add event listener to the field
field.addEventListener("click", digCell);

// ## MAIN SCRIPT
// 5. Start the script and create field
createField(10, userChoosenNumber(1, 20));