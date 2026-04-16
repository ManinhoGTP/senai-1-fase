programa {
  funcao inicio() {

    //variáveis / input
    real idadeDoCachorro

    escreva("Informe a idade do cachorro: ")
    leia(idadeDoCachorro)

    //processar informações
    real idadeHumanaDoCachorro = idadeDoCachorro * 7

    //Output
    se(idadeHumanaDoCachorro >= 70){
      escreva("O cachorro possui: ", idadeHumanaDoCachorro, " Anos humanos, ele pode se aposentar")
    } senao{
      escreva("O cachorro possui: ", idadeHumanaDoCachorro, " Anos humanos, ele não pode se aposentar")
    }

    }
  }
