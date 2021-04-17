import {Scene} from "phaser";
import {TextSprite} from "../../infrastructure/ui/TextSprite";
import {TextButtonColumn} from "../../infrastructure/ui/TextButtonColumn";
const mainMenuImg = require("../../assets/mainmenu.png");
const buttonImg = require("../../assets/button.png");
const headerImg = require("../../assets/header.png");

export class MainMenuScene extends Scene {
    private header: any;
    constructor() {
        super({});
    }

    preload() {
        this.load.image("mainmenu", mainMenuImg);
        this.load.image("header", headerImg);
        this.load.spritesheet('button', buttonImg, { frameWidth: 128, frameHeight: 48 });
    }

    create() {
        /*
        this.header = new TextSprite({
            scene: this,
            x: 0,
            y: 0,
            text: 'Header',
            imageKey: 'header'
        })
         */

        this.add.image(400, 150, 'mainmenu');

        const buttonColumn = new TextButtonColumn({
            scene: this,
            x: 600,
            y: 600,
        })

        buttonColumn.addTextButton({
            text: 'New Game'
        })

        buttonColumn.addTextButton({
            text: 'Quit'
        })
    }
}
