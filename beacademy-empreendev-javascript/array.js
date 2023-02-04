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
// let wordToArray = "Quem está gostando diz Hey!!"

// console.log(Array.from(wordToArray))

// Manipulando Arrays
const animals = ["Elefante", "cachorro", "Galinha", "leão", "gato"]
// console.log(animals)

//4 posições no array
// 5 no length

// Adicionar item no fim do array
// console.log(animals.push("rato"))
// console.log(animals)

//Adicionar item no começo
// console.log(animals.unshift("porco"))
// console.log(animals)

//Remover itens do fim 
// console.log(animals.pop())
// console.log(animals)

//Remover item do começo
// console.log(animals.shift())
// console.log(animals)

//Pegar somente alguns elementos do array
//Não modifica o array
// console.log(animals.slice(0,3))
// console.log(animals)

//Remover um ou mais itens do array
// animals.splice(1,3)
// console.log(animals)

console.log(animals)
//Encontrar a posição do array
let index = animals.indexOf('cachorro')
console.log(index)
animals.splice(index,1)
console.log(animals)