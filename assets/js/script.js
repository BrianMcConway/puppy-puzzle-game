var rows = 3; //3x3 puzzle-board grid setup
var columns = 3;

var picTile; //picture tiles
var blankTile; //blank tile

var turns = 0;
//add images to puzzle-board
window.onload = function () {
    var imgOrder = ["assets/images/1.png", "assets/images/2.png", "assets/images/3.png", "assets/images/4.png", "assets/images/5.png", "assets/images/6.png", "assets/images/7.png", "assets/images/8.png", "assets/images/9.png"];

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            tile.src = imgOrder.shift();


            document.getElementById("puzzle-board").append(tile);

        }
    }
}

