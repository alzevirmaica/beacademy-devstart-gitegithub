Algoritmo "NomeIdade"

Var
    nome: CARACTERE;
    idade: INTEIRO;


Inicio
     escreva("Digite o seu nome: ")
     leia(nome)
     escreva("Digite sua idade: ")
     leia(idade)
     escreval("Verdadeiro se a idade é maior que 18: " , (idade>18))
     escreval("Falso se a idade for diferente de 25: " , (idade=25))
     escreval("Falso se a idade diferente que 25 E o nome é igual a Marcos: ", (idade=25)OU(nome="Marcos"))
     escreval("Verdadeiro se a idade é diferente que 25 Ou o nome é igual a Marcos ",(idade<>25)OU(nome="Marcos"))
     escreval("Idade divida por 2 é igual a ZERO: " ,((idade%2)=0))


Fimalgoritmo