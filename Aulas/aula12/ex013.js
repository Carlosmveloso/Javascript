var agora = new Date() //Pegar a hora do sistema
var hora = agora.getHours() //Aqui só pegou a hora do sistema
console.log(`Agora são exatamente ${hora} horas. `);
if (hora < 12) {
    console.log("Bom Dia!");
    
}else if (hora <= 18) {
    console.log("Boa Tarde!");
    
}else {
    console.log("Boa Noite!");
    
}

