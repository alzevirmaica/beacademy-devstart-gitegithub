Algoritmo "4operações"

Var
   cont:inteiro;
   loop:inteiro;
   n1, n2: inteiro;


Inicio
   cont <- 0
   loop <- 1

   enquanto loop=1 faca
      escreval("Digite um número")
      leia(n1)
      escreval("Digite Outro número")
      leia(n2)
      escreval
      escreval("Soma: ", n1 + n2)
      escreval("Subtração: ", n1 - n2)
      escreval("Divisão: ", n1 / n2)
      escreval("Multiplicação: ",n1 * n2)
      cont <- cont + 1
      escreval
      escreval("Deseja fazer nova operação?")
      escreval("Digite 1-Sim ou 2-Não")
      leia(loop)
   fimenquanto

   escreval("TENHA UM BOM DIA!!")

Fimalgoritmo