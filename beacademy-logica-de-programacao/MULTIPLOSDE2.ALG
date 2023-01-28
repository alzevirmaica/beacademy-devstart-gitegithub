Algoritmo "MultiplosDe2"

Var
   i: inteiro;
   m: inteiro;


Inicio
   escreval("Multiplos de 2 ")
   para i de 0 ate 100 faca
      se((i%2)=0) entao
         se(i <> 100) entao
            escreva(i , ",")
         senao
            escreva(i)
         fimse
      fimse
   fimpara
Fimalgoritmo