import { counterGame, heartnpc, heartpj } from "./counter.js";
import { fire, leaf, water } from "./main.js";
let { countplayer, countnpc } = counterGame;
export { SelectionFire, SelectionWater, SelectionLeaf, gameReset };
const resetGame = document.getElementById("container-resetgame-img");
const blockinfo = document.getElementById("container-message-start");
const npc = document.getElementById("container-match-battlefield-npc");
const pj = document.getElementById("container-match-battlefield-pj");
let countplayers = countplayer[0];
let countnpcs = countnpc[0];
function SelectionFire() {
  let numero = Math.floor(Math.random() * (2 - -1)) + -1;
  fire.removeEventListener("click", SelectionFire);
  leaf.removeEventListener("click", SelectionLeaf);
  water.removeEventListener("click", SelectionWater);

  if (countplayers < 3) {
    if (0 < numero) {
      countnpcs += 1;
      npc.src = "imagen/Lefeon.gif";
      pj.src = "imagen/Flareon HIt.gif";
      pj.classList.toggle("hitpj");
      setTimeout(() => {
        pj.src = "imagen/flareon.gif";
        pj.classList.toggle("hitpj");
        fire.addEventListener("click", SelectionFire);
        leaf.addEventListener("click", SelectionLeaf);
        water.addEventListener("click", SelectionWater);
      }, 1700);
    } else if (0 == numero) {
      npc.src = "imagen/Flareon.gif";
      pj.src = "imagen/Flareon.gif";
      fire.addEventListener("click", SelectionFire);
      leaf.addEventListener("click", SelectionLeaf);
      water.addEventListener("click", SelectionWater);
    } else {
      countplayers += 1;
      npc.src = "imagen/Vaporeon Hit.gif";
      pj.src = "imagen/Flareon.gif";
      npc.classList.toggle("hitnpc");
      setTimeout(() => {
        npc.src = "imagen/Vaporeon.gif";
        npc.classList.toggle("hitnpc");
        fire.addEventListener("click", SelectionFire);
        leaf.addEventListener("click", SelectionLeaf);
        water.addEventListener("click", SelectionWater);
      }, 1700);
    }
  }
  Gamecounter();
}
function SelectionLeaf() {
  let numero = Math.floor(Math.random() * (2 - -1)) + -1;
  fire.removeEventListener("click", SelectionFire);
  leaf.removeEventListener("click", SelectionLeaf);
  water.removeEventListener("click", SelectionWater);

  if (countplayers < 3) {
    if (0 < numero) {
      countnpcs += 1;
      npc.src = "imagen/Vaporeon.gif";
      pj.src = "imagen/Lefeon Hit.gif";
      pj.classList.toggle("hitpj");
      setTimeout(() => {
        pj.src = "imagen/Lefeon.gif";
        pj.classList.toggle("hitpj");
        fire.addEventListener("click", SelectionFire);
        leaf.addEventListener("click", SelectionLeaf);
        water.addEventListener("click", SelectionWater);
      }, 1700);
    } else if (0 == numero) {
      npc.src = "imagen/Lefeon.gif";
      pj.src = "imagen/Lefeon.gif";
      fire.addEventListener("click", SelectionFire);
      leaf.addEventListener("click", SelectionLeaf);
      water.addEventListener("click", SelectionWater);
    } else {
      countplayers += 1;
      npc.src = "imagen/Flareon HIt.gif";
      pj.src = "imagen/Lefeon.gif";
      npc.classList.toggle("hitnpc");
      setTimeout(() => {
        npc.src = "imagen/flareon.gif";
        npc.classList.toggle("hitnpc");
        fire.addEventListener("click", SelectionFire);
        leaf.addEventListener("click", SelectionLeaf);
        water.addEventListener("click", SelectionWater);
      }, 1700);
    }
  }
  Gamecounter();
}
function SelectionWater() {
  let numero = Math.floor(Math.random() * (2 - -1)) + -1;
  fire.removeEventListener("click", SelectionFire);
  leaf.removeEventListener("click", SelectionLeaf);
  water.removeEventListener("click", SelectionWater);

  if (countplayers < 3) {
    if (0 < numero) {
      countnpcs += 1;
      npc.src = "imagen/Flareon.gif";
      pj.src = "imagen/Vaporeon Hit.gif";
      pj.classList.toggle("hitpj");
      setTimeout(() => {
        pj.src = "imagen/Vaporeon.gif";
        pj.classList.toggle("hitpj");
        fire.addEventListener("click", SelectionFire);
        leaf.addEventListener("click", SelectionLeaf);
        water.addEventListener("click", SelectionWater);
      }, 1700);
    } else if (0 == numero) {
      npc.src = "imagen/Vaporeon.gif";
      pj.src = "imagen/Vaporeon.gif";
      fire.addEventListener("click", SelectionFire);
      leaf.addEventListener("click", SelectionLeaf);
      water.addEventListener("click", SelectionWater);
    } else {
      countplayers += 1;
      npc.src = "imagen/Lefeon Hit.gif";
      pj.src = "imagen/Vaporeon.gif";
      npc.classList.toggle("hitnpc");
      setTimeout(() => {
        npc.src = "imagen/Lefeon.gif";
        npc.classList.toggle("hitnpc");
        fire.addEventListener("click", SelectionFire);
        leaf.addEventListener("click", SelectionLeaf);
        water.addEventListener("click", SelectionWater);
      }, 1700);
    }
  }
  Gamecounter();
}

function alCounter() {
  if (countplayers === "L") {
    blockinfo.src = "imagen/YouLose.png";
    resetGame.src = "imagen/Reset.png";
  } else if (countplayers === "W") {
    blockinfo.src = "imagen/YouWin.png";
    resetGame.src = "imagen/Reset.png";
  }
}

let oldcountnpcs = 0;
let oldcountplayers = 0;
function Gamecounter() {
  if (countplayers === 1 || countnpcs === 1) {
    blockinfo.src = "imagen/NextRound.png";
  }
  if (
    oldcountplayers !== countplayers &&
    countplayers != "L" &&
    countplayers != "W"
  ) {
    oldcountplayers = countplayers;
    for (let x = 1; x < countplayers + 1; x += 1) {
      if (x > 3) {
        break;
      }
      heartpj[x].src = "imagen/CorazonRoto.png";
      if (heartpj[x - 1]) {
        heartpj[x - 1].src = "imagen/CorazonVacio.png";
      }
      if (x === 3) {
        countplayers = "L";
        oldcountplayers = 0;
        alCounter();
      }
    }
    setTimeout(() => {
      let currentCount =
        typeof countplayers === typeof "Hello" ? 3 : countplayers;
      for (let x = 1; x < currentCount + 1; x += 1) {
        if (x > 3) {
          break;
        }
        heartpj[x].src = "imagen/CorazonVacio.png";
      }
    }, 400);
  }
  if (
    oldcountnpcs !== countnpcs &&
    countplayers != "L" &&
    countplayers != "W"
  ) {
    oldcountnpcs = countnpcs;
    for (let x = 1; x < countnpcs + 1; x += 1) {
      if (x > 3) {
        break;
      }
      heartnpc[x].src = "imagen/CorazonRoto.png";
      if (heartnpc[x - 1]) {
        heartnpc[x - 1].src = "imagen/CorazonVacio.png";
      }
      if (x === 3) {
        countplayers = "W";
        oldcountnpcs = 0;
        alCounter();
      }
    }
    setTimeout(() => {
      if (countnpc <= 3) {
        for (let x = 1; x < countnpcs + 1; x += 1) {
          heartnpc[x].src = "imagen/CorazonVacio.png";
        }
      }
    }, 400);
  }
}

function gameReset() {
  if (countplayers === "W" || countplayers === "L") {
    countplayers = 0;
    countnpcs = 0;
    for (let x in heartpj) {
      heartpj[x].src = "imagen/Corazon.png";
      heartnpc[x].src = "imagen/Corazon.png";
    }
    blockinfo.src = "imagen/TheBattleBegins.png";
    resetGame.src = "";
  }
}
