const obj = {
    a: "teste",
    b: true,
}

console.log(obj instanceof Object) // Objeto é filho de uma classe

const obj2 = {
    c: []
}

Object.assign(obj2, obj)
console.log(obj2)