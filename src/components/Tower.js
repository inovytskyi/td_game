import Phaser from 'phaser';

export class Tower extends Phaser.GameObjects.Sprite {
	constructor(config) {
		super(config.scene, config.x, config.y);
		this.scene = config.scene;
		this.setPosition(config.x, config.y);
		this.setTexture('tower_base');
		this.setOrigin(0);
		this.setDepth(5);
		this.scene.add.existing(this);
		this.head = this.scene.add.image(
			config.x + 100,
			config.y + 100,
			'tower_head'
		);
		this.head.setOrigin(0.5, 0.5);
		this.head.setDepth(6);
		this.head.rotation = -Math.PI;
		this.name = 'tower1';
		this.enemy = undefined;
		this.speed = 0.001;

		this.debug_ray = this.scene.add.graphics();
		this.debug_ray.lineStyle(2, 0xff0000, 0);

		this.debug_ray.lineBetween(0, 0, 800, 0);
		this.debug_ray.setPosition(this.head.x, this.head.y);

		this.debug_ray.setDepth(5);
		this.debug_ray.name = 'debug_ray';
		this.debug_ray.rotation = -Math.PI;

		window.tower = this;
	}

	rotate_to(x, y) {
		let angle = Phaser.Math.Angle.Between(this.head.x, this.head.y, x, y);

		// this.head.rotation = angle + Math.PI / 2;
		// this.debug_ray.rotation = this.head.rotation;
		return angle;
	}

	preUpdate(time, delta) {
		super.preUpdate(time, delta);
		if (!this.enemy) {
			this.enemy = this.scene.children.getByName('enemy1');
		}
		let current = this.head.rotation;
		let target = this.rotate_to(this.enemy.x, this.enemy.y);
		let step = 0;
		if (current > 0 && target < 0) {
			if (Math.abs(current) + Math.abs(target) > Math.PI) {
				step = Math.min(this.speed * delta, Math.abs(current - target));
			} else {
				step = -Math.min(this.speed * delta, Math.abs(current - target));
			}
		} else if (current < 0 && target > 0) {
			if (Math.abs(current) + Math.abs(target) > Math.PI) {
				step = -Math.min(this.speed * delta, Math.abs(current - target));
			} else {
				step = Math.min(this.speed * delta, Math.abs(current - target));
			}
		} else if (current > target) {
			step = -Math.min(this.speed * delta, Math.abs(current - target));
		} else if (current < target) {
			step = Math.min(this.speed * delta, Math.abs(current - target));
		}

		this.head.rotation += step;
		this.debug_ray.rotation += step;
	}
}
