programa {
  funcao inicio() {

    //Variáveis
    inteiro peso, distancia
    real volume, frete


    //Input
    escreva("Informe o peso da carga: ")
    leia(peso)
    escreva("Informe a distância que a carga será transportada: ")
    leia(distancia)
    escreva("Informe também o volume da carga em M³: ")
    leia(volume)

    //Processar informações / Output
    frete = 15 + (2* peso) + (0.05 * distancia) + (10 * volume)
    se(peso <= 0 ou distancia <= 0 ou volume <= 0){
      escreva("Atenção! nenhum dos valores requeridos acima pode ser igual ou menor que 0")
    }senao{
      escreva("Valor total do frete é de R$ ", frete)
    }
    


  }
}
