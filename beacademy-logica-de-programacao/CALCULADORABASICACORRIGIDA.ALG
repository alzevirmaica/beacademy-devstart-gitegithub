Algoritmo "CalculadoraBasicaCorrigida"
// Lógica de Programação 
// Professor   :Marcos Monteiro 
Var
   numero1, numero2 : REAL;
   operacao: CARACTERE;
   resultado: REAL;

Inicio
   escreva("Digite o primeiro número: ")
   leia(numero1)
   escreva("Digite a operação: ")
   leia(operacao)
   escreva("Digite o segundo número: ")
   leia(numero2)
   escolha operacao
   caso "+"
      resultado := numero1 + numero2
   caso "-"
      resultado := numero1 - numero2
   outrocaso
      resultado := -1
   fimescolha
   se (resultado=-1) entao
      escreva("Operação Inválida! Escolha + ou - ")
   senao
      escreva("Resultado: ", resultado)
   fimse
Fimalgoritmo