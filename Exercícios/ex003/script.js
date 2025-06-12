//Forma de como foi feito na aula

let btnContar = document.getElementById("contar");
btnContar.addEventListener("click", contar);

function contar() {
  let numeroIncial = document.getElementById("numeroInicial");
  let numeroFinal = document.getElementById("numeroFinal");
  let numeroPasso = document.getElementById("numeroPasso");
  let resultado = document.getElementById("resultado");

  if (
    numeroIncial.value.length == 0 ||
    numeroFinal.value.length == 0 ||
    numeroPasso.value.length == 0
  ) {
    alert("Preencha todos os campos");
  } else {
    resultado.innerHTML = `Contando...`;
    let nInicial = Number(numeroIncial.value);
    let nFinal = Number(numeroFinal.value);
    let nPasso = Number(numeroPasso.value);

    if (nInicial < nFinal) {
      for (let contador = nInicial; contador <= nFinal; contador += nPasso) {
        resultado.innerHTML = `${contador}`;
      }
    } else {
      for (let contador = nInicial; contador >= nFinal; contador -= nPasso) {
        resultado.innerHTML = `${resultado}`;
      }
    }
  }
}
