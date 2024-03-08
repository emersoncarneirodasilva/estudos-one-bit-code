import { Spaceship } from "./spaceship";

interface BattleSpaceship extends Spaceship {
  weapons: number;
}

let xwing: BattleSpaceship = {
  name: "X-Wing",
  pilot: "Luke Skywalker",
  speed: 50,
  weapons: 4,
};

console.log(xwing);
