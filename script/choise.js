export {
  index,
  corazon,
  corazonVacio,
  corazonRoto,
  blockinfo,
  npc,
  pj,
  element,
  actions,
};
const blockinfo = document.getElementById("container-message-start");
const npc = document.getElementById("container-match-battlefield-npc");
const pj = document.getElementById("container-match-battlefield-pj");
const corazon = "imagen/Corazon.png";
const corazonVacio = "imagen/CorazonVacio.png";
const corazonRoto = "imagen/CorazonRoto.png";
const index = {
  FireWater: {
    0: "imagen/Flareon.gif",
    1: "imagen/VaporeonHit.gif",
    3: "imagen/Vaporeon.gif",
  },
  WaterFire: {
    0: "imagen/VaporeonHit.gif",
    1: "imagen/Flareon.gif",
    3: "imagen/Vaporeon.gif",
  },
  FireLeaf: {
    0: "imagen/FlareonHit.gif",
    1: "imagen/Lafeon.gif",
    3: "imagen/Flareon.gif",
  },
  LeafFire: {
    0: "imagen/Lafeon.gif",
    1: "imagen/FlareonHit.gif",
    3: "imagen/Flareon.gif",
  },
  FireFire: {
    0: "imagen/Flareon.gif",
    1: "imagen/Flareon.gif",
  },
  LeafWater: {
    0: "imagen/LafeonHit.gif",
    1: "imagen/Vaporeon.gif",
    3: "imagen/Lafeon.gif",
  },
  WaterLeaf: {
    0: "imagen/Vaporeon.gif",
    1: "imagen/LafeonHit.gif",
    3: "imagen/Lafeon.gif",
  },
  LeafLeaf: {
    0: "imagen/Lafeon.gif",
    1: "imagen/Lafeon.gif",
  },
  WaterWater: {
    0: "imagen/Vaporeon.gif",
    1: "imagen/Vaporeon.gif",
  },
  resetGame: document.getElementById("container-resetgame-img"),
};
const element = {
  Fire: document.getElementById("container-barbutton-pj-fire"),
  Leaf: document.getElementById("container-barbutton-pj-leaf"),
  Water: document.getElementById("container-barbutton-pj-water"),
};
const actions = {
  baseImg: "",
  mouseover: (target, element) => {
    actions.baseImg = target.src;
    target.src = `imagen/${element}Selection.gif`;
  },
  mouseout: (target) => {
    target.src = actions.baseImg;
  },
};
