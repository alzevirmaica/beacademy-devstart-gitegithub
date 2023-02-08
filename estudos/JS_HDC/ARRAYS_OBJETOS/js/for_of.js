const somaInfinita = (...args) => {
    let total = 0

    for(num of args) {
        total += num
    }
    return total
}

console.log(somaInfinita(1,4,6,9))