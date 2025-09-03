let nome = prompt("Qual é o seu nome?");

// Exibe a saudação com o nome
if (nome) {
    document.getElementById("greeting").textContent = `Olá, ${nome}! Bem-vindo(a)!`;
} else {
    document.getElementById("greeting").textContent = "Olá! Bem-vindo(a)!";
}