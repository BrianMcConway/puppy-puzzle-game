var rows = 3;
var columns = 3;
var emptyTile = { row: 2, col: 2 }; // Position of the empty tile
var imgOrder = ["assets/images/2.png", "assets/images/5.png", "assets/images/3.png", "assets/images/7.png", "assets/images/6.png", "assets/images/8.png", "assets/images/9.png", "assets/images/1.png", "assets/images/4.png"];

// Event handler that executes function when HTML is loaded
window.onload = function () {
    setupPuzzleBoard(); // Initial puzzle setup
    document.getElementById("new-game").addEventListener("click", startNewGame);
}

// Function to start a new game
function startNewGame() {
    // Display a confirmation dialog for start a new game pop-up (Add a pop-up window)
    var confirmNewGame = confirm("Are you sure you want to start a new game?");

    if (confirmNewGame) {
        shuffleImages(); // Shuffle the images randomly
        setupPuzzleBoard(); // Reset puzzle board
    }
}

// Function to shuffle the images randomly
function shuffleImages() {
    for (let i = imgOrder.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [imgOrder[i], imgOrder[j]] = [imgOrder[j], imgOrder[i]];
    }
}

// Function to initialize the puzzle board
function setupPuzzleBoard() {
    // Clear the existing content of the puzzle-board
    document.getElementById("puzzle-board").innerHTML = "";

    // Initializes the process of creating the puzzle-board
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            tile.src = imgOrder[r * columns + c];
            tile.classList.add("puzzle-tile");
            tile.addEventListener("click", function () {
                moveTile(r, c);
            });

            // The loaded image is appended to the puzzle-board and builds in the required order
            document.getElementById("puzzle-board").append(tile);

            // Sets the emptyTile to the position of the image with "assets/images/3.png"
            if (tile.src.includes("assets/images/3.png")) {
                emptyTile = { row: r, col: c };
            }
        }
    }
}

// Swapping selected tile with emptyTile
function moveTile(row, col) {
    if (isAdjacent(row, col, emptyTile.row, emptyTile.col)) {
        swapTiles(row, col, emptyTile.row, emptyTile.col);
        emptyTile = { row: row, col: col };

        // Check if the puzzle is in the correct order and display Congratulations message (Add a pop-up window)
        if (isPuzzleSolved()) {
            alert("Congratulations! You got there in the end!");
        }
    }
}
// Check if first position and second position are adjacent on the grid
function isAdjacent(row1, col1, row2, col2) {
    return (Math.abs(row1 - row2) === 1 && col1 === col2) || (Math.abs(col1 - col2) === 1 && row1 === row2);
}
// Swap tile positions on the puzzle-board
function swapTiles(row1, col1, row2, col2) {
    var tempSrc = imgOrder[row1 * columns + col1];
    imgOrder[row1 * columns + col1] = imgOrder[row2 * columns + col2];
    imgOrder[row2 * columns + col2] = tempSrc;
    // Update board after tiles have been swapped
    document.getElementById(row1 + "-" + col1).src = imgOrder[row1 * columns + col1];
    document.getElementById(row2 + "-" + col2).src = imgOrder[row2 * columns + col2];
}
// Determine if puzzle is solved and activate the alert message if true
function isPuzzleSolved() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            if (imgOrder[r * columns + c] !== "assets/images/" + (r * columns + c + 1) + ".png") {
                return false;
            }
        }
    }
    return true;
}       