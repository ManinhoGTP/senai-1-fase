programa {
  funcao inicio() {
    
    //Variáveis
    inteiro diasTrabalhados, semanasTrabalhadas
    real salarioMensal, valorDiario, salarioSemanal, bicosFreela, bicosFreelaPorcento, rendaTotal

    //Input
    escreva("Insira quantos dias foram trabalhados: ")
    leia(diasTrabalhados)
    escreva("Qual é o salário mensal? ")
    leia(salarioMensal)
    escreva("Valor recebido em bicos freela: ")
    leia(bicosFreela)

    //Processar informações / Output
    valorDiario = salarioMensal / diasTrabalhados
    semanasTrabalhadas = diasTrabalhados / 7
    salarioSemanal = salarioMensal / semanasTrabalhadas
    rendaTotal = salarioMensal + bicosFreela
    bicosFreelaPorcento = (bicosFreela / rendaTotal) * 100

    escreva("O salário diário é de R$ ", valorDiario)
    escreva("\nO salário semanal de junin é de R$ ", salarioSemanal)
    escreva("\nPorcentagem da renda total em bicos freela: ", bicosFreelaPorcento)

  }
}
