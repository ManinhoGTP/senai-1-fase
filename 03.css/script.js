//Atividades
let resultado = document.getElementById("resultado")
function calcularPrecoBrique(){
    //Variáveis
    let valorCompra, valorRevenda

    //Input
    valorCompra = Number(prompt("Valor gasto para comprar a obra: "))

    //Processar
    valorRevenda = valorCompra * 3

    //Output
    console.log("Com base na política de preços de romero, a obra deve ser vendida à R$ " + valorRevenda.toFixed(2))

    resultado.innerHTML = "Com base na política de preços de romero, a obra deve ser vendida à R$ " + valorRevenda.toFixed(2)
}   
function verificarProvisoes(){
    //Variáveis
    let NumMarujos, qntComida, comidaMinima

    //Input
    NumMarujos = Number(prompt("Quantia de marujos a bordo: "))
    qntComida = Number(prompt("Kilos de comida: "))

    //Processar
    comidaMinima = NumMarujos * 1.5

    //Output
    if (comidaMinima > qntComida || NumMarujos < 10) {
        resultado.innerHTML = "Algo está errado. Posseidom não quer ninguém no mar hoje."
            if (comidaMinima > qntComida) {
                console.log("Faltaram: " + (comidaMinima - qntComida) + " Kilos de comida")
                resultado.innerHTML ="Faltaram: " + (comidaMinima - qntComida) + " Kilos de comida"
            }
            if (NumMarujos < 10) {
                console.log("Faltaram: " + (10 - NumMarujos) + " Marujos!")
                resultado.innerHTML = "Faltaram: " + (10 - NumMarujos) + " Marujos!"
            }
    }else if (comidaMinima <= qntComida && NumMarujos >= 10) {
        resultado.innerHTML = "Provisões suficientes. Rumo ao horizonte!"
        console.log("Provisões suficientes. Rumo ao horizonte!")
    }
}
function verificarIdade(){
    //Variáveis
    let idade

    //Input
    idade = Number(prompt("Informe sua idade: "))

    //Processar / Output
    if (idade >= 18){
        resultado.innerHTML = "Você já é considerado maior de idade ou adulto."
        console.log("Você já é considerado maior de idade ou adulto.")
    }else{
        resultado.innerHTML = "Você ainda é considerado menor."
        console.log("Você ainda é considerado menor.")
    }

}
function jogoDaAdivinhaçao(){
//Variáveis
let numeroAleatorio, numeroEscolhido

//Input
numeroEscolhido = Number(prompt("Escolha um número entre 1 - 10:"))

//Processar / Output
numeroAleatorio = Math.ceil(Math.random(1, 10) * 10)

if (numeroAleatorio == numeroEscolhido){
    console.log("Parabéns, você adivinhou o número! | número sorteado: " + numeroAleatorio)
    resultado.innerHTML = "Parabéns, você adivinhou o número! | número sorteado: " + numeroAleatorio
}else if(numeroEscolhido > 10 || numeroEscolhido < 1){
    console.log("Atenção, você digitou um número invalido, ele precisa ser igual ou maior que 1 e igual ou menor que 10 | Número escolhido: " + numeroEscolhido)
    resultado.innerHTML = "Atenção, você digitou um número invalido, ele precisa ser igual ou maior que 1 e igual ou menor que 10 | Número escolhido: " + numeroEscolhido
}else if(numeroAleatorio != numeroEscolhido){
    console.log("Desprezivel, você errou o número! | número sorteado: " + numeroAleatorio)
    resultado.innerHTML = "Desprezivel, você errou o número! | número sorteado: " + numeroAleatorio
}
}
function verificarNumeroPar(){
    //Variáveis
    let numero

    //Input
    numero = Number(prompt("Insira um numero e veja se ele é par:"))

    //Processar / Output
    if(numero %2 == 0){
        resultado.innerHTML = "É par!"
        console.log("É par!")
    }else{
        resultado.innerHTML = "É impar!"
        console.log("É impar!")
    }
}
function verificarSegurançaDaSenha(){
    //Variáveis
    let senha

    //Input
    senha = prompt("Informe sua sua senha:")

    //Processar / Output
    if(senha.length >= 8){
        resultado.innerHTML = "Sua senha é segura!"
        console.log("Sua senha é segura!")
    }else{
        resultado.innerHTML = "Sua senha não é segura!"
        console.log("Sua senha não é segura!")
    }
}
function calculadorNumero(){
    //Variáveis
    let numero1, numero2, operacao, numeroResultante

    //Input
    numero1 = Number(prompt("Primeiro número:"))
    operacao = prompt("Insira a operação desejada: (+, -, *, /)")
    numero2 = Number(prompt("Segundo número:"))

    //Processar / output
    if(operacao == "+"){
        numeroResultante = numero1 + numero2
        resultado.innerHTML = "Resultado da soma: " + numeroResultante
    }else if(operacao == "-"){
        numeroResultante = numero1 - numero2
        resultado.innerHTML = "Resultado da subtração: " + numeroResultante
    }else if(operacao == "*"){
        numeroResultante = numero1 * numero2
        resultado.innerHTML = "Resultado da multiplicação: " + numeroResultante
    }else if(operacao == "/"){
        numeroResultante = numero1 / numero2
        resultado.innerHTML = "Resultado da divisão: " + numeroResultante
    }else{
        resultado.innerHTML = "idiota detectado!"
        alert("Foi inserida uma operação desconhecida! favor tentar denovo")
    }
}
function tempoDeViagemEspacial(){
    //Variáveis
    let distancia, tempo, sufixoTempo

    //Input
    distancia = Number(prompt("Insira a distância da viagem em kiloMetros:"))

    //Processar
    tempo = distancia / 300000
    sufixoTempo = "Segundos"

    if (tempo >= 60 && tempo < 3600) {
        tempo = tempo / 60
        sufixoTempo = "Minutos"
    }else if (tempo >= 3600 && tempo < 86400) {
        tempo = tempo / 3600
        sufixoTempo = "Horas"
    }else if (tempo >= 86400 && tempo < 2592000){
        tempo = tempo / 86400
        sufixoTempo = "Dias"
    }else if (tempo >= 2592000 && tempo < 31104000){
        tempo = tempo / 2592000
        sufixoTempo = "Meses"
    }else if (tempo > 31104000){
        tempo = tempo / 31104000
        sufixoTempo = "anos"
    }

    //Output
    alert("Tempo necessário viajando na velocidade da luz: " + tempo.toFixed(1) + " " + sufixoTempo)
    resultado.innerHTML = "Tempo necessário viajando na velocidade da luz: " + tempo.toFixed(1) + " " + sufixoTempo
}
function calcularCredito(){
    //Váriaveis
    let salario, emprestimo, prestacoes, prestacoesPreco, prestacoesPrecoLimite
    let juros = Number(0.10), jurosComposto, jurosPorPrestacao

    //Input
    salario = Number(prompt("Informe seu salário:"))
    emprestimo = Number(prompt("Qual valor do empréstimo?"))
    prestacoes = Number(prompt("Em quantas prestações deseja pagar o empréstimo?"))

    //Processar / Output
    prestacoesPreco = emprestimo / prestacoes
    prestacoesPrecoLimite = salario * (30 / 100)
    jurosComposto = emprestimo * ((1 + juros)** prestacoes)


    
    if (prestacoesPreco > prestacoesPrecoLimite){
        resultado.innerHTML = "Crédito bloqueado! preço das prestações maior que o limite de 30%"
    }else if(salario <= 0 || emprestimo <= 0 || prestacoes <=0){
        resultado.innerHTML = "Erro! Os valores requeridos não podem ser menor ou igual a 0"
    }else{
        resultado.innerHTML = "Crédito concedido!"
    }

    alert("Com juros compostos de 10%: " + (jurosComposto - emprestimo).toFixed(2))

}

//Testes
let resultadoTeste = document.getElementById("resultadoTeste")

function testarSenha(){
    //Variáveis
   let senhaInserida = document.getElementById("senhaInserida"), senhaCorreta = "1234"

   //Processar / Output
    if (senhaInserida.value == senhaCorreta){
        resultadoTeste.innerHTML = "Senha correta!"
        senhaInserida.style.borderColor = "green"
    }else{
        resultadoTeste.innerHTML = "Senha errada tente denovo!"
        senhaInserida.style.borderColor = "red"
    }
    senhaInserida.value = ""
}