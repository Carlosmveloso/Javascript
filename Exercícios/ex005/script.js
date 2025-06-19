let numeroDigitado = document.getElementById("numeroDigitado");
let listaDeNumeros = document.getElementById("listaDeNumeros");
let resultado = document.getElementById("res");
let todosOsNumeros = [];

let btnAdicionar = document.getElementById("adicionar");
btnAdicionar.addEventListener("click", adicionar);

function numeroValido(numero) {
  if (Number(numero) >= 1 && Number(numero) <= 100) {
    return true;
  } else {
    return false;
  }
}

function dentroDaLista(numero, listaDeTodosOsNumeros) {
  if (listaDeTodosOsNumeros.indexOf(Number(numero)) != -1) {
    return true;
  } else {
    return false;
  }
}

function adicionar() {
  if (
    numeroValido(numeroDigitado.value) &&
    !dentroDaLista(numeroDigitado.value, todosOsNumeros)
  ) {
    todosOsNumeros.push(Number(numeroDigitado.value));
    let item = document.createElement("option");
    item.text = `Valor ${numeroDigitado.value} adicionado`;
    listaDeNumeros.appendChild(item);
    resultado.innerHTML = ``;
  } else {
    alert("Valor inválido ou já encontrado na lista!");
  }
  numeroDigitado.value = "";
  numeroDigitado.focus();
}

let btnFinalizar = document.getElementById("finalizar");
btnFinalizar.addEventListener("click", finalizar);

function finalizar() {
  if (todosOsNumeros.length == 0) {
    alert("Adicionar algum valor antes de verificar");
  } else {
    let totalDeElementos = todosOsNumeros.length;

    let maiorNumero = todosOsNumeros[0];
    let menorNumero = todosOsNumeros[0];
    let soma = 0;
    let media = 0;
    for (let posicao in todosOsNumeros) {
      soma += todosOsNumeros[posicao];
      if (todosOsNumeros[posicao] > maiorNumero)
        maiorNumero = todosOsNumeros[posicao];
      if (todosOsNumeros[posicao] < menorNumero)
        menorNumero = todosOsNumeros[posicao];
    }
    media = soma / totalDeElementos;
    resultado.innerHTML = ``;
    resultado.innerHTML += `<p>Ao todo temos ${totalDeElementos} números cadastrados.</p>`;
    resultado.innerHTML += `<p>O maior número informado é ${maiorNumero}</p>`;
    resultado.innerHTML += `<p>O menor número informado é ${menorNumero}</p>`;
    resultado.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`;
    resultado.innerHTML += `<p>A média de todos esse números é ${media}</p>`;
  }
}
