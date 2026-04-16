programa {
  funcao inicio() {
    
      inteiro id, horasTrabalhadas
      real valorHora, salario

      escreva("Número ID do funcionário: ")
      leia(id)
      escreva("Horas trabalhadas: ")
      leia(horasTrabalhadas)
      escreva("Valor hora: ")
      leia(valorHora)
      escreva("----------------------")
      
      salario = valorHora * horasTrabalhadas

      escreva("\nNumero ID: ", id, "\nSalário: R$", salario)

  }
}