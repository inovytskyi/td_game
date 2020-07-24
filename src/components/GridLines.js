import Phaser from 'phaser';

export default class GridLines extends Phaser.GameObjects.Sprite {
	constructor(config) {
		super(config.scene, config.x, config.y);
		this.step_row = config.step_x;
		this.step_col = config.step_y;
		this.nrow = config.nrow;
		this.ncol = config.ncol;

		this.rows = [];
		this.cols = [];
		this.createLines();
		this.setDepth(2);
		window.lines = this;
		this.setInteractive();
	}

	createLines() {
		this.rows = [...Array(this.nrow)].map((grid_line, i) => {
			grid_line = this.scene.add.graphics();
			grid_line.lineStyle(2, 0x17b000, 0.5);
			grid_line.lineBetween(
				0,
				i * this.step_row,
				(this.ncol - 1) * this.step_col,
				i * this.step_row
			);
			grid_line.setDepth(1);
			grid_line.setPosition(this.x, this.y);
			return grid_line;
		});
		this.cols = [...Array(this.ncol)].map((grid_line, i) => {
			grid_line = this.scene.add.graphics();
			grid_line.lineStyle(2, 0x17b000);
			grid_line.lineBetween(
				i * this.step_col,
				0,
				i * this.step_col,
				(this.nrow - 1) * this.step_row
			);
			grid_line.setDepth(1);
			grid_line.setPosition(this.x, this.y);
			return grid_line;
		});
	}
}
