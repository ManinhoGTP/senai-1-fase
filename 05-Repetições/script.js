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
    let i = 1
    let saida = document.getElementById("saida")
    saida.innerHTML += "<br>"

    while(i <= 10){
        saida.innerHTML += ` ${i}`
        i++
    }

    saida.innerHTML += "<br>"

    i = 10
    while(i >= 1){
        saida.innerHTML += ` ${i}`
        i--
    }

    saida.innerHTML += "<br>"

    let x = Number(prompt("escolha um número para mostrar sua tabuáda"))
    for(i = 1; i<=10; i++){
        saida.innerHTML += `${i} x ${x} = ${i * x} | `
    }

    saida.innerHTML += "<br>"

    for(i = 1; i<=20; i++){
        if(i%2 == "1"){
            saida.innerHTML += i + " | "
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