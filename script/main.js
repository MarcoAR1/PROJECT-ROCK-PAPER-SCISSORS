import { selections, gameReset } from "./fieldbattle.js";
import { element, actions, index } from "./choise.js";
const { resetGame } = index;

for (let x in element) {
  element[x].addEventListener("click", selections[`Selection${x}`]);
}
for (let x in element) {
  element[x].addEventListener("mouseover", () => {
    actions.mouseover(element[x], x);
    console.log(actions.baseImg);
  });
}
for (let x in element) {
  element[x].addEventListener("mouseout", () => actions.mouseout(element[x]));
}

resetGame.onclick = gameReset;
