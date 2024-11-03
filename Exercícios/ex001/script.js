function carregar() {
    var msg =  window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    //var hora = 22

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        // Bom Dia
        img.src = "imagens/dia.jpg"
        document.body.style.background = "#CBBB8C"
    } else if (hora >= 12 && hora <= 18) {
        //Boa Tarde
        img.src = "imagens/tarde.jpg"
        document.body.style.background = "#7AE582"
    } else {
        //Boa Noite
        img.src = `imagens/noite.jpg`
        document.body.style.background = "#515154"
        
    }
}
