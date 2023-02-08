const userDetails = {
    firstName: "Alzevir",
    lastName: "Maicá",
    job: "Programador"
}

const {firstName, lastName, job} = userDetails
console.log(firstName, lastName, job)

//Renomear as variáveis
const {firstName: primeiroNome} = userDetails
console.log(firstName)
