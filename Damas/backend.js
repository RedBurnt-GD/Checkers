let board = document.getElementById("board")
let b = board.getContext("2d")

board.width = Math.floor(window.innerHeight / 9) * 8 + 4
board.height = Math.floor(window.innerHeight / 9) * 8 + 4

tileSpace = Math.floor(window.innerHeight / 9)

let tiles = []

let x;
let y;

let row;
let col;

let tileHighlighted = false

let turn = 1
//Makes the setup more compact
let tilePlacement = []

for (let i = 0; i < 12; i++) {
    tilePlacement.push([Math.floor(i * 2 / 3), ((24-i)%3), 0])
}
tiles.push(tilePlacement)

tilePlacement = []
for (let i = 0; i < 12; i++) {
    tilePlacement.push([Math.round(i * 2 / 3), ((22-i)%3) + 5, 0])
}

tiles.push(tilePlacement)



function draw() { 
    b.lineWidth = 5  
    for (var x = 0; x <= 7; x++) {
        for (var y = 0; y <= 7; y++) { 
            b.strokeRect(tileSpace * x + 2, tileSpace * y + 2, tileSpace, tileSpace)
        }
    }

    for (let i = 0; i < tiles[0].length; i++) {
        b.beginPath();
        b.fillStyle = "#AAAAAA"
        b.arc(tileSpace * tiles[0][i][0] + (tileSpace / 2) + 2.5, tileSpace * tiles[0][i][1]  + (tileSpace / 2) + 2.5, (tileSpace - 15)/2, 0, 2 * Math.PI)
        b.fill()
        b.closePath()
        b.beginPath()
        b.fillStyle = "#FF0000"
        b.arc(tileSpace * tiles[1][i][0] + (tileSpace / 2) + 2.5, tileSpace * tiles[1][i][1]  + (tileSpace / 2) + 2.5, (tileSpace - 15)/2, 0, 2 * Math.PI)
        b.fill()
        b.closePath()
    }
}

draw()

board.addEventListener("mousedown", mouseClicked)

function mouseClicked() {
    var rect = event.target.getBoundingClientRect();
    x = event.clientX - rect.left;
    y = event.clientY - rect.top;

    if (x % tileSpace < 4 || y % tileSpace < 4) {
        console.log("Border")
    }
    else {
        row = Math.floor(x / tileSpace)
        col = Math.floor(y / tileSpace)

        console.log("Row: " + row + ", Col: " + col)

        movementMade(row, col)
    }
}

function movementMade(r, c) {
    if (!tileHighlighted) {
        if (tiles[turn % 2].indexOf([r, c, 0]) != 1) {
            console.log(tiles[turn%2][tiles[turn%2].indexOf([r, c])])
        }
    }
}