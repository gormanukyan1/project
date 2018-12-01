class Predator extends LivingCreature{

    getNewDirections() {
        this.directions = [
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
            matrix[newy][newx] = 3
            matrix[this.y][this.x] = 0
            this.x = newx
            this.y = newy
        }
    }
    mult() {
        var empty = random(this.chooseCell(0))
        if (empty && this.energy > 7) {
            var newx = empty[0]
            var newy = empty[1]
            matrix[newy][newx] = 3;
            var newpd = new Predator(newx, newy, 3)
            predatorarr.push(newpd)
        }
    }
    eat() {
        var food = random(this.chooseCell(2))
        if (food) {
            var newx = food[0]
            var newy = food[1]
            matrix[newy][newx] = 3
            matrix[this.y][this.x] = 0

            for (var i in xotakerarr) {
                if (xotakerarr[i].x == newx && xotakerarr[i].y == newy) {
                    xotakerarr.splice(i, 1)
                }
            }
            this.x = newx
            this.y = newy
            this.energy += 2
        }
    }
    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in predatorarr) {
                if (predatorarr[i].x == this.x && predatorarr[i].y == this.y) {
                    predatorarr.splice(i, 1)
                }
            }
        }
    }

}