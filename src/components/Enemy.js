import Phaser from 'phaser';

export default class Enemy extends Phaser.GameObjects.Sprite {
	constructor(config) {
		super(config.scene, config.path.startPoint.x, config.path.startPoint.y);
		this.setTexture('enemy');
		this.name = 'enemy1';
		this.path = config. path
		this.drawPath = config.drawPath;
		if (this.drawPath){
			this.debug_graph = this.scene.add.graphics();
			this.debug_graph.setDepth(5);
		}

		this.setDepth(7);

		this.setPosition(this.path.startPoint.x, this.path.startPoint.y);
		this.progress = 0;
		this.point = new Phaser.Math.Vector2()
		this.speed = 0.0001;
		window.enemy = this;
		this.scene.add.existing(this);

	}

	preUpdate(time, delta) {
		super.preUpdate(time, delta);
		if(this.progress < 1) {
			this.progress += this.speed * delta;
			this.path.getPoint(this.progress, this.point);
			this.setPosition(this.point.x, this.point.y);
			if (this.drawPath) {
				this.debug_graph.clear();
				this.debug_graph.lineStyle(2, 0xff0000, 0.7);
				this.path.draw(this.debug_graph);
			}
		} else {
			this.progress = 0;
		}
	}
}
