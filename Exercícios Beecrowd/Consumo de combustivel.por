programa {
  funcao inicio() {
    
    inteiro distacia = 100
    real consumoEmLitros = 10

    escreva("Distancia percorrida em KiloMetros: ")
    leia(distacia)
    escreva("Quantia de combustivel consumida em litros: ")
    leia(consumoEmLitros)

    real mediaConsumoPorLitro = distacia / consumoEmLitros

    escreva("Media de comsumo de combustivel por litro: ", mediaConsumoPorLitro)

  }
}
