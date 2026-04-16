programa {
  funcao inicio() {
    
    //Variáveis
    logico estaGripado
    inteiro tempoViagem
    
    //Input
    escreva("Sarumano está gripado? ")
    leia(estaGripado)
    escreva("Informe o tempo de viagem: ")
    leia(tempoViagem)

    //Processar informações / Output
    se(estaGripado == falso e tempoViagem <= 45){
      escreva("Viagem autorizada. Rumo ao show!")
    }senao{
      escreva("Deslocamento inviável. Melhor recusar este evento.")
    }

  }
}
