Algoritmo "NommeSenha"
// Lógica de Programação
// Professor   :Marcos Monteiro

Var
   nome, senha: caractere;
   cont, loop: inteiro;
Inicio
   cont <- 0
   loop <- 1


   enquanto loop=1 faca
      escreval("Digite o seu nome: ")
      leia(nome)
      escreval("Digite a sua senha: ")
      leia(senha)
      cont <- cont + 1
   fimenquanto
   se(nome = "Alzevir") entao
         se(senha = "Maica") entao
            escreval("Bem Vindo", nome,"!!")
            senao
            escreval("ERRO!! Digite seus dados novamente")
            leia(loop)
         fimse
      fimse

Fimalgoritmo