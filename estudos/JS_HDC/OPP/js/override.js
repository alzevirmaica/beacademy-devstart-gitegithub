 //Override
 class Humano {
    constructor(nome, idade) {
        this.mome = nome
        this.idade = idade
    }
 }

 const alzevir = new Humano("Alzevir", 38)
 console.log(alzevir)
 

 Humano.prototype.idade = "Não definida"

 console.log(alzevir.idade)
 console.log(Humano.prototype.idade)