Algoritmo "ExercicioImc2"
// Lógica de Programação
// Professor   :Marcos Monteiro

Var

   altura, peso, imc : REAL;


Inicio

   escreva("Digite a sua altura: ")
   leia(altura)
   escreva("Digite o seu peso: ")
   leia(peso)
   imc<-peso/(altura*altura)

   se(imc<19) entao
      escreval("IMC", imc, " Você está abaixo do peso")

   senao
      se(imc>=19)E(imc<25)entao
         escreval("IMC: " ,imc, " Você está com o peso normal")
      fimse


      se(imc>=25)E(imc<30) entao
         escreval("IMC: ",imc, " Você está com sobrepeso")

      senao
         se(imc>=30)E(imc<40) entao
            escreval("IMC", imc , "Você está com obesidade tipo I")

         senao
            se(imc>=40)entao
               escreval(imc ," Obesidade Mórbida")
            fimse
         fimse
      fimse


Fimalgoritmo


