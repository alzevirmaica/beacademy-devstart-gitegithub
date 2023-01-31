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