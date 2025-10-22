class Paddle {
  constructor() {
    this.width = 100;
    this.height = 15;
    this.x = width / 2 - this.width / 2;
    this.y = height - 40;
    this.speed = 7;
  }

  update() {
    if (keyIsDown(LEFT_ARROW)) this.x -= this.speed;
    if (keyIsDown(RIGHT_ARROW)) this.x += this.speed;
    this.x = constrain(this.x, 0, width - this.width);
  }

  display() {
    rect(this.x, this.y, this.width, this.height);
  }
}
