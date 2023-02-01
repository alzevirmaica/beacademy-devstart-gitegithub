/*
    Anatomia Function

    function myFunction () {
        //My code
    }

*/

// // Exemplo 1
//          //Metódo
// function myFristFunction () {
//     //Entra o meu código
//     console.log("Olha a minha função!!")
// }

// //Executar
// myFristFunction()

// // Função com parâmetros e argumentos
// //  parâmetros
// function sum(number1, number2) {
    
//     console.log(number1 + number2)
// }

// sum(32, 24) // Argumentos


// // Função com Return
// function myFirstFunctionWithReturn (num1, num2) {
//     let total = num1 + num2
//     return total
// }


// console.log(myFirstFunctionWithReturn(20, 20))



// // Restaurante
// function meuPratoDeComida(comida1, comida2, comida3, comida4) {
//     return `Meu prato de comida é ${comida1}, ${comida2}, ${comida3}, ${comida4}`
// }

// const prato = meuPratoDeComida('arroz', 'feijão', 'bife', 'batata frita')
// console.log(prato)

// //Arrow Function
// const myFirstArrowFunction = (n1, n2) => {
//     let total = n1 + n2
//     return total
// }

// const result = myFirstArrowFunction(20,20)
// console.log(result)

//Função anônima

// (function () {
//     console.log("Paylivre s2")
// }) () //Autoexecução

// setTimeout(function() { // atrasa o tempo para ser excecutado
//     console.log("Vou levar 3 segundos para ser executado!")
// },3000)//3s

//Parte 1

// let assunto

// function criarAssunto(assunto) {
//     return assunto
// }

// console.log(criarAssunto())

//parte 2

//  let assunto = 'Estudar' // var = valor

//  function criarAssunto(assunto) {
//      return assunto //
//  }
//  console.log(assunto) //resposta => estudar
//  console.log(criarAssunto(assunto)) // resposta=> estudar

 //parte 3

//  let assunto = 'Estudar' // var = valor

//  function criarAssunto(assunto) {
//      assunto = "Escutar música" // Mudança de valor
//      return assunto //
//  }
//  console.log(assunto) //resposta => estudar
//  console.log(criarAssunto(assunto)) // resposta=> Escutar música

 //parte 4

 
//  let assunto = 'Estudar' // var = valor

//  function criarAssunto() { //Sem parâmetro
//      assunto = "Escutar música" // Mudança de valor
//      return assunto //
//  }
//  console.log(assunto) //resposta => 'Estudar
//  console.log(criarAssunto(assunto)) // resposta=> 'Escutar música'

// Hoisting

// digaMinhaIdade()

// function digaMinhaIdade() {
//     return console.log(30)
// }

// callback

// function minhaFuncao (callback) {
//     console.log('Inicio da minha função =)')

//     callback(15, 15)

//     console.log('Final da minha função')
// }

// minhaFuncao(
//     (num1, num2) => {
//         return console.log(num1 + num2)
//     }
// )

// function construct

function Sum () {
    this.num1,
    this.num2,
    this.calc = function (num1, num2) {
        return total = num1 + num2
    }
}

// //
// const math = new Sum()
// const num1 = math.num1 = 24
// const num2 = math.num2 = 50

// console.log(num1)
// console.log(num2)
// console.log(math.calc(num1,num2))

// const math2 = new Sum()
// const number1 = math.num1 = 30
// const number2 = math.num2 = 10
// console.log(math.calc(number1, number2))

const math = new Sum().calc(45,45)
console.log(math)

const data = new Date().getDay()
console.log(data)