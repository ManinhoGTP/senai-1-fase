programa {
  funcao inicio() {
    
    //Variáveis
    inteiro nota
    cadeia notaEmLetra

    //Input
    escreva("Informe a nota recebida no teste: ")
    leia(nota)

    //Processar informações / Output
    se(nota <= 20 ){
      notaEmLetra = "E"
    }senao se(nota > 20 e nota <= 40){
      notaEmLetra = "D"
    }senao se(nota > 40 e nota <= 60){
      notaEmLetra = "C"
    }senao se(nota > 60 e nota <= 80){
      notaEmLetra = "B"
    }senao se(nota > 80 e nota <= 100){
      notaEmLetra = "A"
    }

    escreva("Sua nota foi de: ", nota, " Pontos, e sua classificação foi ", notaEmLetra)

  }
}
