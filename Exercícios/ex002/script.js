function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById("txtano")
    var res = window.document.querySelector("div#res")

    if (fano.value.length == 0 || Number(fano.value) > ano ) {
        window.alert(`[ERRO] Verifique os dados e tente novamente!`)
    } else {
        var fsex =  document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")

        if (fsex[0].checked) {
            genero = "Homem"
            if (idade >= 0 && idade < 18) {
                //Criança/Adolecente
                img.setAttribute("src", "imagens/menino.jpg")
            } else if (idade >= 18 && idade < 65) {
                //Adulto
                img.setAttribute("src", "imagens/homem.jpg")
            } else {
                //Idoso
                img.setAttribute("src", "imagens/idoso.jpg")
            }
        } else if (fsex[1].checked) {
            genero = "Mulher"
            if (idade >= 0 && idade < 18) {
                //Criança/Adolecente
                img.setAttribute("src", "imagens/menina.jpg")
            } else if (idade >= 18 && idade < 65) {
                //Adulta
                img.setAttribute("src", "imagens/mulher.jpg")
            } else {
                //Idosa
                img.setAttribute("src", "imagens/idosa.jpg")
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) 
    }
}