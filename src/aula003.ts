class Carro{
    marca = null;
    modelo = null;
    constructor(marca:any, modelo:any){
        this.marca = marca;
        this.modelo = modelo;
    }
}
let c1 = new Carro('Honda', 'Civic');
console.log(c1.marca);
console.log(c1.modelo);