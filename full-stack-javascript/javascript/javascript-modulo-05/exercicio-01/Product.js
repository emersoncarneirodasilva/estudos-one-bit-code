// 1 - Um atributo name, atribuível na instanciação
// 2 - Um atributo description, atribuível na instanciação
// 3 - Um atributo price, atribuível na instanciação
// 4 - Um atributo inStock, inicializado sempre em 0
// 5 - Um método addToStock, que tem como parâmetro a quantidade a ser adicionada em estoque e deve somar
//     essa quantidade à variável inStock
// 6 - Um método calculateDiscount, que tem como parâmetro a percentagem de desconto a ser aplicada e retorne
//     o valor do preço com o desconto aplicado

class Product {
  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.discount = 0;
    this.priceWithDiscount = price;
    this.inStock = 0;
  }

  stock(quantity) {
    this.inStock += quantity;
  }

  calculateDiscount(percent) {
    const discount = (this.price * (percent / 100)).toFixed(2);
    this.discount = Number(discount);
    this.priceWithDiscount = this.price - discount;
  }
}

const tvLg = new Product(
  "TV LG",
  "Televisão de alta qualidade e moderna, com as mais novas funcionalidades do mercado",
  2599
);

tvLg.stock(15);
tvLg.calculateDiscount(10);

console.log(tvLg);

const celularXiaomi = new Product(
  "Xiaomi Redmi 13",
  "Celular com as mais novas funcionalidade tecnologicas, rápido e acessivel",
  2300
);

celularXiaomi.stock(10);
celularXiaomi.calculateDiscount(15);

console.log(celularXiaomi);

const mouseRapoo = new Product(
  "Mouse Rapoo",
  "Mouse com mais rápida precisão, moderno e bonito",
  45
);

mouseRapoo.stock(13);

console.log(mouseRapoo);
