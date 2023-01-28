// Else if
if(1>2) {
    console.log("Teste!!")
}else if(2 > 3) {
    console.log("Teste 2!")
}else if(5 > 1) {
    console.log("Agora sim!")
}

const userName = "Alzevir"
const userAge = 38

if(userName === "José") {
    console.log("Bem vinso José!")
}else if(userName === "Alzevir" && userAge === 38) {
    console.log(`Olá ${userName}, você tem ${userAge} anos!`)
}else {
    console.log("Nenhuma condição aceita!")
}