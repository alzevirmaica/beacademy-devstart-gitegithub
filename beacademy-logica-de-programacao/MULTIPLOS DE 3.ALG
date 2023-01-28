Algoritmo "Multiplos de 3"

Var
   n1, n2, i: inteiro;


Inicio
   escreval("----Números mùltiplos de 3---")
   escreval("Digite um número")
   leia(n1)
   escreval("Digite um segundo número")
   leia(n2)
   para i de n1 ate n2 faca
      se((i%3)=0) entao
         se(i <> n2) entao
            escreval(i, ",")
         senao
            escreval(i)
         fimse
      fimse

   fimpara


Fimalgoritmo