import { Scene } from "phaser";
const uiWidgets = require("phaser-ui-tools");

export type ButtonCallback = () => void;
const noop: ButtonCallback = () => {};

export type TextSpriteParams = {
  scene: Scene;
  x: number;
  y: number;
  text: string;
  imageKey: string;
  textStyle?: Record<string, any>;
};

// Note: invoking its constructor automatically attaches the button to the scene
export class TextSprite {
  private sprite: any;
  constructor(params: TextSpriteParams) {
    this.sprite = new uiWidgets.TextSprite(
      params.scene,
      params.x,
      params.y,
      params.imageKey
    )
      .setText(params.text, params.textStyle)
      .setOrigin(0.0, 0.0);
  }
}
