programa {
  funcao inicio() {

      //Variáveis
      inteiro idade

      //Input
      escreva("Informe sua idade: ")
      leia(idade)

      //Processar informações / Output
      se(idade >= 18 e idade < 70){
        escreva("Você é considerado por lei um maior de idade.")
      }senao se(idade >= 70){
        escreva("Você ja é considerado um maior de idade por lei e ja está na hora de se aposentar véio")
      }senao{
        escreva("Você ainda é menor de idade.")
      }

    }
  }