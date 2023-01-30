Algoritmo "ProdutoPreço"


Var
   produto: vetor [1..10] de caractere
   preco: vetor [1..10] de real
   i: inteiro // índice vetor


Inicio
   para i<-1 ate 10 faca // laço de cadastro
      escreva("Digite o nome do ", i , "° produto: ")
      leia(produto[i])
      escreva("Digite o preço do ", i , "° produto : ")
      leia(preco[i])
   fimpara
   para i<-1 ate 10 faca // laço de impressão
      escreval(produto[i], " custa: R$ ", preco[i])
   fimpara


Fimalgoritmo