/*
C >> Create >> Cadastrar/Criar

R >> Read >> Ler

U >> Update >> Alterar/Atualizar/Editar

D >> Delete >> Deletar/Apagar/Excluir
*/


//Inputs nome, cor, altura, custo
const inputNome = document.getElementById("input-nome"), inputCor = document.getElementById("input-cor") 
const inputAltura = document.getElementById("input-altura"), inputCusto = document.getElementById("input-custo") 

//Array de dinos
let dinos = []


function resetarInputs(){
    //Resetar inputs
    inputNome.value = ""
    inputCor.value = ""
    inputAltura.value = ""
    inputCusto.value = ""

    inputNome.focus()
}
function testar(){
    dinos = [{
        id: 162162161,
        nome: "teste1",
        cor: "cor1",
        altura: 1,
        custo: 1
    },
    {
        id: 6436346363,
        nome: "teste2",
        cor: "cor2",
        altura: 2,
        custo: 2
    },
    {
        id: 83548537835,
        nome: "teste3",
        cor: "cor3",
        altura: 3,
        custo: 3
    },
    {
        id: 5484537347347437,
        nome: "teste4",
        cor: "cor4",
        altura: 4,
        custo: 4
    },
    {
        id: 7433838383,
        nome: "teste5",
        cor: "cor5",
        altura: 5,
        custo: 5
    }
    ]
    console.log(dinos)
 }


function cadastrarDino(){
    //Dino a ser adicionado
    const novoDino = {
        id: Date.now(),
        nome: inputNome.value,
        cor: inputCor.value,
        altura: Number(inputAltura.value),
        custo: Number(inputCusto.value)
    }

    
    //Adicionar ao array
    dinos.push(novoDino)
    //Resetar Input
    resetarInputs()
    //Console log
    console.log(dinos)
}
function mostrarTodosOsDinos(){
    let lista = document.getElementById("listaDeDinos")

    for(let i = 0; i<dinos.length; i++){
        lista.innerHTML += `${i} - ${dinos[i].nome} <br>'`
    }
}