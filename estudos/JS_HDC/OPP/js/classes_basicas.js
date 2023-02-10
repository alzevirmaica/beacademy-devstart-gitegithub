const cachorro = {
    raca: null,
    patas: 4,
}

// criando o objeto a partir do cachorro
const pastorAlemao = Object.create(cachorro) 

pastorAlemao.raca = "Pator Alemão"
console.log(pastorAlemao)

console.log(pastorAlemao.patas)

const bulldog = Object.create(cachorro)

bulldog.raca ="Bulldog"

console.log(bulldog)