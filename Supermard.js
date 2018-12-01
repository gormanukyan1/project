
class Supermard extends LivingCreature  {
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
            matrix[newy][newx] = 4
            matrix[this.y][this.x] = 0
            this.x = newx
            this.y = newy
        }
    }
    mult() {
        var empty = random(this.chooseCell(0))
        if (empty && this.energy > 12) {
            var newx = empty[0]
            var newy = empty[1]
            matrix[newy][newx] = 4;
            var newm = new Supermard(newx, newy)
            supermardarr.push(newm)
        }
    }
    eat1() {
        var food = random(this.chooseCell(1))
        if (food) {
            var newx = food[0]
            var newy = food[1]
            matrix[newy][newx] = 4
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
  var food= random(this.chooseCell(2))
  if (food) {
            var newx = food[0]
            var newy = food[1]
            matrix[newy][newx] = 4
            matrix[this.y][this.x] = 0

            for (var i in xotakerarr) {
                if (xotakerarr[i].x == newx && xotakerarr[i].y == newy) {
                    xotakerarr.splice(i, 1)
                }
            }
            this.x = newx
            this.y = newy
            this.energy += 4
        }
}
eat3(){
     var food = random(this.chooseCell(1))

 if (food) {
            var newx = food[0]
            var newy = food[1]
            matrix[newy][newx] = 4
            matrix[this.y][this.x] = 0

            for (var i in predatorarr) {
                if (predatorarr[i].x == newx && predatorarr[i].y == newy) {
                    predatorarr.splice(i, 1)
                }
            }
            this.x = newx
            this.y = newy
            this.energy += 5
        }
    }
    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in supermardarr) {
                if (supermardarr[i].x == this.x && supermardarr[i].y == this.y) {
                    supermardarr.splice(i, 1)
                }
            }
        }
    }
}