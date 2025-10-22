class Block {
  constructor(x, y, w, h, hits = 1) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.hitsRemaining = hits;
    this.destroyed = false;
  }

  display() {
    if (!this.destroyed) {
      if (this.hitsRemaining === -1) fill(100);
      else if (this.hitsRemaining === 3) fill(255, 0, 0);
      else if (this.hitsRemaining === 2) fill(255, 100, 100);
      else fill(200, 200, 0);
      rect(this.x, this.y, this.w, this.h);
    }
  }

  checkCollision(ball) {
  if (this.destroyed) return false;

  let closestX = constrain(ball.x, this.x, this.x + this.w);
  let closestY = constrain(ball.y, this.y, this.y + this.h);

  let dx = ball.x - closestX;
  let dy = ball.y - closestY;
  let distance = sqrt(dx * dx + dy * dy);

  if (distance < ball.radius) {
    
    let overlapX = Math.abs(dx);
    let overlapY = Math.abs(dy);

    if (overlapX > overlapY) {
      ball.vx *= -1;
    } else {
      ball.vy *= -1;
    }

    
    if (this.hitsRemaining > 1) {
      this.hitsRemaining--;
    } else if (this.hitsRemaining !== -1) {
      this.destroyed = true;
    }

    return true;
  }

  return false;
}
}
