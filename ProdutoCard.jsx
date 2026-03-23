// src/components/ProdutoCard.jsx
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