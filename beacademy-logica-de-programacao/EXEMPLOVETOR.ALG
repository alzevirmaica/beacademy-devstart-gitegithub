Algoritmo "ExemploVetor"

Var
   alunos: vetor [1..5] de caractere
   i: inteiro //índice do vetor

Inicio
   para i<-1 ate 5 faca // laço de cadastro
      escreva("Digite o nome do ", i, "° aluno: ")
      leia(alunos[i])
   fimpara
   para i<-1 ate 5 faca // laço de impressão
      escreval("nome do ", i , "° aluno ",alunos[i])
   fimpara



Fimalgoritmo