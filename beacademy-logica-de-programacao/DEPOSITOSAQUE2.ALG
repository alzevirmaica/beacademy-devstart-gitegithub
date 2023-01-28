Algoritmo "depositoSaque2"

Var
    saldoInicial, saldoFinalSaque, saldoFinalDeposito, deposito, saque: REAL;
    opcao: Inteiro;

Inicio
      escreva("Digite o seu saldo atual: R$")
      leia(saldoInicial)
      escreval("---------------------")
      escreval("Digite 1 para deposito")
      escreval("Digite 2 para saque")
      escreval("---------------------")
      escreval("Digite sua opção: ")
      leia(opcao)


      se(opcao=1) entao
      escreval("Você escolheu depósito")
      escreval("Digite o valor a ser depositado: R$")
      leia(deposito)
      saldoFinalDeposito<-saldoInicial+deposito
      escreval("O valor inical era de: R$",saldoInicial, " com o deposito no valor de R$",deposito, " O seu saldoatual é de R$:",saldoFinalDeposito)
      senao
      escreval("Você escolheu saque")
      escreval("Digite o valor a ser sacado: R$")
      leia(saque)
      saldoFinalSaque<-saldoInicial-saque
      escreval("O valor incial era de: R$",saldoInicial, " Com o saque no valor de R$",saque, " O seu saldo atual é de R$:",saldofinalSaque)
      fimse


Fimalgoritmo