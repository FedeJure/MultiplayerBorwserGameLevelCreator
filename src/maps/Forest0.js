
// You can write more code here

/* START OF COMPILED CODE */

class Forest0 extends Phaser.Scene {

	constructor() {
		super("Forest0");

		/* START-USER-CTR-CODE */
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	preload() {

		this.load.pack("forest", "assets/forest.json");
	}

	/** @returns {void} */
	editorCreate() {

		// forest_1
		const forest_1 = this.add.tilemap("forest_1");
		forest_1.addTilesetImage("forest", "forest");
		forest_1.addTilesetImage("farm", "farm");

		// groundCollider
		const groundCollider = this.add.rectangle(1, 1697, 128, 128);
		groundCollider.scaleX = 15.996933847548783;
		groundCollider.scaleY = 2.762982256217966;
		groundCollider.setOrigin(0, 0);

		// rectangle_1
		const rectangle_1 = this.add.rectangle(0, 1184, 128, 128);
		rectangle_1.scaleX = 2.9922349318757036;
		rectangle_1.scaleY = 0.05299820435882996;
		rectangle_1.setOrigin(0, 0);

		// ground_1
		forest_1.createLayer("ground", ["forest","farm"], 0, 0);

		// tree2
		this.add.image(820, 1627, "texture", "tree2");

		// tree1
		this.add.image(1005, 1614, "texture", "tree1");

		// box
		this.add.image(858, 1674, "texture", "box");

		// tree
		const tree = this.add.image(737, 1592, "texture", "tree2");
		tree.scaleX = 1.5;
		tree.scaleY = 1.5;

		// ladder
		this.add.image(242, 1648, "texture", "ladder");

		// ladder_1
		this.add.image(242, 1554, "texture", "ladder");

		// ladder_2
		this.add.image(242, 1459, "texture", "ladder");

		// ladder_3
		this.add.image(241, 1364, "texture", "ladder");

		// ladder_4
		this.add.image(240, 1269, "texture", "ladder");

		// ladder_5
		this.add.image(240, 1236, "texture", "ladder");

		// button
		const button = this.add.image(972, 1286, "button");

		// groundCollider (components)
		new Collider(groundCollider);

		// rectangle_1 (components)
		const rectangle_1Collider = new Collider(rectangle_1);
		rectangle_1Collider.up = true;

		// button (components)
		new SceneExporter(button);

		this.forest_1 = forest_1;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.Tilemaps.Tilemap} */
	forest_1;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		exportScene(this)
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

function exportScene(scene) {

	document.scene = scene
}
