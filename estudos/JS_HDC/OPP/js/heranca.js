class Mamifero {
    constructor(patas) {
        this.patas = patas
    }
}

class lobo extends Mamifero {
    constructor(patas, nome) {
        super(patas, patas)
        this.nome = nome
    }
}

const shark = new lobo (4, "Shark")
console.log(shark)

