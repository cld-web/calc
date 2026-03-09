
// 1. Configurações Iniciais ao carregar a página
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativasRestantes = 10;

// Capturando os elementos do HTML para manipular via JS
const campoPalpite = document.getElementById('palpite');
const botaoChutar = document.getElementById('btnChutar');
const mensagemFeedback = document.getElementById('mensagemFeedback');
const displayTentativas = document.getElementById('tentativas');

// Atualiza o texto inicial de tentativas na tela
displayTentativas.textContent = tentativasRestantes;

// 2. Lógica do Clique no Botão
botaoChutar.addEventListener('click', function() {
    const chute = parseInt(campoPalpite.value);

    // Validação: Verifica se é um número entre 1 e 100
    if (isNaN(chute) || chute < 1 || chute > 100) {
        mensagemFeedback.textContent = "Por favor, digite um número válido entre 1 e 100.";
        mensagemFeedback.style.color = "orange";
        return; // Interrompe a função aqui
    }

    // Decrementar contador
    tentativasRestantes--;
    displayTentativas.textContent = tentativasRestantes;

    // 3. Comparação do Palpite
    if (chute === numeroSecreto) {
        finalizarJogo(`🎉 Parabéns! Você acertou! O número era ${numeroSecreto}.`, "green");
    } else if (tentativasRestantes === 0) {
        finalizarJogo(`❌ Você perdeu! O número secreto era ${numeroSecreto}.`, "red");
    } else {
        // Dicas para o jogador
        if (chute < numeroSecreto) {
            mensagemFeedback.textContent = "O número secreto é MAIOR!";
        } else {
            mensagemFeedback.textContent = "O número secreto é MENOR!";
        }
        mensagemFeedback.style.color = "blue";
    }

    // Limpa o campo de input e foca nele para o próximo chute
    campoPalpite.value = '';
    campoPalpite.focus();
});

// Função auxiliar para encerrar o jogo
function finalizarJogo(msg, cor) {
    mensagemFeedback.textContent = msg;
    mensagemFeedback.style.color = cor;
    campoPalpite.disabled = true; // Desativa o input
    botaoChutar.disabled = true;  // Desativa o botão
}