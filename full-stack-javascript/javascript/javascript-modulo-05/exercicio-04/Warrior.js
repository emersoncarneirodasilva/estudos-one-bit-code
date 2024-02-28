import { Character } from "./Character.js";

export class Warrior extends Character {
  constructor(name, hp, atk, def, shild, offensive = true) {
    super(name, hp, atk, def);
    this.shild = shild;
    this.offensive = offensive;
  }

  attack(oponent) {
    if (this.offensive) {
      super.attack(oponent); // Mesmo que: oponent.hp -= this.atk - oponent.def;
    }
  }

  switch() {
    if (this.offensive) {
      this.offensive = false;
      this.def += this.shild;
    } else {
      this.offensive = true;
      this.def -= this.shild;
    }
  }
}
