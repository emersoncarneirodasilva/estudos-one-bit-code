const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/todo-list");
  console.log("Conectado ao MongoDB!");
}

// Forma desatualizada
// const mongoose = require("mongoose");
// mongoose.Promise = global.Promise;

// mongoose
//   .connect("mongodb://localhost:27017/todo-list", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("Conectado ao MongoDB"))
//   .catch((err) => console.log(err));
