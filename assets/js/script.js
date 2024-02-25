var rows = 3;
var columns = 3;
var emptyTile = { row: 2, col: 2 };
var imgOrder = ["assets/images/2.png", "assets/images/5.png", "assets/images/3.png", "assets/images/7.png", "assets/images/6.png", "assets/images/8.png", "assets/images/9.png", "assets/images/1.png", "assets/images/4.png"];

var movesCount = 0;
var puzzleSolved = false; // Flag to track puzzle state

// Event handler that executes function when HTML is loaded
window.onload = function () {
    // Hide the win modal on page load
    document.getElementById("modal-win").style.display = "none";

    setupPuzzleBoard();
    document.getElementById("new-game").addEventListener("click", confirmStartNewGame);
    document.getElementById("how-to-play").addEventListener("click", openModal);
}

function confirmStartNewGame() {
    var confirmationModal = document.getElementById("modal-sure");
    confirmationModal.style.display = "block";

    document.getElementById("confirm-yes").addEventListener("click", function () {
        confirmationModal.style.display = "none";
        startNewGame();
    });

    document.getElementById("confirm-no").addEventListener("click", function () {
        confirmationModal.style.display = "none";
    });
}

function startNewGame() {
    movesCount = 0;
    updateTurnsCount();
    shuffleImages();
    setupPuzzleBoard();
    puzzleSolved = false; // Reset the puzzleSolved flag
}

function shuffleImages() {
    for (let i = imgOrder.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [imgOrder[i], imgOrder[j]] = [imgOrder[j], imgOrder[i]];
    }
}

function setupPuzzleBoard() {
    document.getElementById("puzzle-board").innerHTML = "";

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            tile.src = imgOrder[r * columns + c];
            tile.classList.add("puzzle-tile");
            tile.addEventListener("click", function () {
                moveTile(r, c);
            });

            document.getElementById("puzzle-board").append(tile);

            if (tile.src.includes("assets/images/3.png")) {
                emptyTile = { row: r, col: c };
            }
        }
    }
}

function moveTile(row, col) {
    if (isAdjacent(row, col, emptyTile.row, emptyTile.col)) {
        swapTiles(row, col, emptyTile.row, emptyTile.col);
        emptyTile = { row: row, col: col };
        movesCount++;
        updateTurnsCount();

        if (isPuzzleSolved()) {
            document.getElementById("turns").innerText = movesCount;
            showWinModal();
        }
    }
}

function updateTurnsCount() {
    document.getElementById("turns").innerText = movesCount;
}

function isAdjacent(row1, col1, row2, col2) {
    return (Math.abs(row1 - row2) === 1 && col1 === col2) || (Math.abs(col1 - col2) === 1 && row1 === row2);
}

function swapTiles(row1, col1, row2, col2) {
    var tempSrc = imgOrder[row1 * columns + col1];
    imgOrder[row1 * columns + col1] = imgOrder[row2 * columns + col2];
    imgOrder[row2 * columns + col2] = tempSrc;

    document.getElementById(row1 + "-" + col1).src = imgOrder[row1 * columns + col1];
    document.getElementById(row2 + "-" + col2).src = imgOrder[row2 * columns + col2];
}

function isPuzzleSolved() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            if (imgOrder[r * columns + c] !== "assets/images/" + (r * columns + c + 1) + ".png") {
                return false;
            }
        }
    }
    puzzleSolved = true; // Set the flag to true when the puzzle is solved
    return true;
}

function openModal() {
    var modal = document.getElementById("modal-rules");
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("modal-rules");
    modal.style.display = "none";
}

function showWinModal() {

    if (puzzleSolved) {
        var winModal = document.getElementById("modal-win");
        var movesCountSpan = document.getElementById("win-movesCount");

        movesCountSpan.innerText = movesCount;

        document.getElementById("modal-win-message").innerText = "Congratulations! You got there in " + movesCount + " moves!";

        winModal.style.display = "block";

        document.getElementById("close-win-button").addEventListener("click", function () {
            winModal.style.display = "none";
        });
    }
}

document.getElementById("close-button").addEventListener("click", closeModal);

document.getElementById("close-win-button").addEventListener("click", function () {
    var winModal = document.getElementById("modal-win");
    winModal.style.display = "none";
});
