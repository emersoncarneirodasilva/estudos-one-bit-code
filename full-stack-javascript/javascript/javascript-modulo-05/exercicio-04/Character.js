export class Character {
  constructor(name, hp, atk, def) {
    this.name = String(name);
    this.hp = Number(hp);
    this.atk = Number(atk);
    this.def = Number(def);
  }

  attack(oponent) {
    oponent.hp -= this.atk - oponent.def;
  }
}
