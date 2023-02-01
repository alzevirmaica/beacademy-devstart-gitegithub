/*
    Anatomia Function

    function myFunction () {
        //My code
    }

*/

// Exemplo 1
         //Metódo
function myFristFunction () {
    //Entra o meu código
    console.log("Olha a minha função!!")
}

//Executar
myFristFunction()

// Função com parâmetros e argumentos
//  parâmetros
function sum(number1, number2) {
    
    console.log(number1 + number2)
}

sum(32, 24) // Argumentos


// Função com Return
function myFirstFunctionWithReturn (num1, num2) {
    let total = num1 + num2
    return total
}


console.log(myFirstFunctionWithReturn(20, 20))



// Restaurante
function meuPratoDeComida(comida1, comida2, comida3, comida4) {
    return `Meu prato de comida é ${comida1}, ${comida2}, ${comida3}, ${comida4}`
}

const prato = meuPratoDeComida('arroz', 'feijão', 'bife', 'batata frita')
console.log(prato)

//Arrow Function
const myFirstArrowFunction = (n1, n2) => {
    let total = n1 + n2
    return total
}

const result = myFirstArrowFunction(20,20)
console.log(result)