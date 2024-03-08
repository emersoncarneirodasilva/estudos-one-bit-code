"use strict";
class Spaceship {
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    constructor(name, captain) {
        this._name = name;
        this.captain = captain;
        this.speed = 0;
    }
    accelerate(rate, time) {
        this.speed = rate * time;
    }
}
class Fighter extends Spaceship {
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
