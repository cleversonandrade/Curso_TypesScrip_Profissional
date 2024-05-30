"use strict";
class Carro {
    marca = null;
    modelo = null;
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
}
let c1 = new Carro('Honda', 'Civic');
console.log(c1.marca);
console.log(c1.modelo);
