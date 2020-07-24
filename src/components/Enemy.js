import Phaser from 'phaser';

export default class Enemy extends Phaser.GameObjects.Sprite {
	constructor(config) {
		super(config.scene, config.x, config.y);
		this.setTexture('enemy');
		this.name = 'enemy1';
		config.scene = config.scene;
		this.scene.add.existing(this);
		this.graphics = this.scene.add.graphics();
		this.graphics.setDepth(5);
		this.setDepth(5);
		this.path = config.path;
		this.drawPath = false;
		this.setPosition(this.path.startPoint.x, this.path.startPoint.y);
		//this.setPosition(pos.x, pos.y);
		window.enemy = this;
		this.position = { t: 0, vec: new Phaser.Math.Vector2() };
		this.scene.add.tween({
			targets: this.position,
			...config.tween,
		});
	}

	preUpdate(time, delta) {
		super.preUpdate(time, delta);
		this.path.getPoint(this.position.t, this.position.vec);
		this.setPosition(this.position.vec.x, this.position.vec.y);
		if (this.drawPath) {
			this.graphics.clear();
			this.graphics.lineStyle(2, 0xff0000, 0.7);
			this.path.draw(this.graphics);
		}
	}
}
