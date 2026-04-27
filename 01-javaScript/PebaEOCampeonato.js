//Variáveis
let vitorias, empates, pontos

//Input
vitorias = prompt("Quantas vitórias: ")
vitorias = Number(vitorias)
empates = prompt("Quantos empates")
empates = Number(empates)

//Processar
pontos = (vitorias * 3) + empates

//Output
alert("A quantia de pontos ganhos pelo time foi: " + pontos)