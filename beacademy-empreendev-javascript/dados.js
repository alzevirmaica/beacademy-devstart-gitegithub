// Type conversion

//Convertendo String para número e número para string

console.log(Number('9') + 24)
console.log(String(9) + 'Converteu diacho!!')
             

// Contar caracteres
let oneWord = "Moacir"//6 letras
console.log(oneWord.length) 

//Maiúsculas e Minúsculas
let phrase = "Olha o  bonde da PayLivre uauuuuuuuuuuu"
console.log(phrase.toUpperCase())
console.log(phrase.toLowerCase())

//convertendo para inteiro
let decimalNumber = 32.8
console.log(parseInt(decimalNumber))

// Convertendo para decimal
let integerNumber = 24
console.log(parseFloat(integerNumber))

//Trabalhar com casas decimais, números depois da virgula
let niceNumber = 24.98883484675463773
console.log(niceNumber.toFixed(4))

//Mudando ponto para virgula
console.log(niceNumber.toFixed(4).replace('.',','))

//Precisão Numérica
let otherNumber = 129/32
console.log(Number(otherNumber.toPrecision()))


