Algoritmo "ExemplosSE" //Nome do programa

Var
   nome: CARACTERE;
   salario: REAL;


Inicio
      escreva("Digite o seu nome: ")
      leia(nome)
      escreva("Digite o seu salário: R$")
      leia(salario)
      se (salario>1200) entao
         escreval(nome, " seu salário é maior que o mínimo!!!")
      senao
        se (salario=1200) entao
           escreval(nome, " seu salário é igual ao do mínimo!!!")
      senao
         escreval(nome, " seu salário é menor que o salário mínimo!!!")
      fimse
      fimse fimse


Fimalgoritmo