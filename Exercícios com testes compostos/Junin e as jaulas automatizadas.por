programa {
  funcao inicio() {
    
    //Variáveis
    inteiro visitantesNaArea, horaAtual
    
    //Input
    escreva("Quantos visitantes há próximos da jaula? ")
    leia(visitantesNaArea)
    escreva("Qual é o horário atual?(0 a 23): ")
    leia(horaAtual)

    //Processar informações / Output
    
    se(visitantesNaArea > 0){
      escreva("Liberação negada. Área em uso ou fora do horário permitido.")
    }senao se(visitantesNaArea == 0){
      se(horaAtual > 18 ou horaAtual < 8){
        escreva("Liberação autorizada. Abrindo jaula.")
      }senao{
        escreva("Liberação negada. Área em uso ou fora do horário permitido.")
      }
    }


  }
}
