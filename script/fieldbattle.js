import { counterGame, heartnpc, heartpj } from "./counter.js";
import {
  index,
  corazon,
  corazonVacio,
  corazonRoto,
  blockinfo,
  npc,
  pj,
  element,
} from "./choise.js";
export { selections, gameReset };
const { Fire, Leaf, Water } = element;
const { resetGame } = index;
let { countplayer, countnpc } = counterGame;
let countplayers = countplayer[0];
let countnpcs = countnpc[0];

const selections = {
  SelectionFire: function SelectionFire() {
    let numero = Math.floor(Math.random() * (2 - -1)) + -1;
    if (countplayers < 3) {
      if (0 < numero) {
        countnpcs += 1;
        changeimage("Fire", "Leaf", pj);
      } else if (0 == numero) {
        changeimage("Fire", "Fire");
      } else {
        countplayers += 1;
        changeimage("Fire", "Water", npc);
      }
    }
    Gamecounter();
  },
  SelectionLeaf: function SelectionLeaf() {
    let numero = Math.floor(Math.random() * (2 - -1)) + -1;
    if (countplayers < 3) {
      if (0 < numero) {
        countnpcs += 1;
        changeimage("Leaf", "Water", pj);
      } else if (0 == numero) {
        changeimage("Leaf", "Leaf");
      } else {
        countplayers += 1;
        changeimage("Leaf", "Fire", npc);
      }
    }
    Gamecounter();
  },
  SelectionWater: function SelectionWater() {
    let numero = Math.floor(Math.random() * (2 - -1)) + -1;
    if (countplayers < 3) {
      if (0 < numero) {
        countnpcs += 1;
        changeimage("Water", "Fire", pj);
      } else if (0 == numero) {
        changeimage("Water", "Water");
      } else {
        countplayers += 1;
        changeimage("Water", "Leaf", npc);
      }
    }
    Gamecounter();
  },
};

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
      heartpj[x].src = corazonRoto;
      if (heartpj[x - 1]) {
        heartpj[x - 1].src = corazonVacio;
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
        heartpj[x].src = corazonVacio;
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
      heartnpc[x].src = corazonRoto;
      if (heartnpc[x - 1]) {
        heartnpc[x - 1].src = corazonVacio;
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
          heartnpc[x].src = corazonVacio;
        }
      }
    }, 400);
  }
}
function changeimage(poke, pokem, tog) {
  const choise = index[poke + pokem];
  pj.src = choise[0];
  npc.src = choise[1];
  if (tog) {
    for (let x in element) {
      element[x].removeEventListener("click", selections[`Selection${x}`]);
    }
    tog.classList.toggle("hitpj");
    setTimeout(() => {
      tog.src = choise[3];
      tog.classList.toggle("hitpj");
      for (let x in element) {
        element[x].addEventListener("click", selections[`Selection${x}`]);
      }
    }, 1700);
  }
}

function gameReset() {
  if (countplayers === "W" || countplayers === "L") {
    countplayers = 0;
    countnpcs = 0;
    for (let x in heartpj) {
      heartpj[x].src = corazon;
      heartnpc[x].src = corazon;
    }
    blockinfo.src = "imagen/TheBattleBegins.png";
    resetGame.src = "";
  }
}
