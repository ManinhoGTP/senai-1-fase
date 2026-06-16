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
