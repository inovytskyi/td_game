import Phaser from 'phaser';
import background from '../assets/images/background.png';
import enemy from '../assets/images/red_sq.png';
import tower_head from '../assets/images/tower_head.png';
import tower_base from '../assets/images/tower_base.png';

export default class LoaderScene extends Phaser.Scene {
	constructor() {
		super('Loader');
	}
	preload() {
		this.load.image('background', background);
		this.load.image('enemy', enemy);
		this.load.image('tower_base', tower_base);
		this.load.image('tower_head', tower_head);
	}
	create() {
		this.graphics = this.add.graphics();
		this.graphics.lineStyle(2, 0xffff00, 1);
		this.graphics.strokeCircle(5, 5, 5);
		this.graphics.generateTexture('bullet', 10, 10);
		this.graphics.destroy();
		this.scene.start('Game');
	}
}
