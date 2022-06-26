
// You can write more code here

/* START OF COMPILED CODE */

class Forest0 extends Phaser.Scene {

	constructor() {
		super("Forest0");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// forest_0
		const forest_0 = this.add.tilemap("forest_0");
		forest_0.addTilesetImage("forest", "forest");

		// background_1
		forest_0.createLayer("background", [], 0, 0);

		// ground_1
		forest_0.createLayer("ground", ["forest"], 0, 0);

		// foreground_1
		forest_0.createLayer("foreground", [], 0, 0);

		// groundCollider
		const groundCollider = this.add.rectangle(1, 1249, 128, 128);
		groundCollider.scaleX = 15.996933847548783;
		groundCollider.scaleY = 6.254773487057181;
		groundCollider.setOrigin(0, 0);

		// rectangle_1
		const rectangle_1 = this.add.rectangle(87, 95, 128, 128);
		rectangle_1.isFilled = true;

		// groundCollider (components)
		new Collider(groundCollider);

		this.forest_0 = forest_0;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.Tilemaps.Tilemap} */
	forest_0;

	/* START-USER-CODE */

	// Write your code here

	create() {
		console.log("asdfasd")
		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
