// import { HealthBar } from "./health-bar";

import * as PIXI from 'pixi.js'
import enemyImage from "../images/enemy.png"
import playerImage from "../images/player.png"
import { Enemy } from './enemy';
export class Game {
    // settings
    pixiWidth = 800;
    pixiHeight = 450;
    // globals
    pixi: PIXI.Application;
    loader: PIXI.Loader;
    // fish : PIXI.Sprite;
    enemy: Enemy;
    enemies: Enemy[];
    /**
     * Constructor
     * 
     * Initialize Pixi
     * Load assets
     */
    constructor() {
        this.enemies = [];
        this.pixi = new PIXI.Application({ width: this.pixiWidth, height: this.pixiHeight });
        this.pixi.stage.interactive = true;
        this.pixi.stage.hitArea = this.pixi.renderer.screen;
        document.body.appendChild(this.pixi.view);
        this.loader = new PIXI.Loader();
        this.loader.add('enemyTexture', enemyImage)
            .add('playerTexture', playerImage)
        this.loader.load(() => this.loadCompleted());
    }
    /**
     * Load Completed
     * 
     * Runs after assets loaded
     * Creates background
     * Creates bubbles
     * Creates fishes
     */
    loadCompleted() {
        let player = new PIXI.Sprite(this.loader.resources["playerTexture"].texture!);
        player.height = this.pixiHeight;
        player.width = this.pixiWidth;
        this.pixi.stage.addChild(player);

        this.enemy = new Enemy(this.loader.resources["enemyTexture"].texture!)
        // this.fish.anchor.set(0.5)
        this.pixi.stage.addChild(this.enemy)
        for (let i = 0; i < 5; i++) {
            let temp = new Enemy(this.loader.resources["enemyTexture"].texture!);
            this.pixi.stage.addChild(temp);
            this.enemies.push(temp);
        }

        this.pixi.ticker.add((delta) => this.update(delta));
    }
    /**
     * Update
     * @param delta 
     * 
     * Updates fishes & bubbles
     */
    update(delta: number) {
        this.enemy.update(delta);
        for (let f = 0; f < this.enemies.length; f++) {
            this.enemies[f].update(delta);
        }
    }
}
new Game();
