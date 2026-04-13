programa {
  funcao inicio() {
    
    //Variáveis
    inteiro numeroMarujos, diasExtras
    real quantidadeDeComida, comidaPorMarujo, comidaPorDia

    //Input
    escreva("Informe quantos marujos capitão ganso conseguiu recrutar: ")
    leia(numeroMarujos)
    escreva("Informe quantos kilos de comida capitão ganso possui: ")
    leia(quantidadeDeComida)

    //Processar informações / Output
    comidaPorMarujo = 1.5
    comidaPorDia = numeroMarujos * comidaPorMarujo
    diasExtras = quantidadeDeComida / comidaPorDia - 1

     se(numeroMarujos >= 10 e quantidadeDeComida / numeroMarujos >= comidaPorMarujo){
      escreva("Provisões suficientes. Rumo ao horizonte!")
     }senao{
      escreva("Algo está errado. Posseidom não quer ninguém no mar hoje.")
     }
    
      se(quantidadeDeComida < comidaPorDia){
      escreva("\nAtenção faltam ", comidaPorDia - quantidadeDeComida, " Kilos de comida para a tripulação")
    }

    se(numeroMarujos < 10){
      escreva("\nAtenção faltam ", 10 - numeroMarujos, " Marujos para completar a tripulação")
    }

    se(quantidadeDeComida > comidaPorDia){
      escreva("\nHá comida sobrando, é possivel ficar mais ", diasExtras, " Dias no mar")
      escreva("\nAtenção a viagem irá durar mais tempo que o esperado, considere comprar mais barrils de rum!!")
    }

  }
}
