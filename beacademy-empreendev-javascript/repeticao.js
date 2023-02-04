// for
// for (inicio; condição; iteração)
// for(let i = 1; i<=10; i++){
// console.log(i)
// }

// for(let i = 10; i>=1; i--){
// console.log(i)
// }

// for(let i = 1; i <= 10; i++) {
//     if(i==5) {
//         //break
//         continue
//     }
//     console.log(i)
// }


//While(enquanto)
// let interator = 1
// while(interator <=20) {
//     console.log(interator)


//     //incremento
//     interator++
// }



//for of
//Arrray

// let number = ['Maria','Pedro','João','Jenifer','Luan']

// for(num of number) {
//     //num = numbers (FOR OF)
//     //FOR OF (valores dentro do array)
   
//         console.log(num)
// }

//for in
// let animals = {
//     name: 'leão',
//     weight: 200,
//     age: 4
// }

// for(item in animals) {
//     //Tipo 1 para capturar valores de objeto em um for in
//     console.log(animals["age"])
//     //Tipo 2 para capturar todo o objeto
//     console.log(animals)
//     //Tipo 3 mostra os valores dentro das propriedades
//     console.log(animals[item])
//     //Tipo 4 capturar valores individuais das propriedades de um objeto
//     console.log(animals.name)
// }

let arrayName = [
    'Pedro',
    'João',
    'Jenifer',
    'Luan'
]

for(item in arrayName) {
    // console.log(arrayName)//Mostra todo o array
    // console.log(arrayName[item])//mostra todos os valores
    // console.log(arrayName[2])//mostrar diretamente um vetor
    console.log(item)//index dos vetores(posições)
}