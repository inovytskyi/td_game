import Phaser from 'phaser';
import GridLines from '../components/GridLines';
import CameraController from '../components/CameraController';
import Enemy from '../components/Enemy';
import { createPath, createTweenConfig } from '../components/helper';
import { Tower } from '../components/Tower';

export default class GameScene extends Phaser.Scene {
	constructor() {
		super('Game');
	}
	preload() {}

	create() {
		this.background = this.add.image(0, 0, 'background');
		this.background.setOrigin(0, 0);
		this.background.setAlpha(0.6);
		this.background.setInteractive();

		// this.redSquare = this.add.image(0, 0, 'enemy');
		// this.redSquare.setOrigin(0, 0);
		// this.redSquare.setDepth(5);

		this.enemy = new Enemy({
			scene: this,
			x: 100,
			y: 100,
			path: createPath(),
			tween: createTweenConfig(),
		});

		this.tower = new Tower({
			scene: this,
			x: 500,
			y: 250,
		});
		window.background = this.background;
		this.grid_line = new GridLines({
			scene: this,
			x: 0,
			y: 0,

			step_x: 50,
			step_y: 50,
			nrow: 25,
			ncol: 25,
		});
		this.camera_controller = new CameraController({
			min_x: 0,
			min_y: 0,
			max_x: 0 + 50 * 24,
			max_y: 0 + 50 * 24,
			step_x: 10,
			step_y: 10,
			border: 50,
			scene: this,
		});
		window.camera = this.cameras.main;
		window.scene = this;
		this.input.on('gameobjectup', (pointer, gameObject, event) =>
			this.mouseUpHandler(pointer, gameObject, event)
		);
		this.input.on('gameobjectmove', (pointer, gameObject, event) =>
			this.mouseMoveHandler(pointer, gameObject, event)
		);
	}
	update() {
		this.camera_controller.updateCamera();
	}

	mouseUpHandler(pointer, gameObject, event) {
		// let x = pointer.worldX;
		// let y = pointer.worldY;
		// this.tower.enemy.x = pointer.worldX;
		// this.tower.enemy.y = pointer.worldY;
		// let current = this.tower.head.rotation;
		// let target = this.tower.rotate_to(x, y);
		// console.log(current, target);
	}
	mouseMoveHandler(pointer, gameObject, event) {}
}
