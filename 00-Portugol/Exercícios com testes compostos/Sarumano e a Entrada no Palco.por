programa {
  funcao inicio() {
    
    //Variáveis
    logico somFuncionando, figurinoCompleto
    
    //Input
    escreva("O som está funcionando? (verdadeiro / falso): ")
    leia(somFuncionando)
    escreva("O figurino está completo? (verdadeiro / falso): ")
    leia(figurinoCompleto)

    //Processar informações / Output
    
    se(somFuncionando == verdadeiro e figurinoCompleto == falso){
      escreva("Palco liberado para Sarumano! Luzes, câmera, ilusão!")
    }senao se(somFuncionando == falso e figurinoCompleto == falso){
      escreva("Sem som. Realizar apresentação alternativa no salão.")
    }senao{
      escreva("Apresentação cancelada. Hora da mágica de desaparecer…")
    }

  }
}
