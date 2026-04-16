programa {
  inclua biblioteca Texto --> txt
  funcao inicio() {

      //Variáveis
     cadeia senha

     //Input
     escreva("Digite sua senha: ")
     leia(senha)

     //Processar informações / Output
     inteiro numeroDeCaracteres = txt.numero_caracteres(senha)
     se(numeroDeCaracteres < 8){
      escreva("Atenção! sua senha precisa conter mais de 8 caracteres")
     }senao{
      escreva("Sua senha é válida")
     }
    }
  }