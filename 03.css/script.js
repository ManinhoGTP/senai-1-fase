
function calcularPrecoBrique(){
    //Variáveis
    let valorCompra, valorRevenda

    //Input
    valorCompra = Number(prompt("Valor gasto para comprar a obra: "))

    //Processar
    valorRevenda = valorCompra * 3

    //Output
    alert("Com base na política de preços de romero, a obra deve ser vendida à R$ " + valorRevenda.toFixed(2))
}   
