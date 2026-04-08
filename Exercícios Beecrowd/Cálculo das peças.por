programa {
  funcao inicio() {
    
    inteiro codigoDaPeca1, codigoDaPeca2, numeroDePecas1, numeroDePecas2
    real precoDaPeca1, precoDaPeca2

    escreva("Código das peças 1 e 2 respectivamente: ")
    leia(codigoDaPeca1)
    leia(codigoDaPeca2)
    escreva("Quantia de peças 1 e 2 respectivamente: ")
    leia(numeroDePecas1)
    leia(numeroDePecas2)
    escreva("Valor da peça 1 e 2 respectivamente: ")
    leia(precoDaPeca1)
    leia(precoDaPeca2)

    real precoTotal = (numeroDePecas1 * precoDaPeca1) + (numeroDePecas2 * precoDaPeca2)

    escreva("----------------------\nCodigo da peça, numero de peças, valor de cada peça:\n")
    escreva(codigoDaPeca1, " ", numeroDePecas1, " ", precoDaPeca1, "\n")
    escreva(codigoDaPeca2, " ", numeroDePecas2, " ", precoDaPeca2)
    escreva("\nCusto total das peças: R$ ", precoTotal)

  }
}
