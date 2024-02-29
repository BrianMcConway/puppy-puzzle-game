/* Variable for x3 rows */
let rows = 3;
/* Variable for x3 columns */
let columns = 3;
/* Variable for starting position of an empty tile */
let emptyTile = { row: 2, col: 2 };
/* Image order array for initial arrangement on puzzle board*/
let imgOrder = ["assets/images/2.png", "assets/images/5.png", "assets/images/3.png", "assets/images/7.png",
    "assets/images/6.png", "assets/images/8.png", "assets/images/9.png", "assets/images/1.png", "assets/images/4.png"];
/* Variable for moves counter*/
let movesCount = 0;
/*  Flag to track if puzzle is solved or not */
let puzzleSolved = false;
/* Audio player variable */
let audio = document.getElementById("audio-player");
/* Audio on/off icon variable */
let audioIcon = document.getElementById("audio-icon");

/*  Event handler that executes function when HTML is loaded */
window.onload = function () {
    /* Hide the win modal on page load */
    document.getElementById("modal-win").style.display = "none";
    /* Initialize the puzzle board */
    setupPuzzleBoard();
    document.getElementById("new-game").addEventListener("click", confirmStartNewGame);
    document.getElementById("how-to-play").addEventListener("click", openModal);
};
/* Confirm 'New Game' modal */
function confirmStartNewGame() {
    let confirmationModal = document.getElementById("modal-sure");
    confirmationModal.style.display = "block";
    /* Selects confirm modal, hides modal until new game selected */
    document.getElementById("confirm-yes").addEventListener("click", function () {
        confirmationModal.style.display = "none";
        startNewGame();
    });
    /* Return to game if 'No' is selected */
    document.getElementById("confirm-no").addEventListener("click", function () {
        confirmationModal.style.display = "none";
    });
}
/* Start new game, reset turns counter, shuffle puzzle pieces, populate the puzzle board */
function startNewGame() {
    movesCount = 0;
    updateTurnsCount();
    shuffleImages();
    setupPuzzleBoard();
    /* Reset the puzzleSolved flag to start with unsolved puzzle */
    puzzleSolved = false; 
}
/* Shuffle order of images */
function shuffleImages() {
    for (let i = imgOrder.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [imgOrder[i], imgOrder[j]] = [imgOrder[j], imgOrder[i]];
    }
}
/* Event handler for click event on puzzle tile */
function createClickHandler(row, col) {
    return function () {
        moveTile(row, col);
    };
}
/* Creating and populating puzzle board */
function setupPuzzleBoard() {
    document.getElementById("puzzle-board").innerHTML = "";
    /* Nested 'for' loops iterate over each row (r) and column (c) to create puzzle tiles */
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            /* Creates new img element for each puzzle piece */
            let tile = document.createElement("img");
            /* Set tile id to a string representing position on board */
            tile.id = r.toString() + "-" + c.toString();
            /* Assign source image to tile based on shuffled order */
            tile.src = imgOrder[r * columns + c];
            /* Event listner on each tile to handle click events */
            tile.addEventListener("click", createClickHandler(r, c));
            /* Appends the to the puzzle-board */
            document.getElementById("puzzle-board").append(tile);
            /* Identifies the blank tile as grey tile */
            if (tile.src.includes("assets/images/3.png")) {
                emptyTile = { row: r, col: c };
            }
        }
    }
}
/* Function for moving tiles */
function moveTile(row, col) {
    /* Check if clicked tile is adjacent to the blank tile */
    if (isAdjacent(row, col, emptyTile.row, emptyTile.col)) {
        /* Swap tile if adjacent to blank tile */
        swapTiles(row, col, emptyTile.row, emptyTile.col);
        /* Update blank tile variable to reflect new position */
        emptyTile = { row: row, col: col };
        /* Update turns counter */
        movesCount++;
        updateTurnsCount();
        /* Check if puzzle is solved after every move, update turns and show modal if solved */
        if (isPuzzleSolved()) {
            document.getElementById("turns").innerText = movesCount;
            showWinModal();
        }
    }
}
/* Update turns counter to reflect current number of moves made */
function updateTurnsCount() {
    document.getElementById("turns").innerText = movesCount;
}
/* Check distance between rows and cols to confirm they are adjacent using logical operator || */
function isAdjacent(row1, col1, row2, col2) {  
    return (Math.abs(row1 - row2) === 1 && col1 === col2) ||
        (Math.abs(col1 - col2) === 1 && row1 === row2);
}
/* Swap position of the two tiles on the grid */
function swapTiles(row1, col1, row2, col2) {
    /* Temporarily store source img */  
    let tempSrc = imgOrder[row1 * columns + col1];
    /* Assign source img row 1 to row 2 */
    imgOrder[row1 * columns + col1] = imgOrder[row2 * columns + col2];
    /* Assign temporarily stored source img  */
    imgOrder[row2 * columns + col2] = tempSrc;
    /* Updates row 1, col 1 with new source image */
    document.getElementById(row1 + "-" + col1).src = imgOrder[row1 * columns + col1];
    /* Updates row 2, col 2 with new source img */
    document.getElementById(row2 + "-" + col2).src = imgOrder[row2 * columns + col2];
}
/* Check if puzzle is solved */
function isPuzzleSolved() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            /* Compare tiles for expected image path. If false, puzzle is not solved */
            if (imgOrder[r * columns + c] !== "assets/images/" +
                (r * columns + c + 1) + ".png") {
                return false;
            }
        }
    }
    puzzleSolved = true; /**  Set the flag to true when the puzzle is solved */
    return true;
}
/* Function to open rules modal */
function openModal() {
    let modal = document.getElementById("modal-rules");
    modal.style.display = "block";
}
/* Function to close modal */
function closeModal() {
    let modal = document.getElementById("modal-rules");
    modal.style.display = "none";
}
/* Display win modal when puzzle is solved with amount of turns taken */
function showWinModal() {

    if (puzzleSolved) {
        let winModal = document.getElementById("modal-win");
        let movesCountSpan = document.getElementById("win-movesCount");

        movesCountSpan.innerText = movesCount;

        document.getElementById("modal-win-message").innerText = "Congratulations! You got there in " + movesCount + " moves!";

        winModal.style.display = "block";

        document.getElementById("close-win-button").addEventListener("click", function () {
            winModal.style.display = "none";
        });
    }
}
/* Invoke function when close-button is clicked */
document.getElementById("close-button").addEventListener("click", closeModal);

document.getElementById("close-win-button").addEventListener("click", function () {
    let winModal = document.getElementById("modal-win");
    winModal.style.display = "none";
});
/* Click event on audio on/off icon */
audioIcon.addEventListener("click", function () {
    toggleAudio();
});
/* Check if audio is paused, play audio if paused and show vol-on img. If audio is off show vol-off img */
function toggleAudio() {
    if (audio.paused) {
        audio.play();
        audioIcon.src = "assets/images/vol-on.png";
    } else {
        audio.pause();
        audioIcon.src = "assets/images/vol-off.png";
    }
}