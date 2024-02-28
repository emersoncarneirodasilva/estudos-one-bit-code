import { Character } from "./Character.js";

export class Mage extends Character {
  constructor(name, hp, atk, def, magic) {
    super(name, hp, atk, def);
    this.magic = magic;
  }

  attack(oponent) {
    oponent.hp -= this.atk + this.magic - oponent.def;
  }

  cure(target) {
    target.hp += this.magic * 2;
  }
}
