/* 
     1 - Variáveis let e const 

    - Temos duas novas formas de declarar variáveis a partir do es6 que são let e const;
    - let é uma forma de atribuir valor, e poder modificar depois;
    - const declara uma constante, podemos atribuir um valor e não alterar;
    - O grande diferencial são os escopos em bloco

*/
// var x = 10
// var y = 15

// if(y > 10) {
//     var x = 5
//     console.log(x)
// }

// console.log(x)

// let a = 10
// let b = 15

// if(b > 10) {
//     let a = 5
//     console.log(a)
// }

// console.log(a)

// function logName() {
//     const name = "Alzevir"
//     console.log(name)
// }

// const name = "Matheus"

// logName(name)

/*
   2 - Arrow functions
   
   - As arrow funtions são um recurso para criar funções de forma mais simples;
   - Alguns aspectos a diferenciam das funções comuns;
   - por exemplo o this, que é relacionado ao elemento pai de quem está executando
*/

// const sum = function(a, b) {
//     return a + b
// }

// const arrowSum = (a,b) => a + b

// console.log(sum(5,5))
// console.log(arrowSum(5,5))

// const greeting = (nome) => {
//     if(nome) {
//         return `Hello ${nome}!`
//     }else {
//         return `HEllo!`
//     }
// }

// console.log(greeting("Alzevir"))
// console.log(greeting())

// const user = {
//     nome: "Theo",
//     sayUserName() {
//         setTimeout(function() {
//             console.log(this)
//             console.log(`Username: ${this.nome}`)
//         }, 1000)
//     },
//     sayUserNameArrow() {
//         setTimeout(() => {
//             console.log(this)
//             console.log(`Username: ${this.nome}`)
//         }, 2000)
//     }
// }

// user.sayUserName()
// user.sayUserNameArrow()

/*
    3 - Filter

    - O filter é um método de array para filtrar dados
    - O filtro detrminado pos nós, por meio de uma função
    - Resultado em um array com apenas os elementos que precisamos
    - Nessas versões mais novas de js temos vários métodos de array importantes como este

*/

// const arr = [1,2,3,4,5,6]

// const highNumbers = arr.filter((n) => {
//     if(n >= 3) {
//         return n
//     }
// })

// console.log(highNumbers)

// const users = [
//     {nome: "Alzevir", available: true},
//     {nome: "Aline", available: false},
//     {nome: "Raphaela", available: true},
//     {nome: "Stella", available: false},
//     {nome: "Theo", available: true},
// ]

// const availableUsers = users.filter((user) => user.available)

// console.log(availableUsers)

/*
   4 - Map

   - Map também é um método de array, percorre todos os elementos do mesmo;
   - O map é utilizado para modificar o array de origem
   - filter remove elementos desnecessários, map altera os que precisamos

*/

// const products = [
//     {nome: "camisa", price: 10.99, category: "Roupas"},
//     {nome: "chaleira Elétrica", price:150 , category: "Eletro"},
//     {nome: "Fogão", price: 499, category: "Eletro"},
//     {nome: "calça Jeans", price: 87.99, category: "Roupas"}
// ]

// products.map((product) => {
//     if(product.category === "Roupas") {
//         product.onSale = true
//     }
// })

// console.log(products)

/*
    5 - Destructuring 
    -  O  destructuring desestrutura dados complexos em várias variáveis
    - Podemos utilizar em arrays e objetos
    - Muitas variáveis poodem ser criadas em uma única linha

*/
// const frutas = ["Maça", "Mamão", "Laranja"]

// const [f1, f2, f3] = frutas

// console.log(f1, f2, f3)

// const productDetails = {
//     nome:"mouse",
//     price: 39.99,
//     category: "períferico",
//     color: "Cinza"
// }

// const {nome: productName, price, category, color} = productDetails

// console.log(`O nome do produto é ${productName}, ele custa R$${price} e é da cor ${color}`)

// /*
//   6 - Classes

//   - As classes são recursos fundamentais para programar orientado a objetos
//   - Temos acesso a recursos importantes, como:
//   copsntructor, propriedades e métodos
//   - Antes as classes em js eram criadas com CONSTRUCTOR FUNCTIONS
// */
// class product {
//     constructor(name, price) {
//         this.name = name
//         this.price = price
//     }

//     productWithDiscount(discount) {
//         return this.price * ((100 - discount) / 100)
//     }
// }

// const shirt = new product("Camisa gla V", 20)
// console.log(shirt)

// console.log(shirt.productWithDiscount(10))
// console.log(shirt.productWithDiscount(15))

/*
  7 - Herança
  - HERANÇA é o recurso que nos dá possibilidade de uma classe herdar métodos e propriedades de outra
  - A palavra EXTENDS determina qual classe será herdada para enviar propriedades para  a classe pai      utilizamos SUPER, isso é necessário
*/

class productWithAttributes extends product {
    constructor(name, price, colors) {
       super(name, price)
       this.colors = colors 
    }

    showColors() {
        console.log("As cores são: ")
        this.colors.forEach((color) => {
            console.color(color);
        });
    }
}

const hat = new productWithAttributes("Chapéu", 29.99, [
    "preto", 
    "Amarelo", 
    "Verde",
])
console.log(hat)
console.log(hat.name)
hat.showColors()