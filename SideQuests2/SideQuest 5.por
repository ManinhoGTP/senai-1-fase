programa {
  funcao inicio() {

      //Variáveis
     inteiro numero1, numero2
     cadeia operacao
     inteiro resultado

     //Input
     escreva("Bem vindo a calculadora do GTP, escolha dois numeros e uma operação para calcular!")
     escreva("\nNúmero 1: ")
     leia(numero1)
     escreva("Número 2: ")
     leia(numero2)
     escreva("Operação (+ ou soma, - ou subtração, * ou multiplicação, / ou divisão): ")
     leia(operacao)

     //Processar informações / Output
     escolha(operacao){
      caso "+" ou "soma":
      resultado = numero1 + numero2
      pare

      caso "-" ou "subtração":
      resultado = numero1 - numero2
      pare

      caso "*" ou "multiplicação":
      resultado = numero1 * numero2
      pare

      caso "/" ou "divisão":
      resultado = numero1 + numero2
      pare
     }
      escreva("Seu resultado é: ", numero1, " ", operacao, " ", numero2, " = ", resultado)
    }
  }