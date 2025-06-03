let agora = new Date();//* Pegar as informações do seu sitema como data, hora, minutos
let hora = agora.getHours();//* Pegar exatamente a hora
let minutos = agora.getMinutes()
console.log(`Agora são exatamente ${hora} horas e ${minutos} minutos ou ${hora}:${minutos}`);
if (hora < 12) {
  console.log("Bom dia!");
} else if (hora <= 18) {
  console.log("Boa Tarde!");
} else {
  console.log("Boa noite!");
}
