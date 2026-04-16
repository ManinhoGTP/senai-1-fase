programa {
  funcao inicio() {

    //Variáveis
    real precoPorPar, precoTotal
    inteiro paresTrocados

    //Input
    escreva("Informe o preço de cada para de calçado: ")
    leia(precoPorPar)
    escreva("Informe a quantia de pares a ser trocado: ")
    leia(paresTrocados)

    //Processar informações / Output
    precoTotal = paresTrocados * precoPorPar
    se(precoPorPar <= 0 ou paresTrocados <= 0){
      escreva("Erro, algum dos valores informados é menor ou igual a 0, impossivel prosseguir com o programa.")
    }senao se(paresTrocados > 100){
      escreva("Limite de pares por loja atingido! Por favor entre em contato diretamente com o fabricante.")
    }senao{
      escreva("Total de vales em trocas: ", precoTotal)
    }

  }
}
