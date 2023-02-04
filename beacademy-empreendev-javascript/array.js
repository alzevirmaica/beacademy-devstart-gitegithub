//Manipulando String e Arrays
/*
 Separando um texto que contém espaços, em um novo array onde cada texto é uma posição de array.
*/

// let newPhrase = "fala meus queridos e queridas !"
// console.log(newPhrase)
// let phraseToArray = newPhrase.split(' ')
// console.log(phraseToArray)

//Convertendo novamente um texto para string
//.join(" ") -> Permite que eu gere separações (- , _ / '')

// let phraseModify = phraseToArray.join(" ").toLowerCase()
// console.log(phraseModify)

//Verificar se contém palavras ou letras

// let stringInclude = "Veem ne mim Paylivre, pay pay!"
// console.log(stringInclude.includes("Paylivre"))

//Objetos

// let arrayInclude = [
//     "Paylivre",
//     "Veem",
//     "ne mim",
//     "Meu amor",
//     {
//         firstName: "Pay",
//         lastName: "Livre"
//     }
// ]

// console.log(arrayInclude.includes("Meu amor"))

//String startsWith
// console.log(stringInclude.startsWith("ve"))
//String endsWith
// console.log(stringInclude.endsWith("ve"))

//Transformando um Array em caracteres
let wordToArray = "Quem está gostando diz Hey!!"

console.log(Array.from(wordToArray))