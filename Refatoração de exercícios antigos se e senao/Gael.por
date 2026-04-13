programa {
  funcao inicio() {
    
    //Variáveis
    inteiro caminhoes, lucroTotal, valorJare, valorCaminhao, temporadaPassada

    //Input
    escreva("Informe quantos caminhões de jarés foram vendidos: ")
    leia(caminhoes)
    escreva("Informe quantos caminhões foram vendidos na temporada passada: ")
    leia(temporadaPassada)

    //Processar informações / Output
    valorJare = 90
    valorCaminhao = 50 * valorJare
    lucroTotal = valorCaminhao - 450
    
    se(caminhoes > temporadaPassada){
      escreva("Nessa temporada foram vendidos mais caminhões de jarés que na temporada passada!\n")
    }senao se(caminhoes < temporadaPassada){
      escreva("Nessa temporada foram vendidos menos caminhões de jarés que na temporada passada!\n")
    }senao{
      escreva("Nessa temporada foram vendidos a mesma quantia caminhões de jarés que na temporada passada!\n")
    }

    escreva("Lucro total foi de R$ ", lucroTotal)



  }
}
