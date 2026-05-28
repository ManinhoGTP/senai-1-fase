
const relogio = document.getElementById("relogio")

const tempo = setInterval(function() {
    const agora = new Date()
    const inicioDoNm = new Date("Apr 03 2026 17:41:00")
    const diferença = agora - inicioDoNm
    


    const d = Math.floor(diferença / (1000 * 60 * 60 * 24))
    const h = Math.floor((diferença % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const m = Math.floor((diferença % (1000 * 60 * 60)) / (1000 * 60))
    const s = Math.floor((diferença % (1000 * 60)) / 1000)

    relogio.innerHTML = `${d}d ${h}h ${m}m ${s}s`
}, 1000)
