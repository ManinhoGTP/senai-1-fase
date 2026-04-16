programa {
  funcao inicio() {

    //Variáveis
    inteiro idade, idadeParaVotar = 16

    //Input
    escreva("Informe sua idade atual: ")
    leia(idade)

    //Processar informações / Output
    se(idade >= idadeParaVotar){
      escreva("Idade minima para voto: ", idadeParaVotar, " |  Sua idade: ", idade)
      escreva("\nVocê está apto para votar!")
    } senao{
      escreva("Idade minima para voto: ", idadeParaVotar, " |  Sua idade: ", idade)
      escreva("\nVocê é muito novo para votar! você não possui a idade minima para votar.")
    }

    }
  }