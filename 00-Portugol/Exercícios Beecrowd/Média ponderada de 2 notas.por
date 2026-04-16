programa {
  funcao inicio() {

    //formula = (Nota 1 * peso 1) + (Nota 2 * peso 2) / (peso 1 + peso 2)

    real notaA, notaB, pesoA, pesoB

    escreva("Nota 1: ")
    leia(notaA)
    escreva("Peso da nota 1: ")
    leia(pesoA)
    escreva("Nota 2: ")
    leia(notaB)
    escreva("Peso da nota 2: ")
    leia(pesoB)

    real media = (notaA * pesoA) + (notaB * pesoB) / (pesoA + pesoB)
    
    escreva("\n--------------------\nMédia: ", media)



  }
}
