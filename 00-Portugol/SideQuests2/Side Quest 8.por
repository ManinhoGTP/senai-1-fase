programa {
  funcao inicio() {
    
    //Variáveis
    real numeroA, numeroB

    //Input
    escreva("Informe o primeiro número: ")
    leia(numeroA)
    escreva("Informe o segundo número: ")
    leia(numeroB)

    //Processar informações / Output
    se(numeroA > numeroB){
      escreva("O primeiro número é maior!")
    }senao se(numeroA < numeroB){
      escreva("O segundo número é maior!")
    }senao{
      escreva("Ambos os números possuem o mesmo valor!")
    }
    
  }
}
