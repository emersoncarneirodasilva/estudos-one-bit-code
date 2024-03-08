class Spaceship {
  private _name: string;
  protected captain: string;
  protected speed: number;

  get name() {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  constructor(name: string, captain: string) {
    this._name = name;
    this.captain = captain;
    this.speed = 0;
  }

  public accelerate(rate: number, time: number) {
    this.speed = rate * time;
  }
}

class Fighter extends Spaceship {
  weapons!: number;

  shoot() {
    for (let i = 0; i < this.weapons; i++) {
      console.log("Pew!");
    }
  }

  erase() {
    this.name = "";
    this.captain = "";
  }
}

let ship = new Spaceship("USS Enterprise", "James T. Kirk");

ship.accelerate(50, 10);
ship.name = "X-Wing";
ship.name = "123";
console.log(ship.name);

let combat = new Fighter("Alguma coisa", "Fulano");

combat.weapons = 10;
console.log(combat.shoot());
console.log(combat.erase());
