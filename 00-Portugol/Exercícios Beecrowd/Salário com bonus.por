programa {
  funcao inicio() {
    
    cadeia nomeVendedor
    real salarioFixo, totalEmVendas, valorTotalRecebido
    inteiro comissao = 15
    

    escreva("Nome do vendedor: ")
    leia(nomeVendedor)
    escreva("Salário fixo: ")
    leia(salarioFixo)
    escreva("Valor total em vendas: ")
    leia(totalEmVendas)

    real comissaoRecebida = (totalEmVendas * comissao) / 100
    valorTotalRecebido = comissaoRecebida + salarioFixo
    
    escreva("-------------------------", "\nNome: ", nomeVendedor, "\nSalário Fixo: R$", salarioFixo, "\nValor total em vendas: R$", totalEmVendas)
    escreva("\nValor total recebido (salário + 15% comissão em vendas): R$", valorTotalRecebido)

    

  }
}
