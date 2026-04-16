programa {
  funcao inicio() {

    //Variáveis
    real valorBruto, premios, suborno, comissoes, meta, valorTotal

    //Input
    escreva("Valor bruto recebido dos jogos de apostas: ")
    leia(valorBruto)
    escreva("Valor pago em premiassões: ")
    leia(premios)
    escreva("Valor gasto em 'Presentes' para as autoridades: ")
    leia(suborno)
    escreva("Valor gasto com comissões para os funcionários: ")
    leia(comissoes)
    escreva("E a meta de lucro: ")
    leia(meta)

    //Processar informações / Output
    valorTotal = valorBruto - premios - suborno - comissoes
    se(valorTotal < meta){
      escreva("Dona bete dessa vez não atingiu a meta de lucro. Faltou R$ ", meta - valorTotal, " para atingir a meta.")
    }senao{
      escreva("Dona bete faturou no total R$ ", valorTotal, " esse mês!")
    }
    
  }
}
