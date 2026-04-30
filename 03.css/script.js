
function calcularPrecoBrique(){
    //Variáveis
    let valorCompra, valorRevenda

    //Input
    valorCompra = Number(prompt("Valor gasto para comprar a obra: "))

    //Processar
    valorRevenda = valorCompra * 3

    //Output
    alert("Com base na política de preços de romero, a obra deve ser vendida à R$ " + valorRevenda.toFixed(2))
    console.log("Com base na política de preços de romero, a obra deve ser vendida à R$ " + valorRevenda.toFixed(2))

    document.getElementById("resultadoRomero").innerHTML = "Valor revenda: " + valorRevenda.toFixed(2)
}   
function verificarProvisoes(){
    //Variáveis
    let NumMarujos, qntComida, comidaMinima

    //Input
    NumMarujos = Number(prompt("Quantia de marujos a bordo: "))
    qntComida = Number(prompt("Kilos de comida: "))

    //Processar
    comidaMinima = NumMarujos * 1.5

    //Output
    if (comidaMinima > qntComida || NumMarujos < 10) {
        document.getElementById("resultadoGanso").innerHTML = "Algo está errado. Posseidom não quer ninguém no mar hoje."
            if (comidaMinima > qntComida) {
                alert("Faltaram: " + (comidaMinima - qntComida) + " Kilos de comida")
            }
            if (NumMarujos < 10) {
                alert("Faltaram: " + (10 - NumMarujos) + " Marujos!")
            }
    }else if (comidaMinima <= qntComida && NumMarujos >= 10) {

        document.getElementById("resultadoGanso").innerHTML = "Provisões suficientes. Rumo ao horizonte!"

    }
}