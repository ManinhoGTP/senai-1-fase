let cont = 0
function incrementarContagem(){
        let auto = setInterval(() => {
            cont ++
            console.log(cont)
            document.getElementById("p-contagem").innerHTML = cont
        }, 250)
    }











let global = "Sou uma variavel global D:"
function funcao1(){
    let local = "Sou uma variaveis local :D"
    console.log(local)
    console.log(global)
    
}
function funcao2(){
    console.log(global)
    // console.log(local)

}


// funcao1()
// funcao2()