function sendSpaceship(spaceship: { pilot: string; copilot?: string }) {
  // ....
}

sendSpaceship({ pilot: "Han Solo", copilot: "Chewbacca" });

sendSpaceship({ pilot: "Luke" });

// --------------------------------------------------

// Unknown
let input: unknown;
input = "Test";
input = 123;
input = [];

let text: string;
text = "Oi";
input = text;
// text = input;

// --------------------------------------------------

// Any
let input2: any;
input = "Test";
input = 123;
input = [];

let text2: string;
text2 = "Olá";
input2 = text2;
text2 = input2;

// --------------------------------------------------

// Never
function verification(test) {
  if (test) {
  } else {
    let _check: never;

    let text = _check;

    text = "";

    return _check;
  }
}
