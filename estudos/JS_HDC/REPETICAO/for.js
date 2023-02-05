
// for(let t = 0; t < 10; t ++) {
//     console.log(`Repetindo algo...`)
// }

// let r = 10

// for (r; r > 0; r = r - 1) {
//     console.log(`O r está diminuindo: ${r}`)
// }

//Parando o loop
//Break
// for(let i = 20; i > 10; i --) {
//     console.log(`O valor de i é: ${i}`)

//     if(i===12) {
//         console.log(`O i é 12!`)
//         break
//     }
// }

// Continue
for(let i = 1; i < 10; i = i + 1) {
    //Operador de resto = %
    if(i % 2 === 0) {
        console.log(`Número par!`)
        continue
    }
    console.log(i)
}