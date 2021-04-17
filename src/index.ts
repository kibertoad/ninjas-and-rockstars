import { Game } from "phaser";
import {MainMenuScene} from "./components/main-menu/mainMenuScene";

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 1280,
  height: 1024,
  scene: MainMenuScene,
};

const game = new Game(config);
