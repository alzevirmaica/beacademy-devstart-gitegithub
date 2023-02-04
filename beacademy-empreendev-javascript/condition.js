// if and else
// se e se não

// let num = 10
// let num2 = 20
// let isAdmin = true

// if(num >= 10) {
//     console.log('Sou maior')
// }else if(num >= 10 && num2 <= 20) {
//     console.log('Segunda resposta verdade')
// }else {
//     console.log('Resposta falsa')
// }

//Switch

// let myExpression = 'd'

// switch(myExpression) {
//     case 'a':
//         console.log("Apertou o A")
//         break
//     case 'b':
//         console.log("Apertou o B")
//         break
//     case 'c':
//         console.log("Apertou o c")
//         break
//     default:
//         console.log("Você apertou outra tecla", myExpression)
//         break
// }

//Calculadora
// function calc (num1,operador,num2){
//     let result

//     switch(operador) {
//         case "+":
//             result = num1 + num2
//             break  
//         case "-":
//             result = num1 - num2
//             break
//         case "*":
//             result = num1 * num2
//             break
//         case "/":
//             result = num1 / num2
//             break
//         default:
//             console.log("Não entendi")
//             break
//     }
//     return result
// }
// console.log(calc(8, "/", 2))


//Throw and try catch

//Saber a minha idade
function myAge(myage) {
    if(!myage) {
        throw "Você precisa colocar a idade"
    }
    console.log("Eu executei depois do erro!")
}
try {
    myAge(30)
    console.log("Já tratei e deu certo")
} catch(error) {
    console.log(error)
}

console.log('Programa continua')