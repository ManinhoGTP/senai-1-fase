//Variáveis
let salario, dias, salarioDiario

//Input
salario = Number(prompt("Salário: "))
dias = Number(prompt("Dias trabalhados: "))

//Processar informações
salarioDiario = salario / dias

 //Output
alert("Salário diário: R$ " + salarioDiario.toFixed(2) + " Pila")