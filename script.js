function getRnd(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function fillMatrix(x, y) {
    var matrix = []

    for (var i = 0; i < y; i++) {
        matrix.push([])

        for (var j = 0; j <= x; j++) {
            var r = getRnd(0, 6)
            matrix[i].push(r)
        }
    }
    return matrix
}
matrix = fillMatrix(20, 20)

var side = 30;
var grassarr = [];
var xotakerarr = [];
var predatorarr = [];
var supermardarr = [];
var dinoarr = [];
var aylarr = [];
for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] == 1) {
            grassarr.push(new Grass(x, y, 1))
        }
        else if (matrix[y][x] == 2) {
            var xt = new Xotaker(x, y)
            xotakerarr.push(xt)
        }
        else if (matrix[y][x] == 3) {
            predatorarr.push(new Predator(x, y))
        }
        else if (matrix[y][x] == 4) {
            supermardarr.push(new Supermard(x, y))
        }
        else if (matrix[y][x] == 5) {
            dinoarr.push(new Dinozavr(x, y))
        }
    }
}


function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
}
function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 0) {
                fill("#acacac")
            }
            else if (matrix[y][x] == 1) {
                fill("green")
            }
            else if (matrix[y][x] == 2) {
                fill('yellow')
            }
            else if (matrix[y][x] == 3) {
                fill('red')
            }
            else if (matrix[y][x] == 4) {
                fill('NavajoWhite')
            }
            else if (matrix[y][x] == 5) {
                fill('black')
            }
            rect(x * side, y * side, side, side);
        }
    }
    for (var i in grassarr) {
        grassarr[i].mult()
    }

    for (var i in xotakerarr) {
        xotakerarr[i].move()
        xotakerarr[i].eat()
        xotakerarr[i].mult()
        xotakerarr[i].die()
    }


    for (var i in predatorarr) {
        predatorarr[i].move()
        predatorarr[i].eat()
        predatorarr[i].mult()
        predatorarr[i].die()
    }

    for (var i in supermardarr) {
        supermardarr[i].eat1()
         supermardarr[i].eat2() 
         supermardarr[i].eat3()
        supermardarr[i].move()
        supermardarr[i].mult()
        supermardarr[i].die()
    }
    for (var i in dinoarr) {
        dinoarr[i].eat()
         dinoarr[i].eat2()
        dinoarr[i].move()
        dinoarr[i].mult()
        dinoarr[i].die()
    }
}