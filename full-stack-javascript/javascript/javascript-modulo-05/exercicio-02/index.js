// 1 - Crie uma aplicação javascript que simule um funcionamento básico de blog utilizando classes e associações.
// 2 - Você deverá criar uma classe Post e uma classe Comment, onde uma instância de Post poderá receber vários comentários.
//     As instâncias de Post também devem ter um método específico para adição de comentários nelas.
// 3 - Você também deverá criar uma classe Author, e os objetos da classe Post também devem possuir um objeto da classe Author,
//     que é o autor do post. Além disso, os objetos da classe Author também devem possuir um array de posts (objetos da classe Post)
//     e um método específico para criação de posts, que deverá criar uma instância utilizando aquele próprio autor, incluir o post no
//     array e então retornar o post criado.

const Author = require("./Author");

const john = new Author("John Doe");

const post = john.writePost("Título do Post", "Lorem ipsum dolor sic amet ...");

post.addComment("Isaac", "Muito bom!");
post.addComment("Lucas", "Achei interessante.");

console.log(john);
console.log(post);
