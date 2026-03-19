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