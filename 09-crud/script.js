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
        nome: "Dino1",
        cor: "Vermelho",
        altura: 7,
        custo: 14
    },
    {
        id: 6436346363,
        nome: "Dino2",
        cor: "Amarelo",
        altura: 8,
        custo: 16
    },
    {
        id: 83548537835,
        nome: "Dino3",
        cor: "Verde",
        altura: 9,
        custo: 18
    },
    {
        id: 5484537347347437,
        nome: "Dino4",
        cor: "Azul",
        altura: 10,
        custo:20
    },
    {
        id: 7433838383,
        nome: "Dino5",
        cor: "Roxo",
        altura: 11,
        custo: 21.99
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
    mostrarTodosOsDinos()

}
function mostrarTodosOsDinos(){
    let lista = document.getElementById("painel-dinos")
    lista.innerHTML = ""

    for(let i = 0; i<dinos.length; i++){
        lista.innerHTML += `
        <div class = "card-dino">
            <h3>${i} - ${dinos[i].nome}</h3>
            <p>Cor: ${dinos[i].cor}</p>
            <p>Altura: ${dinos[i].altura}</p>
            <p>Custo: ${dinos[i].custo}</p>
            <p>ID: ${dinos[i].id}</p>
        </div>
        `
    }
}