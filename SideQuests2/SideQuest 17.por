programa {
  funcao inicio() {

    //Variáveis
    cadeia mes


    //Input
    escreva("Informe o nome de um mês para descobrir a quantia de dias que ele possui: ")
    leia(mes)

    //Processar informações / Output
    se(mes == "janeiro" ou mes == "março" ou mes == "maio" ou mes == "julho" ou mes == "agosto" ou mes == "outubro" ou mes == "dezembro"){
      escreva("Esse mês tem 31 dias")
    }senao se(mes == "fevereiro"){
      escreva("Esse mês possui 28 dias ou 29 em anos bissextos")
    }senao se(mes == "abril" ou mes == "junho" ou mes == "setembro" ou mes == "novembro"){
      escreva("Esse mês tem 30 dias")
    }senao{
      escreva("Você não inseriu um mês valido, reescreva novamente corretamente com tudo minusculo")
    }
    


    }
  }