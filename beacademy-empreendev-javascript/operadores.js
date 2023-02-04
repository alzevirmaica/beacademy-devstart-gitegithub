// Operadores lógicos


//Operador de incremento e decremento
// ++ --
// let incrementNumber = 4
// console.log(incrementNumber)
// // + 1
// incrementNumber++//5
// console.log(incrementNumber)
// ++incrementNumber//6 recebeu mais 1
// console.log(incrementNumber)

// let decrementNumber = 50
// console.log(decrementNumber)
// decrementNumber-- //49
// console.log(decrementNumber)
// decrementNumber-- //48
// console.log(decrementNumber)


//Operadores Aritméticos
// + - / * %
// let note1 = 10
// let note2 = 5.5
// let note3 = 9
// let note4 = 3.5
// let avg = (note1+note2+note3+note4) / 4
// console.log(Number(avg.toFixed(2)))


//Operadores Relacionais e Igualdade
// < > = === != !== >= <=
let numberRelation1 = 20
let numberRelation2 = 40

let relation = numberRelation1 != numberRelation2 //Diferente no valor
console.log(relation)

 relation = numberRelation1 !== numberRelation2 //diferente no valor e no tipo
 console.log(relation)

 relation = numberRelation1 == numberRelation2 //Igual no valor
 console.log(relation)

 relation = numberRelation1 === numberRelation2// Igual no valor e no tipo
 console.log(relation)


 //Operador de atribuição
 let newNumber = 20
 newNumber += 40
 newNumber *= 3
 newNumber -= 60
 newNumber /= 6
 newNumber %= 5
 console.log(newNumber)

 //Operadores condicionais (Ternário)
 //(condicion)? true : false

 let value = 24
 let value2 = 32

 const newcondicon = value >= value2 ? 'Isso é verdade': value <= value2? 'Isso é verdade, segundo resposta true': 'Resposta false para tudo!!'
 
 console.log(newcondicon)




