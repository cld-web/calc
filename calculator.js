// Função para buscar endereço pelo CEP usando a API ViaCEP
async function buscarEndereco() {
  const cep = document.getElementById("cep").value.replace(/\D/g, "");
  if (cep.length !== 8) {
    alert("Digite um CEP válido com 8 dígitos.");
    return;
  }

  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();

    if (data.erro) {
      alert("CEP não encontrado.");
      return;
    }

    // Preenche os campos do formulário
    document.getElementById("logradouro").value = data.logradouro || "";
    document.getElementById("bairro").value = data.bairro || "";
    document.getElementById("cidade").value = data.localidade || "";
    document.getElementById("estado").value = data.uf || "";
  } catch (error) {
    alert("Erro ao buscar o CEP.");
    console.error(error);
  }
}

// Função para salvar os dados no Web Storage
function salvarDados() {
  const dados = {
    nome: document.getElementById("nome").value,
    cep: document.getElementById("cep").value,
    logradouro: document.getElementById("logradouro").value,
    bairro: document.getElementById("bairro").value,
    cidade: document.getElementById("cidade").value,
    estado: document.getElementById("estado").value,
  };

  localStorage.setItem("formularioEndereco", JSON.stringify(dados));
  alert("Dados salvos com sucesso!");
}

// Função para carregar os dados salvos
function carregarDados() {
  const dadosSalvos = localStorage.getItem("formularioEndereco");
  if (dadosSalvos) {
    const dados = JSON.parse(dadosSalvos);
    document.getElementById("nome").value = dados.nome || "";
    document.getElementById("cep").value = dados.cep || "";
    document.getElementById("logradouro").value = dados.logradouro || "";
    document.getElementById("bairro").value = dados.bairro || "";
    document.getElementById("cidade").value = dados.cidade || "";
    document.getElementById("estado").value = dados.estado || "";
  }
}

// Carrega os dados automaticamente ao abrir a página
window.onload = carregarDados;