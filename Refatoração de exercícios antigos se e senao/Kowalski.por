programa {
  funcao inicio() {

    //Variáveis
    inteiro relatoriosPF, relatoriosPJ, tempoUsadoPF, tempoUsadoPJ
    real valorRecebidoPF, valorRecebidoPJ

    inteiro tempoUsadoTotal, relatoriosTotais
    real valorRecebidoTotal, mediaTempoPF, mediaTempoPJ, mediaValorPF, mediaValorPJ

    //Input
    escreva("Informe o numero de ralatórios PF: ")
    leia(relatoriosPF)
    escreva("Informe o numero de ralatórios PJ: ")
    leia(relatoriosPJ)
    escreva("Informe o tempo usado para elaborar os ralatórios PF: ")
    leia(tempoUsadoPF)
    escreva("Informe o tempo usado para elaborar os ralatórios PJ: ")
    leia(tempoUsadoPJ)
    escreva("Informe o valor recebido para elaborar os ralatórios PF: ")
    leia(valorRecebidoPF)
    escreva("Informe o valor recebido para elaborar os ralatórios PJ: ")
    leia(valorRecebidoPJ)
    
    //Processar informações / Output
    valorRecebidoTotal = valorRecebidoPF + valorRecebidoPJ
    relatoriosTotais = relatoriosPF + relatoriosPJ
    tempoUsadoTotal = tempoUsadoPF + tempoUsadoPJ
    mediaTempoPF = tempoUsadoPF / relatoriosPF
    mediaTempoPJ = tempoUsadoPJ / relatoriosPJ
    mediaValorPF = valorRecebidoPF / relatoriosPF
    mediaValorPJ = valorRecebidoPJ / relatoriosPJ
    mediaTempoPJ = valorRecebidoPJ / relatoriosPJ

    escreva("==================================\nInformações crus\n==================================\n")

    escreva("Relatórios PF: ", relatoriosPF, "\nRelatórios PJ: ", relatoriosPJ, "\nTempo para eleborar os relatórios PF: ", tempoUsadoPF, " Horas", "\nTempo para eleborar os relatórios PJ: ", tempoUsadoPJ, " Horas")
    escreva("\nValor recebido pelos relatórios PF: R$ ", valorRecebidoPF, "\nValor recebido pelos relatórios PJ: R$ ", valorRecebidoPJ)

    escreva("\n==================================\nInformações Preocessadas\n==================================\n")
    
    escreva("Quantidade total de relatórios: ", relatoriosTotais, "\nTempo total trabalhado: ", tempoUsadoTotal, " Horas", "\nValor total recebido: R$ ", valorRecebidoTotal)
    escreva("\nMedia de valor recebido de relatórios PF e PJ respectivamente: R$ ", mediaValorPF, " | R$ ", mediaValorPJ)
    escreva("\nMedia de tempo trabalhado em cada relatórios PF e PJ respectivamente: ", mediaTempoPF, " Horas | ", mediaTempoPJ, " Horas")
    escreva("\n\n==================================\n")
    

    se(mediaValorPF > mediaValorPJ){
      se(relatoriosPF > relatoriosPJ){
        escreva("\nKowalski está investindo corretamente!")
      }senao{
        escreva("\nEm média relatórios PF valem mais, mas kowalski não está investindo mais neles")
      }
    }

    se(mediaValorPF < mediaValorPJ){
      se(relatoriosPF < relatoriosPJ){
        escreva("\nKowalski está investindo corretamente!")
      }senao{
        escreva("\nEm média relatórios PF valem mais, mas kowalski não está investindo mais neles")
      }
    }

    
  }
}
