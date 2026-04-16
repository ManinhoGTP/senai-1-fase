programa {
  funcao inicio() {

    //Variáveis
    inteiro laranjasIniciais, laranjasFinais, laranjasVendidas

    //Input
    escreva("Informe a quantia de laranjas no estoque no inicio do dia: ")
    leia(laranjasIniciais)
    escreva("Informe quantas laranjas sobraram no fim do dia: ")
    leia(laranjasFinais)

    //Processar informações / Output
    laranjasVendidas = laranjasIniciais - laranjasFinais
    se(laranjasFinais == 0){
      escreva("Foram vendidas no total: ", laranjasVendidas, " laranjas")
      escreva("\nAtenção o estoque de laranjas acabou, aumente o estoque de amanhã!")
    }senao{
      escreva("Foram vendidas no total: ", laranjasVendidas, " laranjas")
    }

  }
}
