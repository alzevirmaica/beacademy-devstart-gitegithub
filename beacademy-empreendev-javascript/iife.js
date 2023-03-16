//Immediately invoked function expression ou IIFE
// (function helloWorld() {
//     alert('hello world!')
// }
// )()

// (function (message) {
//     alert(message)
// }
// )('Hello, World!')

//Arrow function

// function sum(a) {
//     return a + 10
// }

// const sum = a => a + 100
//  console.log(sum(3))

//Exemplo com map
const materiais = [
    'Hydrogem',
    'Heliun',
    'Lithiun',
    'Berylliun'
]

// const newArray = materiais.map(
// function showLength(materiais) {
//     return materiais.length
//     }
// )

const newArray = materiais.map(material => material.length)
console.log(newArray)