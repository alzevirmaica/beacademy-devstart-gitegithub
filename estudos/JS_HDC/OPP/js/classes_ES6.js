class CachorroClasse {
    constructor(nome, raca) {
        this.nome = nome
        this.raca = raca
    }
}


const jeff = new CachorroClasse("Jeff", " Labrador")

console.log(jeff)

console.log(Object.getPrototypeOf(jeff))

//Mais sobre classes
class Caminhao {
    constructor(eixos, cor){
        this.eixos = eixos
        this.cor = cor
    }

    descreverCaminhao() {
        console.log(`este caminhão tem ${this.eixos} eixos e é da cor ${this.cor}`)
    }
}

const scania = new Caminhao(6, "Vermelha")
console.log(scania)

scania.descreverCaminhao()