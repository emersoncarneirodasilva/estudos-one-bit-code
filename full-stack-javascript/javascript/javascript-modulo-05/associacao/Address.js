class Address {
  constructor(street, number, neighborhood, state, city) {
    this.street = street;
    this.number = number;
    this.neighborhood = neighborhood;
    this.state = state;
    this.city = city;
  }

  fullAddress() {
    return `Rua ${this.street}
    nº ${this.number}
    Bairro: ${this.neighborhood}
    Estado: ${this.state}
    Cidade: ${this.city}`;
  }
}

module.exports = Address;
