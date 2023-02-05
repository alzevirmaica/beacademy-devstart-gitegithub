// const multiplication = function(m, n) {

//     if(n === undefined) {
//         return m * 2
//     }else {
//         return m * n
//     }
// }

// console.log(multiplication(5))

// console.log(multiplication(2, 4))


// const greeting = (nome) => {

//     if(!nome) {
//         console.log("Olá")
//         return
//     }
//     console.log(`Olá ${nome}`)
// }

// greeting()
// greeting("ALzevir")


//Valor default
const customGreeting = (nome, greet = "Olá") => {
    return `${greet}, ${nome}!`
}

console.log(customGreeting("Alzevir"))

console.log(customGreeting("João", "Bom dia"))


const repeatText = (text, repeat = 2) => {
    for(let i = 0; i < repeat; i ++) {
        console.log(text)
    }
}

repeatText("testando")
repeatText("Agora repete 5 vezes", 5)