//Classes baseadas em funções construtoras

function criarCachorro (nome,raca) {

    const cachorro = Object.create({})

    cachorro.nome = nome
    cachorro.raca = raca

    return cachorro

}

const bob = criarCachorro("bob", "vira Lata") 
console.log(bob)

const Jack = criarCachorro("Jack", "Poodle") 
console.log(Jack)
