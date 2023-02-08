const somaInfinita = (...args) => {

    let total = 0

    for(let i = 0; i < args.length; i++) {
        total += args[i]
    }
    return total
}


console.log(somaInfinita(1,2,3))

console.log(somaInfinita(1, 20 ,34, 128812, 12723))