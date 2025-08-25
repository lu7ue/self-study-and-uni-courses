import CanvasRenderer from './CanvasRenderer.js';
import ScoreItem from './ScoreItem.js';

export default class Fruit extends ScoreItem {
  private accelerator: number = 0.001;

  public constructor(maxX: number) {
    super();

    if (Math.random() <= 0.1) {
      this.image = CanvasRenderer.loadNewImage('assets/fruit-cherries.png');
      this.score = 10;
    } else if (Math.random() <= 0.3) {
      this.image = CanvasRenderer.loadNewImage('assets/fruit-strawberry.png');
      this.score = 7;
    } else if (Math.random() <= 0.6) {
      this.image = CanvasRenderer.loadNewImage('assets/fruit-orange.png');
      this.score = 5;
    } else if (Math.random() <= 0.8) {
      this.image = CanvasRenderer.loadNewImage('assets/fruit-grapes.png');
      this.score = 3;
    } else if (Math.random() < 1) {
      this.image = CanvasRenderer.loadNewImage('assets/fruit-banana.png');
      this.score = 1;
    }

    this.posX = maxX * Math.random();
    this.posY = 10;
  }

  public override update(elapsed: number): void {
    this.speed += this.accelerator;
    this.posY += this.speed * elapsed;
  }
}
