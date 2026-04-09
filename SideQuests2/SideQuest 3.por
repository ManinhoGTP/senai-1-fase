programa {
  funcao inicio() {

      //Variáveis
      inteiro diaDaSemana

      //Input
      escreva("Escolha um número de 1 a 7 e descubra qual dia da semana ele corresponde ")
      leia(diaDaSemana)

      //Processar informações / Output
      escolha(diaDaSemana){
        caso 1:
        escreva("O ", diaDaSemana, "° dia da semana é Domingo!")
        pare

        caso 2:
        escreva("O ", diaDaSemana, "° dia da semana é Segunda!")
        pare

        caso 3:
        escreva("O ", diaDaSemana, "° dia da semana é Terça!")
        pare

        caso 4:
        escreva("O ", diaDaSemana, "° dia da semana é Quarta!")
        pare

        caso 5:
        escreva("O ", diaDaSemana, "° dia da semana é Quinta!")
        pare

        caso 6:
        escreva("O ", diaDaSemana, "° dia da semana é Sexta!")
        pare

        caso 7:
        escreva("O ", diaDaSemana, "° dia da semana é Sabado!")
        pare
      }

    }
  }