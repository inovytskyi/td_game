import Phaser from 'phaser';
import CameraController from '../components/CameraController';
import Enemy from '../components/Enemy';
import { createPath, createTweenConfig } from '../components/helper';
import { Tower } from '../components/Tower';
import {Background} from "../components/Background";

export default class GameScene extends Phaser.Scene {
	constructor() {
		super('Game');
	}
	preload() {}

	create() {
		this.background = new Background({scene: this, x: 0, y: 0})


		this.enemy = new Enemy({
			scene: this,
			x: 100,
			y: 100,
			drawPath: false,
			path: createPath(),
			// tween: createTweenConfig(),
		});

		this.tower = new Tower({
			scene: this,
			x: 500,
			y: 250,
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
	update(time, delta) {
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
