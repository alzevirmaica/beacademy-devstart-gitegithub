Algoritmo "ImprimaRepitaInterrompa1a10"

Var
   i:inteiro;
Inicio
   i <- 1
   repita
      escreval(i)
      i <- i + 1
      se i=5 entao
         interrompa
         fimse
         ate i > 10
         escreval("Executando após um interrompa i= ", i)
Fimalgoritmo