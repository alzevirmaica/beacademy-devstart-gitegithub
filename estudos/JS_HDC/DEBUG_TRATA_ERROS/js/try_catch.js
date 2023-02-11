try {
    const soma = X + y
}catch(error) {
    console.log(`Erro no programa: ${error}`)
}

//finally
try {
    const value = checkNumber("asd")

    if(!value) {
        throw new Error("Valores inválidos")
    }
}catch(error) {
    console.log(`Opa, aconteceu um problema: ${error}`)
}finally {
    console.log("O código foi executado!")
}

