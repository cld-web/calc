// CardProduto.js
import React from "react";
import styled from "styled-components";

// 🔹 Container principal do card
const CardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  width: 250px;
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  text-align: center;
`;

// 🔹 Nome do produto
const NomeProduto = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 8px;
  color: #333;
`;

// 🔹 Preço
const PrecoProduto = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 12px;
  color: #198754;
`;

// 🔹 Botão com estilização dinâmica
const BotaoCarrinho = styled.button`
  padding: 10px 16px;
  border: none;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  color: #fff;
  background-color: ${({ adicionado }) =>
    adicionado ? "#198754" : "#6c757d"};
  transition: background-color 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;

export const CardProduto = ({ nome, preco, adicionado, onAdicionar }) => {
  return (
    <CardContainer>
      <NomeProduto>{nome}</NomeProduto>
      <PrecoProduto>R$ {preco}</PrecoProduto>
      <BotaoCarrinho adicionado={adicionado} onClick={onAdicionar}>
        {adicionado ? "Adicionado" : "Adicionar ao carrinho"}
      </BotaoCarrinho>
    </CardContainer>
  );
};