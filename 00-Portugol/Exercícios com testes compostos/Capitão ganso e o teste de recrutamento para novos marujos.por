programa {
  funcao inicio() {
    
    //Variáveis
    logico sabeNadar, temRecomendacao
    inteiro idade
    
    //Input
    escreva("O aspirante sabe nadar? (verdadeiro / falso): ")
    leia(sabeNadar)
    escreva("Informe a idade do aspirante a marujo: ")
    leia(idade)
    escreva("O aspirante possui recomendação de outro pirata? (verdadeiro / falso): ")
    leia(temRecomendacao)

    //Processar informações / Output
    
    se(temRecomendacao == verdadeiro){
      se(idade >= 14){
        escreva("Aprovado sob recomendação. Monitorar nas primeiras viagens.")
      }senao{
        escreva("Reprovado. Volte quando estiver mais preparado para o mar.")
      }
    }


    se(temRecomendacao == falso){
      se(idade > 16 e sabeNadar == verdadeiro){
        escreva("Aprovado para o navio!")
      }senao{
        escreva("Reprovado. Volte quando estiver mais preparado para o mar.")
      }
    }
  }
}
