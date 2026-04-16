programa {
  funcao inicio() {
    
    //Variáveis
    logico crachaValido, digitalReconhecida
    
    //Input
    escreva("O cracha foi validado?(verdadeiro / falso): ")
    leia(crachaValido)
    escreva("A digital foi reconhecida?(verdadeiro / falso): ")
    leia(digitalReconhecida)

    //Processar informações / Output
    
    se(crachaValido == verdadeiro e digitalReconhecida == verdadeiro){
      escreva("Acesso liberado ao Centro de Comando")
    }senao se(crachaValido == falso e digitalReconhecida == verdadeiro){
      escreva("Crachá inválido. Dirija-se à recepção")
    }senao se(crachaValido == verdadeiro e digitalReconhecida == falso){
      escreva("Falha na digital. Tente novamente ou chame o suporte")
    }senao{
      escreva("Acesso negado. Verifique sua identificação.")
    }


  }
}
