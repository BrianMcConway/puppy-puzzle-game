var rows = 3; //3x3 puzzle-board grid setup
var columns = 3;
var emptyTile = { row: 0, col: 2 }; //position of the empty tile

//populate puzzle-board grid with images
window.onload = function () {
    var imgOrder = ["assets/images/1.png", "assets/images/2.png", "assets/images/3.png", "assets/images/4.png", "assets/images/5.png", "assets/images/6.png", "assets/images/7.png", "assets/images/8.png", "assets/images/9.png"];

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            tile.src = imgOrder.shift();
            tile.classList.add("puzzle-tile");
            tile.addEventListener("click", function () { moveTile(r, c); });

            document.getElementById("puzzle-board").append(tile);
        }
    }
}
//allow tiles to swap with the grey tile
function moveTile(row, col) {
    if (isAdjacent(row, col, emptyTile.row, emptyTile.col)) {
        swapTiles(row, col, emptyTile.row, emptyTile.col);
        emptyTile = { row: row, col: col };
    }
}

function isAdjacent(row1, col1, row2, col2) {
    return Math.abs(row1 - row2) + Math.abs(col1 - col2) === 1;
}

function swapTiles(row1, col1, row2, col2) {
    var tempSrc = document.getElementById(row1 + "-" + col1).src;
    document.getElementById(row1 + "-" + col1).src = document.getElementById(row2 + "-" + col2).src;
    document.getElementById(row2 + "-" + col2).src = tempSrc;
}