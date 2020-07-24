export default class CameraController {
	constructor(config) {
		this.min_x = config.min_x;
		this.min_y = config.min_y;
		this.max_x = config.max_x;
		this.max_y = config.max_y;
		this.step_x = config.step_x;
		this.step_y = config.step_y;
		this.camera = config.scene.cameras.main;
		this.cursor = {
			...config.scene.input.keyboard.createCursorKeys(),
			...config.scene.input.keyboard.addKeys('W,S,A,D'),
		};
		window.cursor = this.cursor;
		// this.cursor.addKeys({
		// 	up: Phaser.Input.Keyboard.KeyCodes.W,
		// 	down: Phaser.Input.Keyboard.KeyCodes.S,
		// });
		this.border = config.border;

		this.camera.useBounds = true;
		this.camera.setBounds(
			this.min_x - this.border,
			this.min_y - this.border,
			this.max_x - this.min_x + 2 * this.border,
			this.max_y - this.min_y + 2 * this.border
		);
	}
	updateCamera() {
		if (this.cursor.left.isDown || this.cursor.A.isDown) {
			this.camera.scrollX -= this.step_x;
		} else if (this.cursor.right.isDown || this.cursor.D.isDown) {
			this.camera.scrollX += this.step_x;
		} else if (this.cursor.up.isDown || this.cursor.W.isDown) {
			this.camera.scrollY -= this.step_y;
		} else if (this.cursor.down.isDown || this.cursor.S.isDown) {
			this.camera.scrollY += this.step_y;
		}
	}
}
