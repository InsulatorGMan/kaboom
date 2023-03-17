import kaboom from "kaboom";
import loadAssets from "./assets";
import levels from "./levels";

//--
let MOVE_SPEED = 0;
let JUMP_FORCE = 80;
let GRAVITY_FORCE = 40;

let currentLevel = 0;
let coins = 0;

//--
const k = kaboom({

    width: window.innerWidth,
    height: window.innerHeight

});

k.setGravity(GRAVITY_FORCE);

loadAssets();

k.addLevel(levels["0"].physicalData, {

    tileWidth: 16,
    tileHeight: 16,
    tiles: {

        "P": () => [

            sprite('placeholder'),
            area(),
            body(),
            fixed()
        
        ]

    }

});

let player = k.add([

    sprite('placeholder', 'sprites/placeholder.png'),
    pos(0,0),
    body(),
    area(),
    "player"

]);



k.onKeyDown("left", () => {

    player.move(-MOVE_SPEED, 0);

});

k.onKeyDown("right", () => {

    player.move(MOVE_SPEED, 0);

});

k.onKeyDown('space' && 'up', () => {

    player.jump(JUMP_FORCE);

});