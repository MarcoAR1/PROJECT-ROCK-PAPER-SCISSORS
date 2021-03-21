const heartpj = {
  1: document.getElementById("container-barlife-pj-heart-1"),
  2: document.getElementById("container-barlife-pj-heart-2"),
  3: document.getElementById("container-barlife-pj-heart-3"),
};
const heartnpc = {
  1: document.getElementById("container-barlife-npc-heart-1"),
  2: document.getElementById("container-barlife-npc-heart-2"),
  3: document.getElementById("container-barlife-npc-heart-3"),
};
const blockinfo = document.getElementById("container-message-start");
const npc = document.getElementById("container-match-battlefield-npc");
const pj = document.getElementById("container-match-battlefield-pj");
const resetGame = document.getElementById("container-resetgame-img");
const counterGame = {
  countplayer: 0,
  countnpc: 0,
};
let { countplayer, countnpc } = counterGame;
function SelectionFire() {
  let numero = Math.floor(Math.random() * (2 - -1)) + -1;
  if (countplayer < 3) {
    if (0 < numero) {
      countplayer += 1;
      npc.src = "imagen/HojaHitL.png";
      Gamecounter();
      pj.src = "imagen/FuegoL.png";
    }
    if (0 == numero) {
      npc.src = "imagen/FuegoL.png";
      pj.src = "imagen/FuegoL.png";
    }
    if (0 > numero) {
      countnpc += 1;
      npc.src = "imagen/AguaL.png";
      Gamecounter();
      pj.src = "imagen/FuegoHitL.png";
    }
  }

  if (countplayer >= 3) {
    heartnpc[3].src = "imagen/CorazonRoto.png";
    heartnpc[2].src = "imagen/CorazonVacio.png";
    countplayer = "D";
    countnpc = "L";
  } else if (countnpc >= 3) {
    heartpj[3].src = "imagen/CorazonRoto.png";
    heartpj[2].src = "imagen/CorazonVacio.png";
    countnpc = "D";
    countplayer = "L";
    npc.src = "imagen/AguaL.png";
  }
  alCounter();
}
function SelectionLeaf() {
  let numero = Math.floor(Math.random() * (2 - -1)) + -1;

  if (countplayer < 3) {
    if (0 < numero) {
      countplayer++;
      npc.src = "imagen/AguaHitL.png";
      Gamecounter();
      pj.src = "imagen/HojaL.png";
    }
    if (0 == numero) {
      npc.src = "imagen/HojaL.png";
      pj.src = "imagen/HojaL.png";
    }
    if (0 > numero) {
      countnpc++;
      npc.src = "imagen/FuegoL.png";
      Gamecounter();
      pj.src = "imagen/HojaHitL.png";
    }
  }
  if (countplayer >= 3) {
    heartnpc[3].src = "imagen/CorazonRoto.png";
    heartnpc[2].src = "imagen/CorazonVacio.png";
    countplayer = "D";
    countnpc = "L";
  } else if (countnpc >= 3) {
    heartpj[3].src = "imagen/CorazonRoto.png";
    heartpj[2].src = "imagen/CorazonVacio.png";
    countnpc = "D";
    countplayer = "L";
    npc.src = "imagen/FuegoL.png";
  }
  alCounter();
}
function SelectionWater() {
  let numero = Math.floor(Math.random() * (2 - -1)) + -1;

  if (countplayer < 3) {
    if (0 < numero) {
      countplayer++;
      npc.src = "imagen/FuegoHitL.png";
      Gamecounter();
      pj.src = "imagen/AguaL.png";
    }
    if (0 == numero) {
      npc.src = "imagen/AguaL.png";
      pj.src = "imagen/AguaL.png";
    }
    if (0 > numero) {
      countnpc++;
      npc.src = "imagen/HojaL.png";
      Gamecounter();
      pj.src = "imagen/AguaHitL.png";
    }
  }

  if (countplayer >= 3) {
    heartnpc[3].src = "imagen/CorazonRoto.png";
    heartnpc[2].src = "imagen/CorazonVacio.png";
    countplayer = "D";
    countnpc = "L";
  } else if (countnpc >= 3) {
    heartpj[3].src = "imagen/CorazonRoto.png";
    document.getElementById("container-barlife-pj-heart-2").src =
      "imagen/CorazonVacio.png";
    countnpc = "D";
    countplayer = "L";
    npc.src = "imagen/HojaL.png";
  }
  alCounter();
}
function alCounter() {
  blockinfo.src = "imagen/NextRound.png";
  if (countplayer == "L") {
    blockinfo.src = "imagen/YouLose.png";
    resetGame.src = "imagen/Reset.png";
  } else if (countplayer == "D") {
    blockinfo.src = "imagen/YouWin.png";
    resetGame.src = "imagen/Reset.png";
  }
}
function Gamecounter() {
  if (countplayer == 1) {
    heartnpc[1].src = "imagen/CorazonRoto.png";
  } else if (countplayer == 2) {
    heartnpc[2].src = "imagen/CorazonRoto.png";
    heartnpc[1].src = "imagen/CorazonVacio.png";
  }
  if (countnpc == 1) {
    heartpj[1].src = "imagen/CorazonRoto.png";
  } else if (countnpc == 2) {
    heartpj[2].src = "imagen/CorazonRoto.png";
    heartpj[3].src = "imagen/CorazonVacio.png";
  }
}
function gameReset() {
  if ((countplayer = "D" | "L")) {
    countplayer = 0;
  }
  if ((countnpc = "D" | "L")) {
    countnpc = 0;
  }
  if (countplayer == 0) {
    heartpj[1].src = "imagen/Corazon.png";
    heartpj[2].src = "imagen/Corazon.png";
    heartpj[3].src = "imagen/Corazon.png";
    heartnpc[1].src = "imagen/Corazon.png";
    heartnpc[2].src = "imagen/Corazon.png";
    heartnpc[3].src = "imagen/Corazon.png";
    blockinfo.src = "imagen/TheBattleBegins.png";
    resetGame.src = "";
  }
}
document.getElementById("container-barbutton-pj-fire").onclick = SelectionFire;
document.getElementById("container-barbutton-pj-leaf").onclick = SelectionLeaf;
document.getElementById(
  "container-barbutton-pj-water"
).onclick = SelectionWater;
resetGame.onclick = gameReset;
