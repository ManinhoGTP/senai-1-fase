const personagens = ["rivalado jesus", "Kowalski", "Genezio", "Waltdisney"]

const lista = document.getElementById("lista")
const seletor = document.getElementById("seletor")

// personagens.forEach((nome, i) => {
//     const celula = document.createElement("div")
//     celula.className = "celula"
//     celula.id = "item" + i
//     celula.innerHTML = `<span class="valor">${nome}</span><class="idx">[${i}]</span>`
//     lista.appendChild(celula)

//     const opt = document.createElement("option")
//     opt.value = nome
//     opt.textContent = nome
//     seletor.appendChild(opt)
// })

// function buscarIndice(){

//     document.querySelectorAll(".celula").forEach(c.classLista.remove("destaque"))
//     const nomeEscolhido = selector.value
//     const indice = personagens.indexOf(nomeEscolhido)
//     document.getElementById("resultado").textContent = `"${nomeEscolhido}" está no indice ${indice}`
//     document.getElementById("item-" + indice).classList.add("destaque")

// }

personagens.forEach((nome, i) => {

    const celula = document.createElement("div")
    celula.className = "celula"
    celula.id = "item" + i
    celula.innerHTML = `<p>${nome}</p>`
    lista.appendChild(celula)

    const opt = document.createElement("option")
    opt.value = nome
    opt.textContent = nome
    seletor.appendChild(opt)
});

