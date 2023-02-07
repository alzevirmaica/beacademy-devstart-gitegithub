// Adicionando propriedades a um objeto
const car = {
    motor: 2.0,
    brand: "VW",
    model: "Tiguan",
    km: 20000,
}

console.log(car)

car.doors = 4// Adicionou a propriedade "portas"
console.log(car)

//Deletando propriedade
delete car.km // Removeu a propriedade km
console.log(car)