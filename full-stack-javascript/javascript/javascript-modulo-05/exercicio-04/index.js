import { Thief } from "./Thief.js";
import { Mage } from "./Mage.js";
import { Warrior } from "./Warrior.js";

const thiera = new Thief("Thiera", 1000, 400, 250);
const miral = new Mage("Miral", 850, 100, 150, 300);
const arbon = new Warrior("Arbon", 1200, 450, 100, 50, true);

console.table({ thiera, miral, arbon });

arbon.switch();
miral.attack(arbon);
console.table({ miral, arbon });

thiera.attack(miral);
console.table({ thiera, miral });

arbon.switch();
arbon.attack(thiera);
console.table({ thiera, arbon });

miral.cure(miral);

console.table({ thiera, miral, arbon });
