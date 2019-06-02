import Phaser from 'phaser';
import StartScene from './scenes/startScene.js';

const config = {
    type: Phaser.AUTO,
    width: 480,
    height: 600,
	backgroundColor: 0x000000,
	physics: {
		default: 'arcade',
		arcade: {
			debug: false
		}
	},
	scene: [ StartScene ],
	pixelArt: true
};

const game = new Phaser.Game(config);
