class Vehicle {
  move() {
    console.log("O veículo está se movendo!");
  }
}

class Car extends Vehicle {
  move() {
    console.log("O carro está se movendo!");
  }
}

class Ship extends Vehicle {
  move() {
    console.log("O navio está navegando!");
  }
}

class Aircrafit extends Vehicle {
  move(speed) {
    console.log(`A aeronave está voando a ${speed} km/h`);
  }
}

const delorean = new Car();
const blackPear = new Ship();
const epoch = new Aircrafit();

delorean.move();
blackPear.move();
epoch.move(450);

const start = (vehicle) => {
  console.log(`Dando partida
  ...`);
  vehicle.move();
};

start(delorean);
start(blackPear);
start(epoch);
