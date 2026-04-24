//Variáveis
let precoPar, quantidade , precoTotal

//Input
quantidade = Number(prompt("Quantos pares de calçados para troca: "))
precoPar = Number(prompt("preço por par de calçado: "))

//Processar / Output
precoTotal = precoPar * quantidade
console.log("Valor a receber R$ " + precoTotal.toFixed(2))
alert("O valor total em vales de trocas é de R$ " + precoTotal.toFixed(2))