class Ball {
  constructor(level = 1) {
    this.level = level;
    this.reset();
  }
  reset(levelOverride = null) {
    this.level = levelOverride ?? this.level;
    this.x = width / 2;
    this.y = height / 2;
    this.radius = 10;

    let levelSpeed = 5 + (this.level - 1) * 1.5;
    this.speed = levelSpeed;
    this.vx = random([-1, 1]) * this.speed;
    this.vy = -this.speed;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > width) this.vx *= -1;
    if (this.y < 0) this.vy *= -1;
  }

  display() {
    circle(this.x, this.y, this.radius * 2);
  }

  checkCollision(paddle) {
    if (
      this.x > paddle.x &&
      this.x < paddle.x + paddle.width &&
      this.y + this.radius > paddle.y &&
      this.y - this.radius < paddle.y + paddle.height
    ) {
      this.vy *= -1;
      this.y = paddle.y - this.radius;
    }
  }

  isOffScreen() {
    return this.y > height;
  }
}
