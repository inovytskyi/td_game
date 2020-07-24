import Phaser from 'phaser';
import {
    createBackgroundTexture,
    createBulletTexture,
    createEnemyTexture,
    createTowerBaseTexture, createTowerHeadTexture
} from "../components/helper";

export default class LoaderScene extends Phaser.Scene {
    constructor() {
        super('Loader');
    }

    preload() {
    }

    create() {
        const config = {
            step_x: 50,
            step_y: 50,
            nrow: 25,
            ncol: 25,
        }
        createEnemyTexture(this);
        createBackgroundTexture(this, config);
        createBulletTexture(this);
        createTowerBaseTexture(this);
        createTowerHeadTexture(this);
        this.scene.start('Game');
    }
}
