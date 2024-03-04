async function asyncSum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return Promise.reject("arguments must be of type number");
  }
  return a + b;
}

// Sem o uso do wait
// async function execute() {
//   asyncSum(30, 12).then((result) => {
//     console.log(result);
//   });
// }

// Com o uso do wait
async function execute() {
  try {
    const result = await asyncSum(30, null);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

execute();
