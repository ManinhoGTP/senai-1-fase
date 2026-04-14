programa {
  funcao inicio() {

    real notaA, notaB, notaC, pesoA, pesoB, pesoC

    escreva("Informe a primeira nota: ")
    leia(notaA)
    escreva("Informe o peso da primeira nota: ")
    leia(pesoA)
    escreva("Informe a segunda nota: ")
    leia(notaB)
    escreva("Informe o peso da segunda nota: ")
    leia(pesoB)
    escreva("Informe a terceira nota: ")
    leia(notaC)
    escreva("Informe o peso da terceira nota: ")
    leia(pesoC)

    real media = ((notaA * pesoA) + (notaB * pesoB) + (notaC * pesoC)) / (pesoA + pesoB + pesoC)

    
    escreva("\n--------------------\nMédia: ", media)

  }
}