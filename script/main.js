import {
  SelectionFire,
  SelectionWater,
  SelectionLeaf,
  gameReset,
} from "./fieldbattle.js";
export { fire, leaf, water,resetGame };
const resetGame = document.getElementById("container-resetgame-img");
const fire = document.getElementById("container-barbutton-pj-fire");
const leaf = document.getElementById("container-barbutton-pj-leaf");
const water = document.getElementById("container-barbutton-pj-water");
resetGame.onclick = gameReset;

fire.addEventListener("click", SelectionFire);
leaf.addEventListener("click", SelectionLeaf);
water.addEventListener("click", SelectionWater);
