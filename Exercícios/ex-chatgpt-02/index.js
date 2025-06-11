let todosOsNomes = [];
let nome = prompt("Digite um nome (carlos para sair)");

while (nome.toLowerCase() !== 'carlos') {
  todosOsNomes.push(nome);
  nome = prompt("Digite um nome (carlos para sair)".toLowerCase());
}

alert(`Todos os nomes foram: ${todosOsNomes}`);
