
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class SceneExporter {

	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__SceneExporter"] = this;

		/* START-USER-CTR-CODE */
		console.log(gameObject)
		gameObject.setInteractive()
		gameObject.on('pointerdown', () => {
			console.log(JSON.stringify(gameObject.scene.children.list.filter(c => c !== gameObject && c.type !== 'TilemapLayer').map(c => c.toJSON())))
		}, this)

		/* END-USER-CTR-CODE */
	}

	/** @returns {SceneExporter} */
	static getComponent(gameObject) {
		return gameObject["__SceneExporter"];
	}

	/** @type {Phaser.GameObjects.Image} */
	gameObject;

	/* START-USER-CODE */
	exportScene(scene) {
		console.log(scene.children.list.map(c => c.toJSON()))
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
