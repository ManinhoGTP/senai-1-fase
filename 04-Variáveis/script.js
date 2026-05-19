//Contador
let cont = 0
let ativo = "false"
let quantia = document.getElementById("incrementar")

function incrementarContagem(){
    cont += Number(quantia.value)
    document.getElementById("p-contagem").innerHTML = cont
    console.log(cont)
}
function decrementarContagem(){
    cont -= Number(quantia.value)
    document.getElementById("p-contagem").innerHTML = cont
    console.log(cont)
}

//Atividades

//MJ Harry Ploter
let valorTotalMJ = 0
function adicionarVenda(){
    let valorAdicionado = Number(document.getElementById("valorDaVenda").value)
    let output = document.getElementById("valorTotalMJ")
    
    document.getElementById("valorDaVenda").value = ""
    valorTotalMJ += valorAdicionado
    output.innerHTML = valorTotalMJ.toFixed(2) + " R$"

}


//Copo de dados //Código merda não repare
let pontos = 0
let contD4 = 0, contD6 = 0, contD8 = 0, contD10 = 0, contD12 = 0, contD20 = 0
let rolagens = document.getElementById("rolagens")
function d4(){
    numeroSorteado = Math.ceil((Math.random()*4))
    pontos = Number(pontos + numeroSorteado)
    document.getElementById("pontos").innerHTML = "Pontos: " + pontos
    contD4 ++
    document.getElementById("d4Rolados").innerHTML = "d4 rolados: " + contD4
    rolagens.innerHTML += numeroSorteado + ", "
}
function d6(){
    numeroSorteado = Math.ceil((Math.random()*6))
    pontos = Number(pontos + numeroSorteado)
    document.getElementById("pontos").innerHTML = "Pontos: " + pontos
    contD6 ++
    document.getElementById("d6Rolados").innerHTML = "d6 rolados: " + contD6
    rolagens.innerHTML += numeroSorteado + ", "
}
function d8(){
    numeroSorteado = Math.ceil((Math.random()*8))
    pontos = Number(pontos + numeroSorteado)
    document.getElementById("pontos").innerHTML = "Pontos: " + pontos
    contD8 ++
    document.getElementById("d8Rolados").innerHTML = "d8 rolados: " + contD8
    rolagens.innerHTML += numeroSorteado + ", "
}
function d10(){
    numeroSorteado = Math.ceil((Math.random()*10))
    pontos = Number(pontos + numeroSorteado)
    document.getElementById("pontos").innerHTML = "Pontos: " + pontos
    contD10 ++
    document.getElementById("d10Rolados").innerHTML = "d10 rolados: " + contD10
    rolagens.innerHTML += numeroSorteado + ", "
}
function d12(){
    numeroSorteado = Math.ceil((Math.random()*12))
    pontos = Number(pontos + numeroSorteado)
    document.getElementById("pontos").innerHTML = "Pontos: " + pontos
    contD12 ++
    document.getElementById("d12Rolados").innerHTML = "d12 rolados: " + contD12
    rolagens.innerHTML += numeroSorteado + ", "
}
function d20(){
    numeroSorteado = Math.ceil((Math.random()*20))
    pontos = Number(pontos + numeroSorteado)
    document.getElementById("pontos").innerHTML = "Pontos: " + pontos
    contD20 ++
    document.getElementById("d20Rolados").innerHTML = "d20 rolados: " + contD20
    rolagens.innerHTML += numeroSorteado + ", "
}
