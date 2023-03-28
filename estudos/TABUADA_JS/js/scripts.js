// Seleção dos elementos
const multiplicationForm = document.querySelector("#multiplication-form")
const numberInput = document.querySelector("#number")
const multiplicationInput = document.querySelector("#multiplicator")

const multiplicationTable = document.querySelector("#multiplication-operations")

const multiplicationTitle = document.querySelector("#multiplication-title span")

// Funções
const createTable = (number, multiplicatorNumber) => {

    multiplicationTable.innerHTML = ""   // Limpa o HTMl

    for (i = 1; i <= multiplicatorNumber; i++) {

        const result = number * i // operação da tabuada

        const template = `<div class="row">
           <div class="operation">${number} x ${i} = </div>
           <div class="result">${result}</div>
            </div>` // cria o template da tabuada

        const parser = new DOMParser()

        const htmlTemplate = parser.parseFromString(template, "text/html")

        const row = htmlTemplate.querySelector(".row")

        multiplicationTable.appendChild(row)
    }
    multiplicationTitle.innerText = number;
}

// Eventos
multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const multiplicationNumber = +numberInput.value //Pega os valores de um input

    const multiplicatorNumber = +multiplicationInput.value //pega os valores de outro input

    if (!multiplicationNumber || !multiplicatorNumber) return; // validação se os numeros foram digitados

    createTable(multiplicationNumber, multiplicatorNumber)
})