/*
C >> Create >> Cadastrar/Criar

R >> Read >> Ler

U >> Update >> Alterar/Atualizar/Editar

D >> Delete >> Deletar/Apagar/Excluir
*/



//Inputs nome, cor, altura, custo
const inputNome = document.getElementById("input-nome"), inputCor = document.getElementById("input-cor") 
const inputAltura = document.getElementById("input-altura"), inputCusto = document.getElementById("input-custo")
const inputId = document.getElementById("input-Id")

//Array de dinos
let dinos = []


//Botões
function resetarInputs(){
    //Resetar inputs
    inputNome.value = ""
    inputCor.value = ""
    inputAltura.value = ""
    inputCusto.value = ""
    inputId.value = ""

    inputNome.focus()
}
function testar(){

    dinos = [
    {
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
function pesquisar(){
    let nomeProcurado = inputNome.value

    for(let i = 0; i<dinos.length;i++){
        if(nomeProcurado == dinos[i].nome){
            console.log(dinos[i])
            console.log(i)

            inputAltura.value = dinos[i].altura
            inputCor.value = dinos[i].cor
            inputCusto.value = dinos[i].custo
            inputId.value = dinos[i].id
        }
    }

}
function updateDino(){
    let idEscolhido = Number(inputId.value)

    for(let i = 0; i<dinos.length;i++){
        if(idEscolhido == dinos[i].id){
            dinos[i].nome = inputNome.value
            dinos[i].cor = inputCor.value
            dinos[i].altura = inputAltura.value
            dinos[i].custo = inputCusto.value
        }
    }
    mostrarTodosOsDinos()
    resetarInputs()
}
function deletarDino(){
    let dinoEscolhido = Number(inputId.value)

    for(let i = 0; i<dinos.length;i++){
        if(dinoEscolhido == dinos[i].id){
            dinos.splice(i, 1)
        }
    }
    mostrarTodosOsDinos()
    resetarInputs()
}


//Local storage
function salvarDados(){
    localStorage.setItem("dinos", JSON.stringify(dinos))
}
function carregarDados(){
    dinos = JSON.parse(localStorage.getItem("dinos"))
    console.log(dinos)
}
