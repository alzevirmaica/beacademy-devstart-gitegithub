Algoritmo "ExemploMatrizNomeNotas"

Var
   alunos: vetor [1..3] de caractere
   notas: vetor [1..3, 1..2] de real  //Vetor[linhas, colunas ]
   l, c: inteiro // índice 1 para linhas e colunas


Inicio
   para l<-1 ate 3 faca // laço de cadastro das linhas
      escreva("Digite o nome do ", l , "° aluno: ")
      leia(alunos[l])
      para c<-1 ate 2 faca // laço de cadastro das colunas
         escreva("Digite a ", c, "ª nota do ", l , "° aluno: ")
         leia(notas[l,c ])
      fimpara
   fimpara
   escreval
   //Imprimindo a matriz
   escreval("Dados dos alunos:")
   para l<-1 ate 3 faca // laço das linhas
      escreva("Nome do ", l , "º aluno: " , alunos[l])
      para c<-1 ate 2 faca // laço das colunas
         escreva(c, "ªnota: ", notas[l, c])
      fimpara
      escreval
   fimpara
Fimalgoritmo