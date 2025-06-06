let verificarIdade = document.getElementById("verificar");
verificarIdade.addEventListener("click", verificar);

function verificar() {
  let dataAtual = new Date();
  let anoAtual = dataAtual.getFullYear();
  let anoDoUsuario = document.getElementById("textoAno");
  let valorAnoDoUsuario = anoDoUsuario.value;
  let resultado = document.getElementById("res");

  if (valorAnoDoUsuario.length == 0 || valorAnoDoUsuario > anoAtual) {
    alert("Verifique os dados novamente");
  } else {
    let femaleSex = document.getElementById("femaleBox");
    let maleSex = document.getElementById("maleBox");
    let idade = anoAtual - Number(valorAnoDoUsuario);
    let genero = "";
    let img = document.createElement("img");
    img.setAttribute("id", "foto");

    if (idade < 18 && maleSex.checked) {
      genero = "Menino";
      resultado.innerHTML = `Foi registrado um ${genero} com ${idade} anos de idade.`;
      img.setAttribute("src", "./imagens/menino.jpg");
    } else if (idade < 18 && femaleSex.checked) {
      genero = "Menina";
      resultado.innerHTML = `Foi registrado uma ${genero} com ${idade} anos de idade.`;
      img.setAttribute("src", "./imagens/menina.jpg");
    } else if (idade >= 18 && idade <= 65 && maleBox.checked) {
      genero = "Homem";
      resultado.innerHTML = `Foi registrado um ${genero} com ${idade} anos de idade.`;
      img.setAttribute("src", "./imagens/homem.jpg");
    } else if (idade >= 18 && idade <= 65 && femaleBox.checked) {
      genero = "Mulher";
      resultado.innerHTML = `Foi registrado uma ${genero} com ${idade} anos de idade.`;
      img.setAttribute("src", "./imagens/mulher.jpg");
    } else if (idade > 65 && idade < 101 && maleBox.checked) {
      genero = "Senhor";
      resultado.innerHTML = `Foi registrado um ${genero} com ${idade} anos de idade.`;
      img.setAttribute("src", "./imagens/idoso.jpg");
    } else if (idade > 65 && idade < 101 && femaleBox.checked) {
      genero = "Senhora";
      resultado.innerHTML = `Foi registrado uma ${genero} com ${idade} anos de idade.`;
      img.setAttribute("src", "./imagens/idosa.jpg");
    } else {
      resultado.innerHTML = `Parabens pela sua idade de ${idade} anos.`;
    }
    resultado.style.textAlign = 'center';
    resultado.appendChild(img)
  }
}
