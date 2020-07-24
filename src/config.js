export default {
	type: Phaser.AUTO,
	parent: 'phaser-example',
	width: 800,
	height: 600,
	scale: {
		parent: 'canvas',
		mode: Phaser.Scale.RESIZE,
		autoCenter: Phaser.Scale.CENTER_BOTH,
		resizeInterval: 50,
	},
};
