class Property {
  constructor(area, price) {
    this.area = area;
    this.price = price;
  }

  getPricePerSquareMeter() {
    return this.price / this.area;
  }
}

class House extends Property {}

class Apartment extends Property {
  constructor(number, area, price) {
    super(area, price);
    this.number = number;
  }

  getFloor() {
    if (this.number < 100) {
      return 0;
    } else {
      const numberApt = String(this.number);
      return numberApt.slice(0, -2);
    }
  }
}

const land = new Property(200, 50000);

const someHouse = new House(120, 200000);

const apt = new Apartment(20, 50, 250000);

console.log(land);
console.log(land.getPricePerSquareMeter().toFixed(2));

console.log(someHouse);
console.log(someHouse.getPricePerSquareMeter().toFixed(2));

console.log(apt);
console.log(apt.getPricePerSquareMeter().toFixed(2));
console.log(apt.getFloor());
