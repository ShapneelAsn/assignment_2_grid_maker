//Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

//Add a row
function addR() {
    let grid = document.getElementById("grid"); //Get the table element

    if (!grid) {
        console.error("Grid table not found!");
        return;
    }

    let newRow = grid.insertRow(); //Insert a new row

    //Get the number of columns in the first row (or assume 1 column if empty)
    let numCols = grid.rows.length > 1 ? grid.rows[0].cells.length : 1;

    for (let i = 0; i < numCols; i++) {
        let newCell = newRow.insertCell();
        newCell.style.backgroundColor = "white"; //Default color
        newCell.onclick = function() {
            if (colorSelected) {
                this.style.backgroundColor = colorSelected; //Change color on click
            }
        };
    }

    numRows++;
}

//Add a column
function addC() {
    let grid = document.getElementById("grid");

    if (!grid) {
        console.error("Grid table not found!");
        return;
    }

    let numRows = grid.rows.length;

    if (numRows === 0) {
        //If no rows exist, create a new row with one cell
        let newRow = grid.insertRow();
        let newCell = newRow.insertCell();
        newCell.style.backgroundColor = "white"; //Default color
        newCell.onclick = function() {
            if (colorSelected) {
                this.style.backgroundColor = colorSelected;
            }
        };
    } else {
        //Add a new cell to each existing row
        for (let i = 0; i < numRows; i++) {
            let newCell = grid.rows[i].insertCell();
            newCell.style.backgroundColor = "white"; //Default color
            newCell.onclick = function() {
                if (colorSelected) {
                    this.style.backgroundColor = colorSelected;
                }
            };
        }
    }
}

//Remove a row
function removeR() {
    let grid = document.getElementById("grid"); //Get the table element

    if (!grid || grid.rows.length === 0) {
        console.warn("No rows to remove.");
        return;
    }

    grid.deleteRow(grid.rows.length - 1); //Remove the last row
}

//Remove a column
function removeC() {
    let grid = document.getElementById("grid"); //Get the table element

    if (!grid || grid.rows.length === 0) {
        console.warn("No columns to remove.");
        return;
    }

    let numCols = grid.rows[0].cells.length; //Get the number of columns in the first row

    if (numCols === 0) {
        console.warn("No columns exist in the grid.");
        return;
    }

    //Remove the last cell from each row
    for (let i = 0; i < grid.rows.length; i++) {
        grid.rows[i].deleteCell(numCols - 1);
    }
}

//Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

//Fill all uncolored cells
function fillU(){
    let grid = document.getElementById("grid");

    if (!grid) {
        console.error("Grid table not found!");
        return;
    }

    for (let i = 0; i < grid.rows.length; i++) {
        for (let j = 0; j < grid.rows[i].cells.length; j++) {
            let cell = grid.rows[i].cells[j];
            if (cell.style.backgroundColor === "" || cell.style.backgroundColor === "white") {
                cell.style.backgroundColor = colorSelected; 
            }
        }
    }
}

//Fill all cells
function fillAll(){
    let grid = document.getElementById("grid");

    if (!grid) {
        console.error("Grid table not found!");
        return;
    }

    for (let i = 0; i < grid.rows.length; i++) {
        for (let j = 0; j < grid.rows[i].cells.length; j++) {
            grid.rows[i].cells[j].style.backgroundColor = colorSelected; //Fill all cells
        }
    }
}

//Clear all cells
function clearAll(){
    let grid = document.getElementById("grid");

    if (!grid) {
        console.error("Grid table not found!");
        return;
    }

    for (let i = 0; i < grid.rows.length; i++) {
        for (let j = 0; j < grid.rows[i].cells.length; j++) {
            grid.rows[i].cells[j].style.backgroundColor = "white"; //Reset to default color
        }
    }
}