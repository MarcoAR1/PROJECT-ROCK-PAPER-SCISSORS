import {
  SelectionFire,
  SelectionWater,
  SelectionLeaf,
  gameReset,
} from "./fieldbattle.js";
const resetGame = document.getElementById("container-resetgame-img");
document.getElementById("container-barbutton-pj-fire").onclick = SelectionFire;
document.getElementById("container-barbutton-pj-leaf").onclick = SelectionLeaf;
document.getElementById(
  "container-barbutton-pj-water"
).onclick = SelectionWater;
resetGame.onclick = gameReset;
