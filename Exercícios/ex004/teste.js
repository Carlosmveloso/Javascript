let numeroDigitado = document.getElementById("numero");
let selectArea = document.getElementById("seltab");
let calcularTabuada = document.getElementById("calcular");
calcularTabuada.addEventListener("click", calcular);

function calcular() {
  if (numeroDigitado.value.length == 0) {
    alert("Os dados não foram digitados!");
  } else {
    let nDigitado = Number(numeroDigitado.value);
    let multiplicador = 1;
    selectArea.innerHTML = ``;
    while (multiplicador <= 10) {
      let multiplicacao = document.createElement("option");
      multiplicacao.text = `${nDigitado} X ${multiplicador} = ${
        nDigitado * multiplicador
      }`;
      selectArea.value = `tab${multiplicador}`;
      selectArea.appendChild(multiplicacao);
      multiplicador++;
    }
  }
}
