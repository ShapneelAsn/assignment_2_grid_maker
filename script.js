// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    let grid = document.getElementById("grid"); // Get the table element

    if (!grid) {
        console.error("Grid table not found!");
        return;
    }

    let newRow = grid.insertRow(); // Insert a new row

    // Get the number of columns in the first row (or assume 1 column if empty)
    let numCols = grid.rows.length > 1 ? grid.rows[0].cells.length : 1;

    for (let i = 0; i < numCols; i++) {
        let newCell = newRow.insertCell();
        newCell.style.backgroundColor = "white"; // Default color
        newCell.onclick = function() {
            if (colorSelected) {
                this.style.backgroundColor = colorSelected; // Change color on click
            }
        };
    }

    numRows++;
}

// Add a column
function addC() {
    alert("Clicked Add Col"); // Replace this line with your code.
}

// Remove a row
function removeR() {
    alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}