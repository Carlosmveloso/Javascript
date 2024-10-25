var idade = 60
console.log(`Você tem ${idade} anos`);
if (idade >= 18 && idade < 65) { // - && significa "e"
    console.log("Voto obrigatório"); 
}else if (idade >= 16 || idade > 65) { // - || significa "ou"
    console.log("Voto facultativo");
}else{
    console.log("Não pode votar");
}