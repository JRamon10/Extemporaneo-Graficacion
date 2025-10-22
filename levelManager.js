class LevelManager {
  constructor() {
    this.score = 0;
    this.lives = 3;
    this.currentLevel = 1;
    this.blocks = [];
    this.initLevel(this.currentLevel);
  }

  initLevel(level) {
    this.blocks = [];

    if (level === 1) {
      for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 8; col++) {
          this.blocks.push(new Block(col * 60 + 20, row * 30 + 40, 50, 20));
        }
      }
    }

    if (level === 2) {
      for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 8; col++) {
          if (row === 2 && col === 4) {
            this.blocks.push(new Block(col * 60 + 20, row * 30 + 40, 50, 20, 3));
          } else {
            this.blocks.push(new Block(col * 60 + 20, row * 30 + 40, 50, 20));
          }
        }
      }
    }

    if (level === 3) {
      for (let row = 0; row < 6; row++) {
        for (let col = 0; col < 8; col++) {
          if ((row === 2 && col === 3) || (row === 3 && col === 5)) {
            this.blocks.push(new Block(col * 60 + 20, row * 30 + 40, 50, 20, 3));
          } else if (row === 1 && col === 2) {
            this.blocks.push(new Block(col * 60 + 20, row * 30 + 40, 50, 20, -1));
          } else {
            this.blocks.push(new Block(col * 60 + 20, row * 30 + 40, 50, 20));
          }
        }
      }
    }
  }

  update(ball) {
    for (let block of this.blocks) {
      if (block.checkCollision(ball)) {
        if (block.hitsRemaining !== -1) {
          this.score++;
        }
      }
    }
    this.blocks = this.blocks.filter(b => !b.destroyed);

    if (this.blocks.length === 0) {
      this.currentLevel++;
      if (this.currentLevel <= 3) {
        ball.reset(this.currentLevel);
        this.initLevel(this.currentLevel);
      } else {
        noLoop();
        textSize(32);
        fill(255);
        text('¡Ganaste!', width / 2 - 80, height / 2);
      }
    }
  }

  display() {
    for (let block of this.blocks) {
      block.display();
    }
  }
}
