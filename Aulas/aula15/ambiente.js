const btnTestar = document.getElementById("testar");
btnTestar.addEventListener("click", testar);

function testar() {
  let num = ['Duster', 'Spin', 'Flashback', 'Onix', 'Polo'];
  num.push(6)

  console.log(num.sort());
}
