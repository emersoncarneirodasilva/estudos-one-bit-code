import { Character } from "./Character.js";

export class Thief extends Character {
  // Não precisa usar o construtor pois herda tudo da classe pai
  // constructor(name, hp, atk, def) {
  //   super(name, hp, atk, def);
  // }

  attack(oponent) {
    oponent.hp -= (this.atk - oponent.def) * 2;
  }
}
