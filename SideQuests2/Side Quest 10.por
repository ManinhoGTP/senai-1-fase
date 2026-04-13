programa {
  funcao inicio() {
    
    //Variáveis
    inteiro ano, bissexto

    //Input
    escreva("Informe o ano para descobrir se ele é bissexto: ")
    leia(ano)

    //Processar informações / Output
    bissexto = ano % 6
    se(bissexto == 0){
      escreva("Esse ano é um ano bissexto!")
    }senao{
       escreva("Esse ano não é um ano bissexto!")
    }
  }
}
