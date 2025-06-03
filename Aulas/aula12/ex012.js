let idade = 18;
console.log(`Você tem ${idade} anos.`);

if (idade >= 18 && idade < 70) {
    console.log('Voto Obrigatório');
} else if (idade >= 16) {
    console.log('Voto facultativo');
} else {
    console.log('Proibido votar');
}