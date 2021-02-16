var snake;
var scl = 20;

var food;

function setup() {
  createCanvas(600, 600);

  snake = new Snake();

  frameRate(10);

  food = createVector(random(width), random(height));
}


function draw() {
	background(50);

	snake.show();
	snake.update();

	fill("#E61672")
	rect(food.x, food.y);

	snake.eat(food);
}

function keyPressed() {
	if(keyCode == 38) { //up arrow key
		snake.dir(0, -1);
	}
	else if(keyCode == 40) { //down arrow key
		snake.dir(0, 1);
	}
	else if(keyCode == 37) { //left arrow key
		snake.dir(-1, 0);
	}
	else if(keyCode = 39) { //right arrow key
		snake.dir(1, 0);
	}
}

function pickLocation() {
	var cols = floor(width/scl);
	var rows = floor(height/scl);
	food = createVector(floor(random(rows)), floor(random(cols)));
	food.mult(scl);
}