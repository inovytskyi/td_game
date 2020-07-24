import Phaser from 'phaser';
import game_setting from './config';
import LoaderScene from './scenes/LoaderScene';
import GameScene from './scenes/GameScene';

class Game extends Phaser.Game {
	constructor() {
		super(game_setting);
		this.scene.add('Loader', LoaderScene);
		this.scene.add('Game', GameScene);
		this.scene.start('Loader');
	}
}

let game = new Game();
window.game = game;
