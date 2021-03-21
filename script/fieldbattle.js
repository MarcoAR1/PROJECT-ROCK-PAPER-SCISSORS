import { counterGame, heartnpc, heartpj } from "./counter.js";
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
  if (countplayers < 3) {
    if (0 < numero) {
      countnpcs += 1;
      npc.src = "imagen/HojaHitL.png";
      pj.src = "imagen/FuegoL.png";
    } else if (0 == numero) {
      npc.src = "imagen/FuegoL.png";
      pj.src = "imagen/FuegoL.png";
    } else {
      countplayers += 1;
      npc.src = "imagen/AguaL.png";
      pj.src = "imagen/FuegoHitL.png";
    }
  }
  Gamecounter();
}
function SelectionLeaf() {
  let numero = Math.floor(Math.random() * (2 - -1)) + -1;

  if (countplayers < 3) {
    if (0 < numero) {
      countnpcs += 1;
      npc.src = "imagen/AguaHitL.png";
      pj.src = "imagen/HojaL.png";
    } else if (0 == numero) {
      npc.src = "imagen/HojaL.png";
      pj.src = "imagen/HojaL.png";
    } else {
      countplayers += 1;
      npc.src = "imagen/FuegoL.png";
      pj.src = "imagen/HojaHitL.png";
    }
  }
  Gamecounter();
}
function SelectionWater() {
  let numero = Math.floor(Math.random() * (2 - -1)) + -1;

  if (countplayers < 3) {
    if (0 < numero) {
      countnpcs += 1;
      npc.src = "imagen/FuegoHitL.png";
      pj.src = "imagen/AguaL.png";
    } else if (0 == numero) {
      npc.src = "imagen/AguaL.png";
      pj.src = "imagen/AguaL.png";
    } else {
      countplayers += 1;
      npc.src = "imagen/HojaL.png";
      pj.src = "imagen/AguaHitL.png";
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
  } else {
    blockinfo.src = "imagen/NextRound.png";
  }
}

let oldcountnpcs = 0;
let oldcountplayers = 0;
function Gamecounter() {
  if (oldcountplayers !== countplayers) {
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
      for (let x = 1; x < countplayers + 1; x += 1) {
        if (x > 3) {
          break;
        }
        heartpj[x].src = "imagen/CorazonVacio.png";
      }
    }, 400);
  }
  if (oldcountnpcs !== countnpcs) {
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
