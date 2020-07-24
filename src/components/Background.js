import Phaser from "phaser";

export class Background extends Phaser.GameObjects.Sprite {
    constructor(config) {
        super(config.scene, config.x, config.y);
        this.setTexture('background');
        this.gridlines = this.scene.add.image();

        this.setPosition(config.x, config.y);
        this.setOrigin(0);
        this.setDepth(1);
        this.setInteractive();
        this.scene.add.existing(this);
    }

}