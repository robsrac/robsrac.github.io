// Função para calcular o tempo desde 20/12/2015 até hoje
function atualizarContador() {
    const dataInicio = new Date("2015-12-20");
    const dataAtual = new Date();
    const diferenca = dataAtual - dataInicio;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);

    document.getElementById("tempo").textContent = 
        `${dias} dias, ${horas} horas, ${minutos} minutos, ${segundos} segundos`;
}

// Atualizar o contador a cada segundo
setInterval(atualizarContador, 1000);
atualizarContador();
