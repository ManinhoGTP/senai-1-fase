programa {
  funcao inicio() {

    //variáveis
    real altura, peso
    real imc = peso / (altura * altura)

    //Input
    escreva("Informe sua altura: ")
    leia(altura)
    escreva("Informe seu peso: ")
    leia(peso)

    //Processar informações / Output
    se(imc < 25){
      escreva("Seu IMC é de: ", imc, "\nAtenção seu IMC está abaixo de 25!")
    } senao{
      escreva("Seu IMC está acima de 25")
    }

    }
  }