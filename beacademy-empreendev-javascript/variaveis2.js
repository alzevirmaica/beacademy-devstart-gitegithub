//Declar objetos

const human = {
    name: "Alzevir Maicá",
    age: 38,
    weight: 84,
    isAthlete: true,
    walk: function walking() {
        console.log("Eu ando bastante!")
    }
} //objeto

//console.log({human}) // Printa todo o objeto
// console.log(human.name)
// console.log(human.walk())

// Concatenar: Unir variáveis
console.log("O humano " + human.name + " tem a idade de " + human.age + " anos.")

// Interpolação
console.log(`O humano ${human.name} tem a idade de ${human.age} anos.`)


// Array

const animals = [
    "Elefante", //0
    "Gato",//1
    "Leão",//2
    "Cachorro",//3
    {
       name: "Moacir",
       age: 2,
       weight: 4
    }
]
//Tamanho do array: 4
console.log(animals.length)
console.log(animals[4].name)

