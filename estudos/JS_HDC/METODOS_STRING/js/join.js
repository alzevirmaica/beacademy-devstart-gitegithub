const frase = "O rato roeu a roupa do rei de Roma"
const arrayDaFrase = frase.split(" ")

const fraseDenovo = arrayDaFrase.join(" ")
console.log(fraseDenovo)

const itensParaComprar = ["Mouse", "Teclado", "Monitor"]
const fraseDeCompra = `Precisamos comprar ${itensParaComprar.join(", ")}.`

console.log(fraseDeCompra)