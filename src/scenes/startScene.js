import Phaser from 'phaser';

export default class StartScene extends Phaser.Scene {
	constructor() {
		super({
			key: 'startScene'
		});
	}

	preload() {

	}

	create() {
		const text = this.add.text(this.game.config.width / 2, this.game.config.height / 2, 'Start making games yo!', { fontSize: '25px' });
		text.setOrigin(0.5, 0.5);
	}

	update() {

	}
	
}
