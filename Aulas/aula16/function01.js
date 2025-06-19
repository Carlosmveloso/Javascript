function parimpar(n) {
  if (n % 2 == 0) {
    return "Par!";
  } else {
    return "Ímpar!";
  }
}

let numero = parimpar(3);
console.log(numero);
