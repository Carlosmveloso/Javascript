//Forma de como eu pensei de fazer o exercício

let numeroInicial = document.getElementById("numeroInicial");
let numeroFinal = document.getElementById("numeroFinal");
let numeroPasso = document.getElementById("numeroPasso");
let resultado = document.getElementById("resultado");

let btnContar = document.getElementById("contar");
btnContar.addEventListener("click", contar);

function contar() {
  if (
    numeroInicial.value.length == 0 ||
    numeroFinal.value.length == 0 ||
    numeroPasso.value.length == 0
  ) {
    alert("Algum campo que não foi preenchido, confira todos os campos!");
  } else {
    let nInicial = Number(numeroInicial.value);
    let nFinal = Number(numeroFinal.value);
    let nPasso = Number(numeroPasso.value);

    if (nPasso <= 0) {
      alert("[Erro] O número 0 ou número negativo não são permitidos.");
    }
    if (nInicial < nFinal) {
      for (let contador = nInicial; contador <= nFinal; contador += nPasso) {
        resultado.innerHTML += ` ${contador}, `;
      }
    } else {
      for (let contador = nInicial; contador >= nFinal; contador -= nPasso) {
        resultado.innerHTML += ` ${contador}, `;
      }
    }
  }
}
