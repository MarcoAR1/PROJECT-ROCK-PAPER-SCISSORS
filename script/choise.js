export { index, corazon, corazonVacio, corazonRoto, blockinfo, npc, pj };
const blockinfo = document.getElementById("container-message-start");
const npc = document.getElementById("container-match-battlefield-npc");
const pj = document.getElementById("container-match-battlefield-pj");
const corazon = "imagen/Corazon.png";
const corazonVacio = "imagen/CorazonVacio.png";
const corazonRoto = "imagen/CorazonRoto.png";
const index = {
  FireWater: {
    0: "imagen/flareon.gif",
    1: "imagen/Vaporeon Hit.gif",
    3: "imagen/Vaporeon.gif",
  },
  WaterFire: {
    0: "imagen/Vaporeon Hit.gif",
    1: "imagen/flareon.gif",
    3: "imagen/Vaporeon.gif",
  },
  FireLeaf: {
    0: "imagen/Flareon Hit.gif",
    1: "imagen/Lefeon.gif",
    3: "imagen/flareon.gif",
  },
  LeafFire: {
    0: "imagen/Lefeon.gif",
    1: "imagen/Flareon Hit.gif",
    3: "imagen/flareon.gif",
  },
  FireFire: {
    0: "imagen/flareon.gif",
    1: "imagen/flareon.gif",
  },
  LeafWater: {
    0: "imagen/Lefeon Hit.gif",
    1: "imagen/Vaporeon.gif",
    3: "imagen/Lefeon.gif",
  },
  WaterLeaf: {
    0: "imagen/Vaporeon.gif",
    1: "imagen/Lefeon Hit.gif",
    3: "imagen/Lefeon.gif",
  },
  LeafLeaf: {
    0: "imagen/Lefeon.gif",
    1: "imagen/Lefeon.gif",
  },
  WaterWater: {
    0: "imagen/Vaporeon.gif",
    1: "imagen/Vaporeon.gif",
  },
};
