const array = ["a", "b", "c"]

array.push("d")
console.log(array) // Adiciona no fim do array

console.log(array.length)

array.pop() // Remove um item do fim do array
console.log(array)

const itemRemovido = array.pop()
console.log(itemRemovido)
console.log(array)

array.push("z", "x", "y")//Pode adicionar vários elementos
console.log(array)