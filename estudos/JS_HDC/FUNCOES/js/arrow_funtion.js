const testeArrow = () => {
    console.log("Esta é uma arrow function")
}

testeArrow()

const parOuImpar = (n) => {
    if(n % 2 === 0) {
        console.log("Par")
        return
    }
    console.log("Impar")
}
parOuImpar(5)
parOuImpar(10)

// Mais sobre arrow funtion
const raizQuadrada = (x) => {
    return x * x
}

console.log(raizQuadrada(4))

//Resumida
const raizQuadrada2 = (x) => x * x
console.log(raizQuadrada2(5))
console.log(raizQuadrada2(12))

const helloWord = () => console.log("Hello Word")
helloWord()