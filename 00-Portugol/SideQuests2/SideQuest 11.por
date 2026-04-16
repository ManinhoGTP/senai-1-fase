programa {
  funcao inicio() {

    //variáveis
    real saldo
    real precoDoItem

    //Input
    escreva("Saldo bancario atual: ")
    leia(saldo)
    escreva("Valor do item a ser comprado: ")
    leia(precoDoItem)
    escreva("Output: \n-----------------\n")

    //Processar informações / Output
    se(precoDoItem <= saldo){
      escreva("O item pode ser comprado!")
    } senao{
      escreva("Saldo insuficiente! O item não pode ser comprado.")
    }

    }
  }
