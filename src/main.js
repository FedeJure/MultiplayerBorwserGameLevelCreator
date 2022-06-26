window.addEventListener('load', function () {
	var game = new Phaser.Game({
		width: 800,
		height: 600,
		type: Phaser.AUTO,
        backgroundColor: "#242424",
		scale: {
			mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH
		},
	});
	
	game.scene.add("SceneLoader", SceneLoader, true);
	
});

class SceneLoader extends Phaser.Scene {
    scenes = [
        'Forest0'
    ]
    constructor ()
    {
        super();
    }

    preload ()
    {
        //  It's essential that the key given here is the exact class name used in the JS file. It's case-sensitive.
        //  See the SceneB.js file and documentation for details.
        this.load.pack("pack", "assets/assetPreload.json");
    }

    create ()
    {
        const select = document.createElement('select')
        select.style.position = 'absolute'
        select.style.left = '0'
        document.body.appendChild(select)
        
        const selector = document.createElement('option')
        selector.value = undefined
        selector.innerText = 'Select an scene to load'
        select.appendChild(selector)       

        this.scenes.forEach(scene => {
            const selector = document.createElement('option')
            selector.value = scene
            selector.innerText = scene
            select.appendChild(selector)
        })

        select.onchange = ev => {
            const value = ev.currentTarget.value
            if (!value) return
            this.scene.launch(value);

        }    
    }

}
