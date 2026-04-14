programa {
  funcao inicio() {
    
    //Variáveis
    inteiro criancasPequenas
    real velocidadeVento
    
    //Input
    escreva("Há crianças perto da maquina? ")
    leia(criancasPequenas)
    escreva("Informe a velocidade do vento: ")
    leia(velocidadeVento)

    //Processar informações / Output
    se(velocidadeVento >= 0.5 e criancasPequenas == 0){
      escreva("Fumaça liberada. Que comecem os mistérios!")
    }senao{
      escreva("Fumaça bloqueada. Aguardar condições ideais.")
    }

  }
}
