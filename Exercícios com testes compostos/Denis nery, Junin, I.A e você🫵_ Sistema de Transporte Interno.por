programa {
  funcao inicio() {
    
    //Variáveis
    logico emManutencao, emergenciaAtiva
    
    //Input
    escreva("Há manutenões ativas? (verdadeiro / falso): ")
    leia(emManutencao)
    escreva("O parque está em mode emergencia? (verdadeiro / falso): ")
    leia(emergenciaAtiva)

    //Processar informações / Output
    se(emManutencao == falso ou emergenciaAtiva == falso){
      escreva("Transporte liberado para uso.")
    }senao{
      escreva("Transporte indisponível por motivo de segurança.")
    }

    
  }
}
