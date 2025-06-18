const btnTestar = document.getElementById("testar");
btnTestar.addEventListener("click", testar);

function testar() {
  let numeros = [1, 3, 4, 6, 7, 9, 12, 14]

  for (let posicao = 0; posicao < numeros.length; posicao++) {
    console.log(`A posição ${posicao} tem o valor ${numeros[posicao]}`);
  }

  for (let posicao in numeros) {
    console.log(num[posicao]);
    
  }
}