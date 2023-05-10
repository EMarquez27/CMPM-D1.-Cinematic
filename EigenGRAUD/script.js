class SceneA extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'sceneA' });
    }

    preload (){
        this.load.path = './assets/';
        this.load.image('softtofu', 'softtofu.jpg');
        this.load.audio('background_music', 'yuh.mp3');
    }

    create ()
    {
        //play music 
        this.backgroundMusic = this.sound.add('background_music', {loop:true });
        this.backgroundMusic.play();
        //create image object 
        this.imageObject = this.add.image(
            900,//x
            500,
            'softtofu',//imagename
        )
        this.imageObject.scale = 1;

        //fade in and out 
        {
            this.tweens.add({
                targets: this.imageObject,
                ease: 'Sine.easeInOut',
                repeat: -1,
                duration: 1000
            });

            this.cameras.main.once('camerafadeincomplete', function (camera) {
                camera.fadeOut(500);
            });

            this.cameras.main.fadeIn(560);
        }

        //switch to next  
        this.time.delayedCall(1000 , () => 
        {
            console.log('From SceneA to SceneB');

            this.scene.start('sceneB');

        }, this);
    }
}

class SceneB extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'sceneB' });
    }

    preload ()
    {

    }

    create ()
    {
        this.textObject = this.add.text(
            725, //x
            200,//y
            "eigen: GRAU", //text
            {
                font: "80px Unica One",
                color: "#ffffff",
            }
        );
        

        this.textObject = this.add.text(
            800, //x
            500,//y
            "Press any button.", //text
            {
                font: "35px Unica One",
                color: "#ffffff",
            }
        );



        this.input.once('pointerdown', function (event)
        {

            console.log('From SceneB to SceneC');

            this.scene.start('sceneC');

        }, this);
    }

}

class SceneC extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'sceneC' });
    }

    preload ()
    {
        this.load.path = './assets/';
        this.load.image('bg', 'bg.jpg');
    }

    create ()
    {
        
        this.imageObject = this.add.image(
            960,//x
            500,
            'bg',//imagename
        )
        this.imageObject.scale = 1.8;

        //fade in and out 
        {
            this.tweens.add({
                targets: this.imageObject,
                ease: 'Sine.easeInOut',
                repeat: -1,
                duration: 960
            });

            this.cameras.main.once('camerafadeincomplete', function (camera) {
                camera.fadeOut(500);
            });

            this.cameras.main.fadeIn(560);
        }

        //fade in and out 
        {
            this.tweens.add({
                targets: this.imageObject,
                ease: 'Sine.easeInOut',
                repeat: -1,
                duration: 1000
            });

            this.cameras.main.once('camerafadeincomplete', function (camera) {
                camera.fadeOut(500);
            });

            this.cameras.main.fadeIn(560);
        }


        this.input.once('pointerdown', function (event)
        {

            console.log('From SceneC to SceneD');

            this.scene.start('sceneD');

        }, this);
    }
}

class SceneD extends Phaser.Scene
{
    constructor(){
        super({ key: 'sceneD' });
    }

    preload ()
    {
        this.load.path = './assets/';
        this.load.image('nero', 'nero.jpg');
        this.load.image('violet', 'violet.jpg');
    }

    create ()
    {
        this.imageObject = this.add.image(
            400,//x
            400,
            'nero',//imagename
        )
        this.imageObject.scale = 1.5;

        this.imageObject = this.add.image(
            1400,//x
            600,
            'violet',//imagename
        )
        this.imageObject.scale = 1.5;
        //fade in and out 
        {
            this.tweens.add({
                targets: this.imageObject,
                ease: 'Sine.easeInOut',
                repeat: -1,
                duration: 1000
            });

            this.cameras.main.once('camerafadeincomplete', function (camera) {
                camera.fadeOut(500);
            });

            this.cameras.main.fadeIn(560);
        }

    }
}




const config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1000,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: [ SceneA, SceneB, SceneC, SceneD]
};

const game = new Phaser.Game(config);
