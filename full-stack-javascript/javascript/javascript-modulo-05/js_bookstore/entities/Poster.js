const Product = require("./Product");

class Poster extends Product {
  constructor(height, width, name, description, prince, inStock = 0) {
    super(name, description, price, inStock);
    this.height = height;
    this.width = width;
  }
}

module.exports = Poster;
