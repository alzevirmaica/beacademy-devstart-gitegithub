class Aviao {
    constructor(marca, turbinas) {
        this.marca = marca
        this.turbinas = turbinas
    }
}

const asas = Symbol()

Aviao.prototype[asas] = 2

const boeing = new Aviao("Boeing", 10)
console.log(boeing)

console.log(boeing[asas])