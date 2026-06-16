//While
function contadorWhile(contador, incremento){
    while(contador < 10){
        alert(`contador menor que 10 (${contador})`)
        contador += incremento
    }
}

//For
function contadorFor(){
let numero = prompt("Escolha um número para mostrar sua tabuada")
    for(let i = 1; i <= 10; i++){
        alert(`${i} X ${numero} = ${numero * i}`)
    }
}
