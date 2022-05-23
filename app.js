import { HealthBar } from "./health-bar.js";

class Game {


    constructor(){

        this.speed = 4

        this.app = new PIXI.Application({
                width: 1600,
                height: 800,
                transparent: false,
                antialias: true
            }
        );

        this.app.renderer.backgroundColor = 0x4DA7CC;
        this.app.renderer.view.style.position = 'absolute';

        //Appending PIXI to the dom
        document.body.appendChild(this.app.view)

        // create player
        this.createPlayer()

        // create enemy
        this.createEnemy()
        
        // create letter
        this.createLetter()

        // create background
        // this.createBackground()

        // create health bar
        this.healthBar = new HealthBar(this.app)

        // start game loop
        this.app.ticker.add(() => this.gameLoop())
    }

    // createBackground() {
    //     //Clouds in background
    //      //1: create a texture of the clouds image
    //     this.background = PIXI.Texture.from('./images/cloud copy.png');

    //     //2: create another type of sprite by instantiating the pixi tile in sprite class
    //     this.cloudsSprite = new PIXI.TilingSprite(
    //     //adding the width and height of the screen
    //     this.background, 
    //     this.app.screen.width,
    //     this.app.screen.height
    //     );

    //     //Tile Scale Set Method
    //     this.cloudsSprite.tileScale.set(0.5, 0.5);

    //     //Animating clouds
    //     this.app.ticker.add(function() {
    //         //Change value of tile X
    //         this.cloudsSprite.tilePosition.x += 1;
    //     });

    //     //add it to the stage
    //     this.app.stage.addChild(this.cloudsSprite);   
    // }


    createPlayer() {

        //PLAYER
        //Creating the player
        this.player = PIXI.Sprite.from('./images/GameSuperheldPixelArt-SUPERMAN.png');
        this.player.width = 230;
        this.player.height = 130;
        this.player.position.set(100, 300);
        // this.player = new PIXI.Graphics();

        // this.player.beginFill(0xF1BF90);
        // this.player.lineStyle(4, 0xFFEA00, 1);
        // this.player.drawRect(200, 400, 100, 100);
        // this.player.endFill();

        this.app.stage.addChild(this.player)

        //Keyboard Events on Player
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowUp')
                this.player.y -= 15;
            if (e.key === 'ArrowDown')
                this.player.y += 15;
        });
    }



    createEnemy() {

        //ENEMIES
        // Random Spawn Function
        //For loop
        for (let i = 0; i < 3; i++) {

        this.enemy = PIXI.Sprite.from('./images/GameSuperheldPixelArt-CLOUD-Enemy.png');

        this.enemy.width = 230;
        this.enemy.height = 130;
        this.enemy.position.set(Math.random() * 1600, Math.random() * 600);

        this.app.stage.addChild(this.enemy);

        
        }
    }

    createLetter() {

        //LETTER
        // Random Spawn Function
        //For loop
        for (let i = 0; i < 1; i++) {

        this.letter = PIXI.Sprite.from('./images/letterA.png');

        this.letter.width = 100;
        this.letter.height = 100;
        this.letter.position.set(Math.random() * 1600, Math.random() * 600);

        this.app.stage.addChild(this.letter);

        }

    }

    gameLoop(delta) {

        if (this.rectsIntersect(this.player, this.enemy)) {
            //add healthbar 
            this.healthBar.updateHealth(-0.5);
            //kill the enemy
            this.speed = 0;
        }
    }

    // detect collisions
    rectsIntersect(a, b) {
        const aBox = a.getBounds();
        const bBox = b.getBounds();

        return aBox.x + aBox.width > bBox.x &&
            aBox.x < bBox.x + bBox.width &&
            aBox.y + aBox.height > bBox.y &&
            aBox.y < bBox.y + bBox.height;
    }

}

new Game()

const app = new PIXI.Application({
    width: 1600,
    height: 800,
    transparent: false,
    antialias: true
}
);

    //Clouds in background
     //1: create a texture of the clouds image
     const cloudsTexture = PIXI.Texture.from('./images/cloud-copy.png');

     //2: create another type of sprite by instantiating the pixi tile in sprite class
     const cloudsSprite = new PIXI.TilingSprite(
     //adding the width and height of the screen
         cloudsTexture, 
         app.screen.width,
         app.screen.height
     );
     
     //Tile Scale Set Method
     cloudsSprite.tileScale.set(0.5, 0.5);
     
     //Animating clouds
     app.ticker.add(function() {
         //Change value of tile X
         cloudsSprite.tilePosition.x +=1;
     });
     
     //add it to the stage
     app.stage.addChild(cloudsSprite);













