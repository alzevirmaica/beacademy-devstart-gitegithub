/*
             Prototype e herança sem uso de classes
    
    prototype é um objeto adicionado a uma função quando esta é criada.
    Dá acesso aos métodos e propriedades do protótipo do cosntrutor responsável 
    por criar este objeto.
    O prototype de um construtor permite que seus membros sejam compartilhados 
    por todas as instâncias. É o mesmo que dizer que as instâncias herdam os membros
    de uma função construtora.
    Assim, cada objeto concreto(Instância) vai ter seus próprios dados.
    Para manipular os dados conforme as regras de negócio, todas as instâncias
    terão acesso aos métodos do prototype.
*/
// function Pessoa(nome, idade) {
//     this.nome = nome;
//     this.idade = idade
// }

// const marcelo = new Pessoa('Marcelo', 44)
// const joao = new Pessoa('Joaão',40)
// console.log(marcelo)
// console.log(joao)
// console.log(Pessoa.prototype)


// const nome = 'Alzevir'
// console.log(nome.prototype)

const notebbok = {
    cor: 'preta',
    ano: '2022',
    especifications: function(value) {
        return `Este Macbook custa R$${value},00; cor ${this.cor}; ano${this.ano}`
    }
}

const dell = {
    marca: 'Dell'
}

const macBook = {
    marca: 'MacBook'
}

Object.setPrototypeOf(dell, notebbok)
Object.setPrototypeOf(macBook, notebbok)


console.log(macBook.especifications(8000))