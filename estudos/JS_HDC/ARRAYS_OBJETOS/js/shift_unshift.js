const letters = ["a", "b", "c"]

const letter = letters.shift() //Remove o primerio elemento do array
console.log(letter)
console.log(letters)

letters.unshift("p", "q","r")//Adiciona itens ao inicio do array
letters.unshift("z")
console.log(letters)