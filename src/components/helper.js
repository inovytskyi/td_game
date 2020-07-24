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
