programa {
  funcao inicio() {

    //variáveis
    real grausCelcius, grausFarenheit

    //Input
    escreva("Digite uma temperature em celcius para converter para farenheit: ")
    leia(grausCelcius)

    //Processar / Output
    grausFarenheit = grausCelcius * (9/5) + 32
    escreva("O resultado é de: ", grausFarenheit, " Graus farenheit")
    se(grausFarenheit > 68){
      escreva("Atenção! ALERTA DE SUPER CALOR CORRA O MAIS RAPIDO POSSÍVEL PARA O SUL!!!!!")
    }
    }
  }
