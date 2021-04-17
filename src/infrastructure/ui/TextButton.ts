import { Scene } from "phaser";
const uiWidgets = require("phaser-ui-tools");

export type ButtonCallback = () => void;
export const noop: ButtonCallback = () => {};

export const DEFAULT_BUTTON_BLUEPRINT: TextButtonBlueprint = {
  imageKey: 'button',
  outKeyFrame: 0,
  overKeyFrame: 1,
  upKeyFrame: 1,
  downKeyFrame: 2,
  textStyle: {'fill': '#FFF', 'font': '16px Courier New'}
}

export type TextButtonBlueprint = {
  imageKey?: string;
  overKeyFrame?: number;
  outKeyFrame?: number;
  downKeyFrame?: number;
  upKeyFrame?: number;
  textStyle?: Record<string, any>;
}

export type TextButtonParams = TextButtonBlueprint & {
  scene?: Scene;
  x?: number;
  y?: number;
  text: string;
  callback?: ButtonCallback;
  callbackContext?: any;
};

// Note: invoking its constructor automatically attaches the button to the scene
export class TextButton {
  public button: any;
  constructor(params: TextButtonParams) {
    this.button = new uiWidgets.TextButton(
      params.scene,
      params.x,
      params.y,
      params.imageKey,
      params.callback ?? noop,
      params.callbackContext,
      params.overKeyFrame ?? 0,
      params.outKeyFrame ?? 0,
      params.downKeyFrame ?? 0,
      params.upKeyFrame ?? 0
    )
      .setText(params.text, params.textStyle)
      .eventTextYAdjustment(3);
  }
}
