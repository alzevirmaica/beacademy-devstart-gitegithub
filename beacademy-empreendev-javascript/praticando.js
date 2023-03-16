/*
    1.Declare uma variável de nome person
*/
var person = 

// 2. Que tipo de dado é a variável acima?
  // resposta: undefined
  console.log(typeof person)

/*
    3.Declare uma variável e atribua valores para cada um dos dados:
    * name: string
    * age: Number (integer)
    * weight: Number (float)
    * isAdmin: Boolean
    * isAMan: Boolean
*/

person = {
    name: "Alzevir Maicá",
    age: 38,
    weigth: 89,
    isAdmin: false,
    isAMan: true
}
console.log(person)

/*
    4. A variável human abaixo é de que tipo de dados?
       resp: Objeto.
    
        4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

    4.2 mostre no console a seguinte mensagem:
        O humano <name> tem o peso <weight> Kg.
*/
let human = {
    name: "Alzevir Maicá",
    age: 38,
    weight: 89.5,
    isAdmin: false,
    isAMan: true
}

console.log(`O humano ${human.name} tem o peso ${human.weight}Kg.`)

/*
    5. Declare uma variável do tipo array, de nome humans e atribua a ela nenhum valor, ou seja, somente o Array vazio.
*/

let humans = [
    human,
    newHuman
    
]
console.log(humans)


/*
    6.Reatribua valor para a variável acima, colocando dentro dela o objeto human da questão 4.

    7.coloque no console o valor zero do array acima
*/
console.log(human[0])

/*
    8. Crie um novo objeto human e coloque na posição 1 do array humans
*/

let newHuman = {
    name: "Stella",
    age: 19,
    weight: 60.5,
    isAdmin: false,
    isAMan: false
}



// 9. Sem rodar o código responda o resultado da saída abaixo.

// a)
console.log(a)
var a = 1 
// resposta: undefined

// b)
let = a
console.log(a)
{
    let a = 2
    console.log(a)
}
console.log(a)
//resposta: undefined, 2 , undefined

// c)
console.log(b)
{
    let b = 3
    console.log(b)
}
console.log(b)
//resposta:Variável b não existe

//d)
const c = 10
{
    console.log(c)
    const c = 20
    console.log(c)
}
//resposta: erro
