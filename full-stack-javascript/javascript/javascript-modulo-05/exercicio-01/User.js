// 1 - Um atributo fullname, atribuível na instanciação
// 2 - Um atributo email, atribuível na instanciação
// 3 - Um atributo password, atribuível na instanciação
// 4 - Um método login, que tem como parâmetros um email e uma senha e deve comparar esses
//     parâmetros com o email e a senha do usuário e mostrar uma mensagem no console dizendo
//     se o login foi bem sucedido ou não

class User {
  constructor(fullname, email, password) {
    this.fullname = fullname;
    this.email = email;
    this.password = password;
    this.hasAccess = false;
  }

  login(email, password) {
    if (this.email === email && this.password === password) {
      this.hasAccess = true;
      console.log("Acesso Permitido");
    } else {
      console.log("Acesso Negado!");
    }
  }
}

const emerson = new User(
  "Emerson Carneiro da Silva",
  "mersiocarneiro87@gmail.com",
  1234
);
emerson.login("mersiocarneiro87@gmail.com", 1234);

console.log(emerson);

const mario = new User("Mario Perreira Santos", "mario@gmail.com", 4321);
mario.login("mario@gmail.com", 1234);

console.log(mario);

const maria = new User("Maria das Graças", "maria@gmail.com", 1324);
maria.login("maria56@gmail.com", 1324);

console.log(maria);
