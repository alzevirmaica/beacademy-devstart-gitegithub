async function somarComDelay(a, b) {
    return a + b
}

somarComDelay(2, 4).then((value) => {
    console.log(`O valor da soma é ${value}`)
})

console.log("Teste async")