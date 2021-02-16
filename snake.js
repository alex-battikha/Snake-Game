class Snake {
    constructor() {
        this.x = 0;
        this.y = 0;

        this.xSpeed = 1;
        this.ySpeed = 0;

        this.dir = function(x, y) {
            this.xSpeed = x;
            this.ySpeed = y;
        }

        this.update = function() {
            this.x = this.x + this.xSpeed*scl;
            this.y = this.y + this.ySpeed*scl;

            this.x = constrain(this.x, 0, width-scl);
            this.y = constrain(this.y, 0, height-scl);
        }

        this.show = function() {
            fill(255);
            rect(this.x, this.y, 20, 20);
        }

        this.eat = function() {
            
        }
    }
}