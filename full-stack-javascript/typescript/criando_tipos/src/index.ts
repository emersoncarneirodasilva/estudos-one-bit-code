// Literal Type
let literal: "Hello, World!";
let pi: 3.14159;

literal = "Hello, World!";
// literal = "Hi, World!";

pi = 3.14159;
// pi = 3;

// -------------------------------------------------------------
// Union Type
let option: string | number;

option = 1;
option = "1";
// option = false;

// -------------------------------------------------------------
// Alias
type Planet =
  | "Mercúrio"
  | "Vênus"
  | "Terra"
  | "Marte"
  | "Júpiter"
  | "Saturno"
  | "Urano"
  | "Netuno"
  | "Plutão";

let planet: Planet;

let homePlanet: Planet;

function checkPlanet(planet: Planet) {
  if (planet === "Terra") {
    console.log("Estamos na Terra");
  }
}

// Alias type function
type GreetingCallback = (name: string) => void;

function greet(callbackFunction: GreetingCallback) {
  const name = "Mario";
  callbackFunction(name);
}
