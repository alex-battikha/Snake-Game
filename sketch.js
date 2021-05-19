var snake, snakeScoreDisplay;
var scl = 20;

var food;

var ubuntuBold;

function setup() {
  createCanvas(600, 600);

  snake = new Snake();

  ubuntuBold = loadFont("fonts/Ubuntu-Bold.ttf");

  frameRate(10);

  pickLocation();
}

function draw() {
	background(50);

	snake.death();
	snake.show();
	snake.update();

	fill("#E61672")
	rect(food.x, food.y, scl, scl);

	snakeScoreDisplay = snake.total+1;

	textFont(ubuntuBold);
	textSize(26);
	fill(255);
	text("Snake Length: " + snakeScoreDisplay, 15, 30);

	if(snake.eat(food)) {
		pickLocation();
	};
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