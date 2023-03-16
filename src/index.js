import kaboom from "kaboom";
import loadAssets from "./assets";
//--
const k = kaboom({

    width: window.innerWidth,
    height: window.innerHeight

});

let MOVE_SPEED = 0;

loadAssets();

let player = k.add([

    sprite('placeholder', 'sprites/placeholder.png'),
    pos(window.innerWidth / 2, window.innerHeight / 2),
    body(),
    area(),
    "player"

])

k.onKeyDown("left", () => {

    player.move()

});