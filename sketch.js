let paddle, ball, level;

function setup() {
  createCanvas(500, 500);
  console.log("Setup iniciado");
  paddle = new Paddle();
  ball = new Ball(1);
  level = new LevelManager();
}

function draw() {
  background(30);

  paddle.update();
  paddle.display();

  ball.update();
  ball.display();
  ball.checkCollision(paddle);

  level.update(ball);
  level.display();

  if (ball.isOffScreen()) {
    level.lives--;
    if (level.lives > 0) {
      ball.reset(level.currentLevel);
    } else {
      noLoop();
      textSize(32);
      fill(255);
      textAlign(CENTER, CENTER);
      text('Game Over', width / 2, height / 2);
    }
  }


fill(255);
textSize(16);
textAlign(LEFT, TOP);
text(`Puntos: ${level.score}`, 10, 10);

textAlign(CENTER, TOP);
text(`Nivel ${level.currentLevel}`, width / 2, 10);

textAlign(RIGHT, TOP);
text(`Vidas: ${level.lives}`, width - 10, 10);

}
