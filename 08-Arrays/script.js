const nomes = [
  "Lúcio Fernando",
  "Rivaldo Jesus",
  "Mônica",
  "Capitão Ganso",
  "Peba",
  "Gill Bates",
  "Dona Bete",
  "Kowalski",
  "Heitor Tuga",
  "Junin",
  "Padre Ernan Buco",
  "GENéZio",
  "Bilu",
  "Waldisney",
  "Tião"
]
const idades = [
  22, 33, 32
]

//Arrays
const produtos = ["Meia", "Pá de Corte", "Suco de Manga", "Leite"]
const precos = [665.99, 777, 12, 4]

//Botões padrão
function verProdutos(){
//Limpar lista
  document.getElementById("listaProdutos").innerHTML = ""
  
  for(let i = 0;i<produtos.length;i++){ 
    document.getElementById("listaProdutos").innerHTML += `<P> ${i + 1}° ${produtos[i]} </p>`
  }
}
function verProdutosComPrecos(){
//Limpar lista
  document.getElementById("listaProdutos").innerHTML = ""
  
  for(let i = 0;i<produtos.length;i++){ 
    document.getElementById("listaProdutos").innerHTML += `<P> ${i + 1}° ${produtos[i]} R$: ${precos[i].toFixed(2).replace(".", ",")} </p>`
  }
}

// Botões Desafios
function RemoverUltimoProduto(){
  //Limpar lista
  document.getElementById("listaProdutos").innerHTML = ""
  
  //Remover ultimo produto e preço
  produtos.pop()
  precos.pop()

  //Mostrar na página
  verProdutosComPrecos()
}

function aumentarPrecos(){
  //Limpar lista
  document.getElementById("listaProdutos").innerHTML = ""
  
  for(let i = 0;i<precos.length;i++){
    //Multiplicar valor por 3 (300%)
    precos[i] *= 4
  }

  //Mostrar na página
  verProdutosComPrecos()
}

function adicionarNovoProduto(){
  //Limpar lista
  document.getElementById("listaProdutos").innerHTML = ""

  //Adicionar na lista
  produtos.push(prompt("Produto a ser adicionado:"))
  precos.push(Number(prompt("Valor do produto:")))

  //Mostrar na página
  verProdutosComPrecos()
}