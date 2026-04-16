programa {
  inclua biblioteca Texto --> txt
  inclua biblioteca Util --> u
  inteiro num
  funcao inicio() {

       // Telles Transporte e o preço do frete
       escreva("   Telles Transporte\n")

     //caso 1
    inteiro peso = 20
    inteiro distancia = 650
    real volume = 1
    real frete = 15 + (2 * peso) + (0.05 * distancia) + (10 * volume)
    escreva("Frete = 15 + (2 * peso) + (0,05 * distancia) + (10 * volume)")
    escreva("\ncaso 1 frete = ", frete)

    //caso 2
    peso = 60
    distancia = 1000
    volume = 0.5
    frete = 15 + (2 * peso) + (0.05 * distancia) + (10 * volume)
    escreva("\ncaso 2 frete = ", frete)
  
    //caso 3
    peso = 3
    distancia = 1200
    volume = 0.2
    frete = 15 + (2 * peso) + (0.05 * distancia) + (10 * volume)
    escreva("\ncaso 3 frete = ", frete)


       //Dona Bete e seu faturamento
       escreva("\n\n   Dona Bete")

  real valorBruto = 6579
  real gastoPremios = 112
  real suborno = 750
  real comissoes = 650
  real lucroTotal = valorBruto - suborno - comissoes - gastoPremios

  escreva("\nValor bruto: R$", valorBruto)
  escreva("\nLucro total da dona bete: R$", lucroTotal)


       //pé pequeno e o prejuizo das trocas
       escreva("\n\n   Pé pequeno")

    real preco = 50
    real quantidade = 120
    real valorTotal = preco * quantidade

    escreva("\nPreço por par R$", preco, "  |  quantidade de pares: ", quantidade)
    escreva("\nA loja vai receber R$", valorTotal)


       //Guilherme portões e a força de trabalho da Macrohard
       escreva("\n\n   Guilherme portões")

     inteiro devsClt = 12
     inteiro estagiarios = 4
     inteiro devsPj = 7
     inteiro devsTotal = devsClt + estagiarios + devsPj

     escreva("\nQuantidade de Devs CLT, estagiários e devs PJ na esmpresa respectivamente: ", devsClt, " | ", estagiarios, " | ", devsPj)
     escreva("\nQuantidade total de devs na empresa: ", devsTotal)


       //Trajeto Pomar e o estoque de frutas
       escreva("\n\n   Trajeto Pomar")

    inteiro laranjasIniciais = 673
    inteiro laranjasFinais = 233
    inteiro laranjasVendidas = laranjasIniciais - laranjasFinais
    escreva("\nQuantidade de laranjas no inicio do dia: ", laranjasIniciais, " | Quantidade de laranjas no final do dia: ", laranjasFinais)
    escreva("\nQuantidade de laranjas vendias: ", laranjasVendidas)


       //Kowalski e o relatório dos relatórios
       escreva("\n\n   Kowalski e o relatório dos relatórios")

    inteiro relatoriosPF = 40
    inteiro relatoriosPJ = 33
    inteiro tempoParaElaborarRelatoriosPF = 12
    inteiro tempoParaElaborarRelatoriosPJ = 42
    real valorRecebidoPF = 2350
    real valorRecebidoPJ = 8900

    escreva("\n\n Relatório principal:")
    escreva("\nRelatórios para PF: ", relatoriosPF, "\nRelatórios para PJ: ", relatoriosPJ)
    escreva("\nTempo para elaborar os relatórios PF: ", tempoParaElaborarRelatoriosPF, " Horas", "\nTempo para elaborar os relatórios PJ: ", tempoParaElaborarRelatoriosPJ, " Horas")
    escreva("\nValor total recebido de PF: R$", valorRecebidoPF, "\nvalor total recebido de PJ: R$", valorRecebidoPJ)

    inteiro relatoriosTotais = relatoriosPF + relatoriosPJ
    inteiro tempoTrabalhado = tempoParaElaborarRelatoriosPF + tempoParaElaborarRelatoriosPJ
    real valorTotalRecebido = valorRecebidoPF + valorRecebidoPJ
    real mediaValorPF = valorRecebidoPF / relatoriosPF
    real mediaValorPJ = valorRecebidoPJ / relatoriosPJ
    real tempoGastoPF = relatoriosPF / tempoParaElaborarRelatoriosPF
    real tempoGastoPJ = relatoriosPJ / tempoParaElaborarRelatoriosPJ
    escreva("\n\n Relatatório resumido:")
    escreva("\nQuantidade total de relatorios: ", relatoriosTotais)
    escreva("\nTempo total trabalhado: ", tempoTrabalhado, " Horas")
    escreva("\nValor total recebido: R$", valorTotalRecebido)
    escreva("\nMédia de valor recebido de relatórios PF e PJ respectivamente: R$", mediaValorPF, " | R$", mediaValorPJ )
    escreva("\nMédia de tempo gasto nos relatórios PF e PJ respectivamente: ", tempoGastoPF, " Horas | ", tempoGastoPJ, " Horas" )


       //Pe. Ernan Buco e os custos da Igreja
       escreva("\n\n   Pe. Ernan Buco e os custos da Igreja")
    
    real custoMensalIgreja = 1500
    real doacoesValor = 1350
    real valorRestante = custoMensalIgreja - doacoesValor
    escreva("\nCustos mensais totais da igreja: R$", custoMensalIgreja, "\nValor recebido em doações para a igreja: R$", doacoesValor)
    escreva("\nValor restante para pagar os custos da igreja: R$", valorRestante)


       //Capitão ganso e seu lucro mensal
       escreva("\n\n   Capitão ganso e seu lucro mensal")

       real navioGastoTotal = 5000
       real navioFaturamentoIngresso = 4200
       real navioFaturamentoItens = 6324
       real navioLucro = navioFaturamentoIngresso + navioFaturamentoItens - navioGastoTotal
       real margemDeLucro = navioLucro / (navioFaturamentoIngresso + navioFaturamentoItens)


    escreva("\nLucro obtido em reais: R$", navioLucro)
    escreva("\nLucro Percentual: ", margemDeLucro * 100, "%")


        //Junin e o salário diário
        escreva("\n\n   Junin e o salário diário")

    inteiro salario = 5000
    inteiro diasTrabalhados = 23
    inteiro salarioPorDia = salario / diasTrabalhados

    escreva("\nSalário mensal: R$", salario, "\nDias Trabalhados e salário por dia trabalhado respectivamente: ", diasTrabalhados, " | ", salarioPorDia, "R$")


                    //  2  //

      //Peba e o campeonato de futebol
      escreva("\n\n   Peba e o campeonato de futebol")

    inteiro vitorias = 13
    inteiro empates = 4
    inteiro pontos = (vitorias * 3) + empates

    escreva("\nNúmero de partidas: ", vitorias + empates, "\nNúmero de vitórias: ", vitorias, "\nNumero de empates: ", empates, "\nNúmero total de pontos: ", pontos)


       //Sarumano e o planejamento de suprimentos
       escreva("\n\n   Sarumano e o manejamento de suprimentos")

    inteiro shows = 5
    inteiro bombas = shows * 7
    real bombaPreco = 15.99

    escreva("\nShows de ilusionismo marcados: ", shows, "\nQuantidade total de bombas necessárias: ", bombas, "\nPreço por bomba e valor necessário para comprar todas as bombas respectivamente: R$", bombaPreco, " | R$", bombaPreco * bombas)


         //gael e seus jarés
         escreva("\n\n    Gael e seus jarés")
    
    inteiro caminhoes
    escreva("\nQuantos caminhões: ")
    leia(caminhoes)
    real lucroPorCaminhao = (90*50) - 450
    real lucroTotalCaminhao = lucroPorCaminhao * caminhoes
    escreva("Lucro total da temporada foi de: R$", lucroTotalCaminhao)
    
    


         //I.A e o preço dos prompts
         escreva("\n\n   I.A e o preço dos prompts")
  
    cadeia prompt
    
    escreva("\nEscreva seu prompt: ")
    leia(prompt)
    inteiro custoDoPrompt = txt.numero_caracteres(prompt) + 5
    escreva("O valor do seu prompt é: ", custoDoPrompt, " Tokens")

    
       //Mano juca e sua poupança
       escreva("\n\n   Mano juca e sua poupança")

    real moradia = 1100, agua = 200.28, luz = 157.36, internet = 99.99, gasolina = 120.99, streamings = 49.99, telefone = 0, outros = 700, salarioJuca = 2500
    real custoPorMes = moradia + agua + luz + internet + gasolina + streamings + telefone + outros
    real dinheiroRestante = salarioJuca - custoPorMes
    escreva("\nSalário recebido no mes: R$", salarioJuca, "\nGasto total do mes: R$", custoPorMes, "\nDinheiro restante para poupança: R$", dinheiroRestante)


       //Romero brinque e a politica de preços
       escreva("\n\n   Romero brinque e a politica de preços")

    real precoPagaNaArte = 1999.99
    real valorRevendaArte = precoPagaNaArte * 2

    escreva("\nValor pago na arte: R$", precoPagaNaArte, "\nValor para revenda de arte: R$", valorRevendaArte)


      //Pet shop ron bernardo e o preço da ração
      escreva("\n\n   Pet shop ron bernardo e o preço da ração")

    //Variáveis
    real precoRacaoKilo = 10
    real pesoDaRacaoGramas = 1
    real valorDaRacao = (pesoDaRacaoGramas / 1000) * precoRacaoKilo 

    //Input & Output
    escreva("\nQual a quantia de ração em gramas que voce deseja comprar?\n")
    leia(pesoDaRacaoGramas)
    escreva("O custo da ração então é: R$", valorDaRacao)


                  //  3  \\
       //Junin e seus freela
       escreva("\n\n   Junin e seus freela")

    inteiro denisPreco = 500
    num = u.sorteia(2, 10)
    inteiro desenvolvimentoPreco = 350 * num + denisPreco
    inteiro desenvolvimentoLucro = desenvolvimentoPreco - denisPreco

    escreva("\nHoras estimadas de desenvolvimento: ", num)
    escreva("\nPreço por hora trabalhada é R$350")
    escreva("\nPreço a pagar pelo desenvolvimento é de R$", desenvolvimentoPreco)
    escreva("\nLucro total foi de R$", desenvolvimentoLucro)

    
  }
}
