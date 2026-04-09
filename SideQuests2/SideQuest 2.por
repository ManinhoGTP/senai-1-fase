programa {
  inclua  biblioteca Util --> u
  funcao inicio() {

      //Variáveis
      inteiro numeroAleatorio, numeroEscolhido

      //Input
      escreva("Bem vindo ao jogo de adivinhação. Escolha um numero entre 1 a 10 e veja se acertou: ")
      leia(numeroEscolhido)

      //Processar informações / Output
      numeroAleatorio = u.sorteia(1, 10)
      se(numeroAleatorio == numeroEscolhido){
        escreva("Parabéns!!! Você acertou o número sorteado")
      }senao{
        escreva("Infelizmente você errou, o número sorteado era ", numeroAleatorio)
      }

    }
  }