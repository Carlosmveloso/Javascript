window.addEventListener("load", carregar);

function carregar() {
  let texto = document.getElementById("texto");
  let imagem = document.getElementById("img");
  let data = new Date();
  let hora = data.getHours();
  let minutos = data.getMinutes();

  if (hora < 12) {
    imagem.src = "imagens/dia.jpg";
    document.body.style.background = 'rgb(207, 207, 38'
    texto.innerHTML = `BOM DIA!&nbsp Agora são ${hora} horas e ${minutos} minutos.`;
  } else if (hora >= 12 && hora < 18) {
    imagem.src = "imagens/tarde.jpg";
    document.body.style.background = 'rgb(71, 250, 190'
    texto.innerHTML = `BOA TARDE!&nbsp Agora são ${hora} horas e ${minutos} minutos.`;
  } else {
    imagem.src = "imagens/noite.jpg";
    document.body.style.background = 'rgb(68, 57, 99'
    texto.innerHTML = `BOA NOITE!&nbsp Agora são ${hora} horas e ${minutos} minutos.`;
  }
}
