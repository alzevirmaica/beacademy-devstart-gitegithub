// Escopo da função
let y = 10

function testandoEscopo() {
    let y = 20
    console.log(`Y dentro da função é: ${y}`)
}

console.log(`Y fora da função é: ${y}`)
testandoEscopo()

//Escopo Aninhado (nested scope)
let m = 10

function escopoAninhado() {
    let m = 20

    if(true) {
        let m = 30

        if(true) {
            let m = 40

            console.log(m)
        }
        console.log(m)
    }
    console.log(m)
}

escopoAninhado()

console.log(m)