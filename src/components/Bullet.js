import Phaser from 'phaser';

export class Bullet extends Phaser.GameObjects.Sprite {
	constructor(config) {
		super(config.scene, config.x, config.y);
		config.scene.add.existing(this);
		this.setPosition(config.x, config.y);
		this.setTexture('bullet');
		this.setOrigin(0.5);
		this.setDepth(6);
		this.targetX = config.targetX;
		this.targetY = config.targetY;
		this.movingLine = new Phaser.Geom.Line(
			this.x,
			this.y,
			this.targetX,
			this.targetY
		);
		this.position = 0;
		this.speed = 0.002;
	}

	preUpdate(time, delta) {
		super.preUpdate(time, delta);
		if (this.position < 1) {
			this.position += this.speed * delta;
			this.movingLine.getPoint(this.position, this);
		} else {
			this.destroy();
		}
	}
}
