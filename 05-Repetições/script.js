//While
function contadorWhile(){
    //Escolha do usuário
    contador = Number(prompt("Número inicial do contador"))
    contadorLimite = Number(prompt("Número maximo do contador"))
    incremento = Number(prompt("Número do incremento"))

    //Loop & Output
    while(contador < contadorLimite){
        alert(`contador menor que 10 (${contador})`)
        contador += incremento
    }
}

//For
function contadorFor(){
    //Escolha do usuário
    let numero = Number(prompt("Escolha um número para mostrar sua tabuada"))
    let numDeRepetiçao = Number(prompt("Até que número você quer a tabuáda?"))

    //Loop & Output
    for(let i = 1; i <= numDeRepetiçao; i++){
        alert(`${i} X ${numero} = ${numero * i}`)
    }
}


//Atividades parte 1
function atividade1(){
    let saida = document.getElementById("saida")
    let i = 1
    saida.innerHTML += "<br>"

    //Contador crescente
    while(i <= 10){
        saida.innerHTML += ` ${i}`
        i++
    }

    saida.innerHTML += "<br>"

    //Contador decrescente
    i = 10
    while(i >= 1){
        saida.innerHTML += ` ${i}`
        i--
    }

    saida.innerHTML += "<br>"

    //Mostrar tabuáda
    let x = Number(prompt("escolha um número para mostrar sua tabuáda"))
    for(i = 1; i<=10; i++){
        saida.innerHTML += `${i} x ${x} = ${i * x} | `
    }

    saida.innerHTML += "<br>"

    //Mostrar numeros impares até 20
    for(i = 1; i<=20; i++){
        if(i%2 == "1"){
            saida.innerHTML += i + " | "
        }
    }

    saida.innerHTML += "<br>"

    //Alterar multiplos de 3 e 5 por Fizz e Buzz de 1 a 100
    for(i=1;i<=100;i++){
        if(i%3 == 0 && i%5 == 0){
            saida.innerHTML += "FizzBuzz | "
        }else if(i%3 == 0){
            saida.innerHTML += "Fizz | "
        }else if(i%5 == 0){
            saida.innerHTML += "Buzz | "
        }else{
            saida.innerHTML += `${i} | `
        }
    }

    saida.innerHTML += "<br>"

    //Contar pares e impares de 1 a numero escolhido
    let numero = Number(prompt("Escolha um número para contar quantos pares e impares existem de 1 até ele"))
    let pares = 0, impares = 1

    for(i=1;i<=numero;i++){

        if(i%2 == 0){
            pares ++
        }else if(i%2 == 1){
            impares ++
        }

        if(i == numero){
            saida.innerHTML += `Números pares: ${pares} <br> Números impares: ${impares}`
        }

    }

}
//Atividades parte 2
function atividade2(){
    let saida = document.getElementById("saida")


    //Repetir palavra 10 vezes
    let palavra = prompt("Informe uma palavra para repetir 10 vezes")
    for(i=1;i<=10;i++){
        saida.innerHTML += ` ${palavra}, `
    }

    saida.innerHTML += "<br>"

    //Somar números pares
    let numero = Number(prompt("Insira um número para somar todos os pares de 2 até ele"))
    let resultado = 2
    for(i=2;i<=numero;i++){

        if(i%2 == 0){
            resultado += i
        }
        if(i == numero){
            saida.innerHTML += `A soma dos números pares de 2 até ${numero} = ${resultado}`
        }
    }

    
}


//calcular fatorial
function calcularFatorial(){

    let numero = Number(prompt("Escolha um número para calcular seu fatorial"))
    let numeroResultante = numero
    let saida = document.getElementById("saida")
    saida.innerHTML= `${numero}! = ${numero} x `

    for(i = (numero - 1); i >=1; i--){

        numeroResultante *= i
        
        if(i == "1"){
            saida.innerHTML += `${i} = ${numeroResultante}`
        }else{
            saida.innerHTML += `${i} x `
        }
    }
}