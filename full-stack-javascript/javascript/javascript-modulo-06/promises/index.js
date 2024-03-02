// const p = new Promise((resolve, reject) => {
//   console.log("A promise está sendo executada.");
//   setTimeout(() => {
//     if (true) {
//       reject("Promise rejeitada");
//     }
//     console.log("Resolvendo a promise...");
//     resolve("Promise resolvida");
//   }, 3 * 1000);
// });

// console.log(p);

// setTimeout(() => {
//   console.log(p);
// }, 4 * 1000);

function execute() {
  return new Promise((resolve, reject) => {
    console.log("Promise sendo executada...");

    setTimeout(() => console.log("Resolvendo a promise..."), 3 * 1000);
    resolve("Promise resolvida");
  });
}

const p = execute();

console.log(p);

setTimeout(() => console.log(p), 5 * 1000);
