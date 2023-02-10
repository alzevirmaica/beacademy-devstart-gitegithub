const animal = {
    nome : "bob",
    latir: function() {
        console.log("Au Au")
    }
}

console.log(animal.nome)
animal.latir()

//Aprofundando em métodos
const pessoa = {
    nome : "Alzevir",

    getNome: function() {
        return this.nome
    },

    setNome: function(novoNome) {
        this.nome = novoNome
    },
}

console.log(pessoa.nome)
console.log(pessoa.getNome())

pessoa.setNome("Joaquin")
console.log(pessoa.getNome())