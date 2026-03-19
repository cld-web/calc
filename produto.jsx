/src
  /components
    ProdutoCard.jsx
  /pages
    Catalogo.jsx
  /assets
    (imagens, ícones, etc.)
  App.jsx
  main.jsx
  
import React from "react";

export default function ProdutoCard({ nome, preco, imagem, descricao }) {
  return (
    <div className="produto-card">
      <img src={imagem} alt={nome} width="150" />
      <h2>{nome}</h2>
      <p>{descricao}</p>
      <strong>R$ {preco}</strong>
    </div>
  );
}
// src/pages/Catalogo.jsx
import React, { useState, useEffect } from "react";
import ProdutoCard from "../components/ProdutoCard";

export default function Catalogo() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulação de API com useEffect
  useEffect(() => {
    setTimeout(() => {
      setProdutos([
        {
          nome: "Notebook",
          preco: 3500,
          descricao: "Notebook rápido e leve",
          imagem: "https://via.placeholder.com/150"
        },
        {
          nome: "Smartphone",
          preco: 2000,
          descricao: "Celular com ótima câmera",
          imagem: "https://via.placeholder.com/150"
        }
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  // Formulário controlado
  const [novoProduto, setNovoProduto] = useState({
    nome: "",
    preco: "",
    descricao: "",
    imagem: "https://via.placeholder.com/150"
  });

  const handleChange = (e) => {
    setNovoProduto({ ...novoProduto, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!novoProduto.nome || !novoProduto.preco || !novoProduto.descricao) {
      alert("Preencha todos os campos obrigatórios!");
      return;
    }
    setProdutos([...produtos, novoProduto]);
    setNovoProduto({ nome: "", preco: "", descricao: "", imagem: "https://via.placeholder.com/150" });
  };

  return (
    <div>
      <h1>Catálogo de Produtos</h1>

      {loading ? (
        <p>Carregando...</p>
      ) : (
        <div style={{ display: "flex", gap: "20px" }}>
          {produtos.map((p, index) => (
            <ProdutoCard key={index} {...p} />
          ))}
        </div>
      )}

      <h2>Adicionar Produto</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          placeholder="Nome do produto"
          value={novoProduto.nome}
          onChange={handleChange}
        />
        <input
          type="number"
          name="preco"
          placeholder="Preço"
          value={novoProduto.preco}
          onChange={handleChange}
        />
        <textarea
          name="descricao"
          placeholder="Descrição"
          value={novoProduto.descricao}
          onChange={handleChange}
        />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
}
// src/App.jsx
import React from "react";
import Catalogo from "./pages/Catalogo";

function App() {
  return <Catalogo />;
}

export default App;
// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);