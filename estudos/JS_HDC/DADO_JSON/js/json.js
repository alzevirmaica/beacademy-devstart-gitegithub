const myJson = '{"name": "Alzevir", "age": 31, "skills": ["PHP", "JavaScript", "Python"]}'

console.log(myJson)
console.log(typeof myJson)

//JSON para objeto 

const myObject = JSON.parse(myJson)

console.log(myObject)

//Adicionando mais uma propriedade
myObject.isOpenToWork = true
console.log(myObject)

//Objeto para JSON
const myNewJson = JSON.stringify(myObject)
console.log(myNewJson)
