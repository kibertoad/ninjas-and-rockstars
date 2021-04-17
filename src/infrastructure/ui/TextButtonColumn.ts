import { Scene } from "phaser";
import {
  DEFAULT_BUTTON_BLUEPRINT,
  TextButton,
  TextButtonBlueprint,
  TextButtonParams,
} from "./TextButton";
const uiWidgets = require("phaser-ui-tools");

export type TextButtonColumnParams = {
  scene: Scene;
  x: number;
  y: number;
};

export class TextButtonColumn {
  private column: any;
  private buttons: TextButton[];
  private buttonBlueprint: TextButtonBlueprint;
  constructor(
    params: TextButtonColumnParams,
    buttonBlueprint: TextButtonBlueprint = DEFAULT_BUTTON_BLUEPRINT
  ) {
    this.column = new uiWidgets.Column(params.scene, params.x, params.y);
    this.buttons = [];
    this.buttonBlueprint = buttonBlueprint;
  }

  addTextButton(params: TextButtonParams): TextButton {
    const newButton: TextButton = new TextButton({
        scene: this.column.scene,
        ...this.buttonBlueprint,
        ...params
    });
    this.buttons.push(newButton);
    this.column.addNode(newButton.button, 0, 10);

    return newButton;
  }
}
