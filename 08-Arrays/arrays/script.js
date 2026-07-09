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

//Desafios facins de array
const diasDaSemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo']
const numerosPares = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
const frutas = ['banana', 'maçã', 'uva']
const amigos = ['Alice', 'Bob', 'Charlie']
const amigosIdades = [25, 30, 28]
const compras = ['Maçãs', 'Pão', 'Leite']
const lista = []
const cidades = ['Paris', 'Londres', 'Nova York']

const saida = document.getElementById("saida")
const saida2 = document.getElementById("saida2")
const saida3 = document.getElementById("saida3")
const saida4 = document.getElementById("saida4")
const saida5 = document.getElementById("saida5")
const saida6 = document.getElementById("saida6")
const saida7 = document.getElementById("saida7")
const saida8 = document.getElementById("saida8")

saida.innerHTML = diasDaSemana
saida2.innerHTML = numerosPares
saida3.innerHTML = frutas
saida4.innerHTML = amigos
saida5.innerHTML = amigosIdades
saida6.innerHTML = compras
saida7.innerHTML = lista
saida8.innerHTML = cidades

function adicionarFeriado(){
  diasDaSemana.push('Feriado')
  saida.innerHTML = diasDaSemana
}

function removerUltimoElemento(){
  diasDaSemana.pop()
  saida.innerHTML = diasDaSemana
}

function substituirTerceiroElemento(){
  numerosPares.splice(2,1,"12")
  saida2.innerHTML = numerosPares
}

function adicionarMorango(){
  frutas.push('morango')
  saida3.innerHTML = frutas
}

function removerSegundoElementoFrutas(){
  frutas.splice(1,1)
  saida3.innerHTML = frutas
}

function adicionarAmigos(){
  amigos.push(prompt("Nome do amigo para adicionar a lista"))
  saida4.innerHTML = amigos
}

function somarIdades(){
  saida5.innerHTML = amigosIdades
  let soma = amigosIdades[0] + amigosIdades[1]
  saida5.innerHTML = `${saida5.innerHTML} | idade do elemento 1 + idade do elemento 2 = ${soma}` 
}

function mediaIdades(){
  saida5.innerHTML = amigosIdades
  let media = 0
  for(let i = 0;i<amigosIdades.length;i++){
    media += amigosIdades[i]
  }
  media = media / amigosIdades.length
  saida5.innerHTML = `${saida5.innerHTML} | Média das idades é: ${media}`
}

function adicionarItens(){
  compras.push(prompt("Item a ser adicionado a lista"))
  saida6.innerHTML = compras
}

function removerTerceiroElemento(){
  compras.splice(2,1)
  saida6.innerHTML = compras
}

function verificarPao(){
  saida6.innerHTML = compras
  saida6.innerHTML = `${saida6.innerHTML} | Contém Pão? ${compras.includes("Pão")}`
}

function adicionarNumerosNaLista(){
  for(let i = 1;i<=5;i++){
    lista.push(prompt("Adicionar numero a lista:"))
  }
  saida7.innerHTML = lista
}

function multiplicarLista(){
  for(let i = 0;i<lista.length;i++){
    lista.splice(i,1, (lista[i] * 2))
  }
  saida7.innerHTML = lista
}

function fraseComCidades(){
  saida8.innerHTML = cidades
  saida8.innerHTML = `${saida8.innerHTML} | Eu nasci em ${cidades[0]} mas adoro ir para ${cidades[2]}`
}