Algoritmo "CalculoFiguraGeometrica"
//Card errado do vídeo

Var
   areaT, areaQ, base, altura: real;
   lado:real;
   perimetroQ, perimetroT : real;
   opcao: CARACTERE;
   resultado: real;
Inicio
   escreval("-----------Calculo da figura geométrica----------------")
   escreval("Digite Q se quer saber a área e o perímetro do quadrado")
   escreval("Digite T se quer saber a área e o perímetro do triângulo")
   escreval("--------------------------------------------------------")
   escreva("Digite sua opção: ")

   leia(opcao)
   escolha opcao
   caso "Q"
      escreval("Digite o comprimento do quadrado: ")
      leia(lado)
      //areaQ<-lado*2
      resultado := lado*2
   caso "T"
      escreval("Digite a base do triângulo ")
      leia(base)
      escreval("Digite a altura do triângulo ")
      leia(altura)
      areaT<-base*altura/2
      resultado =: areaT
   outrocaso
      resultado := -2
   fimescolha
Fimalgoritmo