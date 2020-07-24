import Phaser from 'phaser';
import {Bullet} from './Bullet';

export class Tower extends Phaser.GameObjects.Group {
    constructor(config) {
        super(config.scene);
        this.base = new TowerBase({
            scene: this.scene,
            x: config.x,
            y: config.y
        })
        this.head = new TowerHead({
            scene: this.scene,
            x: this.base.x + this.base.width / 2,
            y: this.base.y + this.base.height / 2,
            speed: 0.001
        });
        this.add(this.base, true);
        this.add(this.head, true);

        this.name = 'tower1';
        this.speed = 0.001;


        this.bullets = [];
        this.scene.add.existing(this)
        window.tower = this;

    }
    preUpdate(time, delta) {
    super.preUpdate(time, delta);
    }
}

export class TowerHead extends Phaser.GameObjects.Sprite {
    constructor(config) {
        super(config.scene, config.x, config.y);
        this.setTexture('tower_head');
        this.setPosition(config.x, config.y)
        this.setOrigin(0.5, 0.5);
        this.setDepth(6);
        this.rotation =  -Math.PI;
        this.speed = config.speed;
        this.current_enemy = this.scene.children.getByName('enemy1')

        // this.debug_ray = this.scene.add.graphics();
        // this.debug_ray.lineStyle(2, 0xff0000, 0);
        //
        // this.debug_ray.lineBetween(0, 0, 800, 0);
        // this.debug_ray.setPosition(this.head.x, this.head.y);
        //
        // this.debug_ray.setDepth(5);
        // this.debug_ray.name = 'debug_ray';
        // this.debug_ray.rotation = -Math.PI;
        window.head = this;
    }

    preUpdate(time, delta) {
        super.preUpdate(time, delta);
        let current = this.rotation;
        let target = this.get_angle_to(this.current_enemy.x, this.current_enemy.y);
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
        // if (Math.abs(this.head.rotation - target) < 0.0005) {
        // 	if (this.bullets.length < 5) {
        // 		let vec = new Phaser.Math.Vector2();
        // 		vec.setToPolar(this.head.rotation, 100);
        // 		let bullet = new Bullet({
        // 			x: vec.x + this.head.x,
        // 			y: vec.y + this.head.y,
        // 			targetX: this.enemy.x,
        // 			targetY: this.enemy.y,
        // 			scene: this.scene,
        // 		});
        //
        // 		this.bullets.push(bullet);
        // 	}
        // }
        this.rotation += step;
        // this.debug_ray.rotation += step;
        // this.bullets = this.bullets.filter((value, index) => value.active);
    }

    get_angle_to(x, y) {
        let angle = Phaser.Math.Angle.Between(this.x, this.y, x, y);

        return angle;
    }


}

export class TowerBase extends Phaser.GameObjects.Sprite {
    constructor(config) {
        super(config.scene, config.x, config.y);
        this.setTexture('tower_base');
        this.setPosition(config.x, config.y)
        this.setOrigin(0);
        this.setDepth(5);
    }

}
