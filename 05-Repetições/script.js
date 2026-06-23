//While
function contadorWhile(){
    //Escolha do usuário
    contador = Number(prompt("Número inicial do contador"))
    contadorLimite = Number(prompt("Número maximo do contador"))
    incremento = Number(prompt("Número do incremento"))

    //Loop & Output
    while(contador < contadorLimite){
        alert(`contador menor que ${contadorLimite} (${contador})`)
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
        }else{
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

    saida.innerHTML += "<br>"

    //Lista de compra

    const listaDeCompra = [] 
    let posicaoDoItem = 0
    while(true){
        let item = prompt("Adicionar item a lista de compra: (0 para parar)")
        if(item == "0"){
            break
        }
        listaDeCompra.push(item)
        saida.innerHTML += `${posicaoDoItem + 1}- ${listaDeCompra[posicaoDoItem]}, `
        posicaoDoItem++   
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

//Lista de números encontrar o maior e menor valor
function calcularMenorEMaiorValor(){
    //Lista dos números, variáveis para o menor e maior valor, e valor a ser adicionado a lista
    const listaDeNumeros = []
    let menorValor = 0, maiorValor = 0
    let numero

    //Lista dos numeros
    while(true){
       numero = Number(prompt("Insira números na lista para calcular o maior e o menor (0 para parar)"))
       //Se 0 parar, senão adicionar a lista
       if(numero == 0){
            break
       }else{
           listaDeNumeros.push(numero)
       }
    }

    //passar por todas as posições da lista
    for(let posicao = 0;posicao <= listaDeNumeros.length;posicao++){

        //se o numero da posição atual for menor que o menor valor atual ou o valor atual for 0, definir numero da posição atual
        if(listaDeNumeros[posicao] < menorValor || menorValor == 0){
            menorValor = listaDeNumeros[posicao]
        }
        //Se o numero da posição atual for maior que o maior valor atual, definir numero da posição atual
        if(listaDeNumeros[posicao] > maiorValor){
            maiorValor = listaDeNumeros[posicao]
        }
        //Se a posição atual for a ultima printar numeros
        if(posicao == listaDeNumeros.length){
            document.getElementById("saida").innerHTML += ` Maior valor: ${maiorValor}, Menor valor: ${menorValor}`
            document.getElementById("saida").innerHTML += ` | Lista de números: ${listaDeNumeros}`
        }
    }
}

//Marcia lista for:

function somarNumeros(){
    let resultado = 0
    let saida = document.getElementById("saida")

    for(let i = 1; i <=10;i++){
        if(i < 10){
            saida.innerHTML += `${i} + `
            resultado += i
        }else if(i == 10){
            resultado += i
            saida.innerHTML += `${i} = ${resultado} `
        }
    }

}

function mostrarTabuada(){
    let saida = document.getElementById("saida")
    let multiplicador = 5
    let resultado = 0
    for(i = 1; i <=10;i++){
        resultado = multiplicador * i
        saida.innerHTML += `${multiplicador} x ${i} = ${resultado} <br>`
    }
}

function mostrarQuadrado(){
    let saida = document.getElementById("saida")
    let resultado = 0
    for(let i = 1;i <=10;i++){
        resultado = i**2
        saida.innerHTML += `${i}² = ${resultado}<br>`
    }
}

function soletrarJava(){
    let saida = document.getElementById("saida")
    let palavra = "JavaScript"

    for(let i=0;i < palavra.length;i++){
        if(i == 0){
            saida.innerHTML += "<br>"
        }
        saida.innerHTML += `${palavra[i]} <br>`
    }


}

function mostrarMiltiploDe3(){
    let saida = document.getElementById("saida")

    for(let i = 1; i <= 30; i++){
        if(i == 30){
            saida.innerHTML += `${i}`
        }else if(i%3 == 0){
            saida.innerHTML += `${i}, `
        }
    }
}

function mostrarAsteriscos(){
    let saida = document.getElementById("saida")
    for(let i = 0; i<= 10; i++){
        saida.innerHTML += `*`
    }
}

function somarParesDe1a20(){
    let saida = document.getElementById("saida")
    let resultado = 0
    
    for(i=1;i<=20;i++){
        if(i == 20){
            saida.innerHTML += `${i} = ${resultado} `
        }else if(i%2 == 0){
            resultado += i
            saida.innerHTML += `${i} + `
        }
    }

}

function contardorDe0a50(){
    let saida = document.getElementById("saida")

    for(i=0;i<=50;i += 5){
        if(i == 50){
            saida.innerHTML += `${i}`
        }else{
            saida.innerHTML += `${i}, ` 
        }
    }


}

function MostrarOla8Vezes(){
    let saida = document.getElementById("saida")
    let palavra = "Olá"
    for(i=0;i<=8;i++){
        if(i == 8){
            saida.innerHTML += `${palavra}`
        }else{
            saida.innerHTML += `${palavra}, `
        }
    }
}

function somarImparesDe1A15(){
    let saida = document.getElementById("saida")
    let resultado = 0
    for(i=1;i<=15;i++){
        if(i == 15 && i%3 == 0){
            resultado += i
            saida.innerHTML += `${i} = ${resultado}`
        }else if(i%3 == 0){
            resultado += i
            saida.innerHTML += `${i} + `
        }
    }
}

function somarParesDe1A15(){
    let saida = document.getElementById("saida")
    let resultado = 0
    for(i=1;i<=15;i++){
        if(i == 14){
            resultado += i
            saida.innerHTML += `${i} = ${resultado}`
        }else if(i%2 == 0){
            resultado += i
            saida.innerHTML += `${i} + `
        }
    }
}

function mostrarSequencia123(){
    let saida = document.getElementById("saida")
    let texto = ""
    for(i=1;i<=6;i++){
        saida.innerHTML += `${texto}, `
        texto += i
    }


}

function calcularFatorialDe5(){
    let saida = document.getElementById("saida")
    let numerador = 5
    let resultado = 1

    saida.innerHTML += `${numerador}! = `

    for(i = numerador;i>0;i--){

        resultado *= i
        if(i == 1){
            saida.innerHTML += `${i} = ${resultado}`
        }else{
            saida.innerHTML += `${i} x `
        }
    }
}

function contarLetrasO(){
    let saida = document.getElementById("saida")
    let frase = prompt("Informe uma frase para contar quantas letras 'o' ela possui:")
    let contador = 0

    for(i=0;i<frase.length;i++){
        if(frase[i] == "o"){
            contador ++
        }
    }
    saida.innerHTML += `Número de "o" na frase: ${contador}`
}