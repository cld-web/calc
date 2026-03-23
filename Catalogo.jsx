// src/pages/Catalogo.jsx
import { useState, useEffect } from "react";
import ProdutoCard from "../components/ProdutoCard";

export default function Catalogo() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulação de API
  useEffect(() => {
    setTimeout(() => {
      setProdutos([
        { nome: "Notebook", preco: 3500, descricao: "Notebook rápido", imagem: "https://via.placeholder.com/150" },
        { nome: "Celular", preco: 2000, descricao: "Smartphone moderno", imagem: "https://via.placeholder.com/150" }
      ]);
      setLoading(false);
    }, 2000);
  }, []);

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
    </div>
  );
}