class Order {
  #total;
  #items;
  #user;

  constructor(items, user) {
    items.forEach(({ product, quantity }) => {
      // Foi feita a destruturação do item em product e quantity
      if (quantity > product.inStock) {
        throw new Error("Quantidade insuficiente em estoque!");
      }
    });
    this.#items = items;
    this.#user = user;
    this.#total = items.reduce(
      (accu, { product, quantity }) => accu + product.price * quantity,
      0
    );
  }

  get data() {
    return { items: this.#items, user: this.#user, total: this.#total };
  }
}

module.exports = Order;
