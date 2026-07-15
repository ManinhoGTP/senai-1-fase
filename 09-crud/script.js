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
const dinos = []

function resetarInputs(){
    //Resetar inputs
    inputNome.value = ""
    inputCor.value = ""
    inputAltura.value = ""
    inputCusto.value = ""
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