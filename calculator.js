// Seleção dos elementos
const cepInput = document.querySelector('#cep');
const formulario = document.querySelector('#cadastroForm');

// Função para preencher os campos com os dados da API
const preencherFormulario = (endereco) => {
    document.querySelector('#logradouro').value = endereco.logradouro || '';
    document.querySelector('#bairro').value = endereco.bairro || '';
    document.querySelector('#cidade').value = endereco.localidade || '';
    document.querySelector('#uf').value = endereco.uf || '';
};

// Evento para buscar o CEP quando o usuário termina de digitar (blur)
cepInput.addEventListener('blur', async () => {
    const cep = cepInput.value.replace(/\D/g, ''); // Remove caracteres não numéricos

    if (cep.length === 8) {
        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const dados = await response.json();

            if (dados.erro) {
                alert('CEP não encontrado!');
            } else {
                preencherFormulario(dados);
            }
        } catch (error) {
            console.error('Erro ao buscar o CEP:', error);
            alert('Erro ao conectar com o serviço de CEP.');
        }
    }
});

// Evento de submissão do formulário para salvar no LocalStorage
formulario.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o recarregamento da página

    const dadosUsuario = {
        cep: document.querySelector('#cep').value,
        logradouro: document.querySelector('#logradouro').value,
        bairro: document.querySelector('#bairro').value,
        cidade: document.querySelector('#cidade').value,
        uf: document.querySelector('#uf').value,
        numero: document.querySelector('#numero').value
    };

    // Salvando no Web Storage (LocalStorage)
    // Transformamos o objeto em String JSON, pois o Storage só aceita strings
    localStorage.setItem('enderecoSalvo', JSON.stringify(dadosUsuario));

    alert('Dados salvos com sucesso no navegador!');
    formulario.reset();
});