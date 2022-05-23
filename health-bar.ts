export class HealthBar {
    constructor(app) {
        this.bar = new PIXI.Graphics();
        this.health = 100
        app.stage.addChild(this.bar);
        this.updateHealth()
    }
  
    updateHealth(val) {
        if (this.health + val >= 0 && this.health + val <= 100) {
            this.health += val;
        }
        this.bar.clear()
        this.bar.beginFill(0x23DE2C);
        this.bar.lineStyle(4, 0x000000, 1)
        this.bar.drawRect(30, 10, this.health, 40);
        this.bar.endFill();
    }
  }