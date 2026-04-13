programa {
  funcao inicio() {

    //Variáveis
    real navioGastoTotal, navioFaturamentoIngresso, navioFaturamentoItens, navioLucro, margemDeLucro

    //Input
    escreva("Informe o gasto total do navio: ")
    leia(navioGastoTotal)
    escreva("Informe o faturamento total do navio com ingressos: ")
    leia(navioFaturamentoIngresso)
    escreva("Informe o faturamento total do navio com itens: ")
    leia(navioFaturamentoItens)

    //Processar informações / Output
    navioLucro = navioFaturamentoIngresso + navioFaturamentoItens - navioGastoTotal
    margemDeLucro = navioLucro / (navioFaturamentoIngresso + navioFaturamentoItens)

    escreva("\nLucro obtido em reais: R$", navioLucro)
    escreva("\nLucro Percentual: ", margemDeLucro * 100, "%")

    se(navioFaturamentoIngresso > navioFaturamentoItens){
      escreva("\nCapitão ganso ganha mais dinheiro com a venda de ingressos!")
    }senao{
      escreva("\nCapitão ganso ganha mais dinheiro com a venda de Itens!")
    }


  }
}
