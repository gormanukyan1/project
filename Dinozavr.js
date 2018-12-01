
class Dinozavr extends LivingCreature {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.energy = 10;
       
        
    }
    getNewDirection() {
        this.directions = [
            [this.x -2, this.y -2],
            [this.x -1, this.y -2],
            [this.x , this.y -2],
            [this.x +1, this.y -2],
            [this.x +2, this.y -2],
            [this.x +2, this.y -1],
            [this.x +2, this.y],
            [this.x +2, this.y+1],
            [this.x +2, this.y+2],
            [this.x +1, this.y+2],
            [this.x , this.y+2],
            [this.x -1, this.y+2],
            [this.x -2, this.y+2],
            [this.x -2, this.y+1],
            [this.x -2, this.y],
            [this.x -2, this.y-1],
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    move() {
        var empty = random(this.chooseCell(0))
        this.energy -= 2
        if (empty) {
            var newx = empty[0]
            var newy = empty[1]
            matrix[newy][newx] = 5
            matrix[this.y][this.x] = 0
            this.x = newx
            this.y = newy
        }
    }
    mult() {
        var empty = random(this.chooseCell(0))
        if (empty && this.energy > 15) {
            var newx = empty[0]
            var newy = empty[1]
            matrix[newy][newx] = 5;
            var newd = new Dinozavr(newx, newy)
            dinoarr.push(newd)
        }
    }
     eat() {
        var food = random(this.chooseCell(1))

     
        if (food) {
            var newx = food[0]
            var newy = food[1]
            matrix[newy][newx] = 5
            matrix[this.y][this.x] = 0

            for (var i in grassarr) {
                if (grassarr[i].x == newx && grassarr[i].y == newy) {
                    grassarr.splice(i, 1)
                }
            }
            this.x = newx
            this.y = newy
            this.energy += 3

        }
     }
    eat2(){
                var food2 = random(this.chooseCell(4))
 if (food2) {
            var newx = food2[0]
            var newy = food2[1]
            matrix[newy][newx] = 5
            matrix[this.y][this.x] = 0

            for (var i in supermardarr) {
                if (supermardarr[i].x == newx && supermardarr[i].y == newy) {
                    supermardarr.splice(i, 1)
                }
            }
            this.x = newx
            this.y = newy
            this.energy += 4
        }
    }
    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in dinoarr) {
                if (dinoarr[i].x == this.x && dinoarr[i].y == this.y) {
                    dinoarr.splice(i, 1)
                }
            }
        }
    }
}
