programa {
  funcao inicio() {

    //Variáveis
    real custoMensal, valorRecebido, valorFaltante

    //Input
    escreva("Informe o custo mensal da igreja: ")
    leia(custoMensal)
    escreva("Informe o valor recebido em doações para a igreja: ")
    leia(valorRecebido)
    
    //Processar informações / Output
    valorFaltante = custoMensal - valorRecebido

    se(valorRecebido < custoMensal){
      escreva("Meta de valor não atingida, precisa de mais doações")
      escreva("\nFaltam R$ ", valorFaltante, " para atingir a meta")
    }senao{
      escreva("Meta de valor atingida, a igreja não caiu dessa vez")
    }

  }
}
