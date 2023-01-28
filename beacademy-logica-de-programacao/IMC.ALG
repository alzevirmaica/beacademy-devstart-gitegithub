Algoritmo "IMC"

Var nome: caractere;
    altura, peso, imc: REAl;



Inicio
         escreva("Digite o seu Nome: ")
         leia(nome)
         escreva("Digite a altura: ")
         leia(altura)
         escreva("Digite o peso: ")
         leia(peso)
         escreva
         
         // Fórmula imc
         imc <-peso/(altura*altura);
         
         escreva("Nome: " ,nome, "Altura: " , altura, "Peso: ", peso)
         escreva("IMC: ", imc)


Fimalgoritmo