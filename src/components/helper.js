import Phaser from 'phaser';

export function createPath() {
    let path = new Phaser.Curves.Path(100, 200);
    path.ellipseTo(500, 200, 180, 360, true, 0);
    path.lineTo(1100, 800);
    path.ellipseTo(500, 200, 360, 180, true, 0);
    path.lineTo(100, 200);
    // path.circleTo(300, true);

    return path;
}

export function createTweenConfig() {
    return {
        t: 1,
        ease: 'Sine.easeInOut',
        duration: 12000,
        yoyo: false,
        repeat: -1,
    };
}


export function createEnemyTexture(scene) {
    let graphics = scene.make.graphics({x: 0, y: 0, add: false});
    graphics.lineStyle(2, 0xFFFFFF, 1);
    graphics.strokeCircle(25, 25, 25);
    graphics.fillStyle(0xFFFFFF, 0.5);
    graphics.fillCircle(25, 25, 25);
    graphics.generateTexture('enemy', 50, 50);
    graphics.destroy();
}

export function createBackgroundTexture(scene, config) {
    let height = (config.nrow - 1) * config.step_y
    let width = (config.ncol - 1) * config.step_x
    let graphics = scene.make.graphics({x: 0, y: 0, add: false});
    graphics.lineStyle(2, 0x555555, 1);
    graphics.strokeRect(0, 0, width, height);
    graphics.fillStyle(0x555555, 0.7);
    graphics.fillRect(0, 0, width, height);
    graphics.lineStyle(2, 0x17b000);
    [...Array(config.nrow)].forEach((_, i) => {
        graphics.lineBetween(
            i * config.step_x,
            0,
            i * config.step_x,
            (config.nrow - 1) * config.step_y
        )
    });
    [...Array(config.ncol)].forEach((_, i) => {
        graphics.lineBetween(
            0,
            i * config.step_y,
            (config.ncol - 1) * config.step_x,
            i * config.step_y
        )
    });
    graphics.generateTexture('background', width, height);
    graphics.destroy();

}

export function createBulletTexture(scene) {
    let graphics = scene.make.graphics({x: 0, y: 0, add: false});
    graphics.lineStyle(2, 0xffff00, 1);
    graphics.strokeCircle(5, 5, 5);
    graphics.generateTexture('bullet', 10, 10);
    graphics.destroy();

}

export function createTowerBaseTexture(scene) {
    let graphics = scene.make.graphics({x: 0, y: 0, add: false});

    graphics.fillStyle(0x4287f5, 0.7);
    graphics.fillRoundedRect(0, 0, 200, 200, 45);
    graphics.generateTexture('tower_base', 200, 200);
    graphics.destroy();

}

export function createTowerHeadTexture(scene) {
    let graphics = scene.make.graphics({x: 0, y: 0, add: false});
    graphics.lineStyle(2, 0x4287f5, 0);
    graphics.strokeRoundedRect(0, 0, 200, 200, 45);

    graphics.fillStyle(0xff7f50, 1);
    graphics.fillRoundedRect(25, 25, 150, 150, 30);

    graphics.lineStyle(10, 0x000000, 1);
    graphics.strokeRoundedRect(100, 95, 90, 10, 5);
    graphics.generateTexture('tower_head', 200, 200);

    graphics.destroy();
}

