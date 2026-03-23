// src/components/FormularioProduto.jsx
import { useState } from "react";

export default function FormularioProduto({ onAddProduto }) {
  const [form, setForm] = useState({ nome: "", preco: "", descricao: "", imagem: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nome || !form.preco || !form.descricao) {
      alert("Preencha os campos obrigatórios!");
      return;
    }
    onAddProduto(form);
    setForm({ nome: "", preco: "", descricao: "", imagem: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="nome" placeholder="Nome do produto" value={form.nome} onChange={handleChange} />
      <input name="preco" placeholder="Preço" value={form.preco} onChange={handleChange} />
      <input name="descricao" placeholder="Descrição" value={form.descricao} onChange={handleChange} />
      <input name="imagem" placeholder="URL da imagem" value={form.imagem} onChange={handleChange} />
      <button type="submit">Adicionar Produto</button>
    </form>
  );
}