// src/App.jsx
import { useState } from "react";
import Catalogo from "./pages/Catalogo";
import FormularioProduto from "./components/FormularioProduto";

export default function App() {
  const [produtos, setProdutos] = useState([]);

  const adicionarProduto = (novoProduto) => {
    setProdutos([...produtos, novoProduto]);
  };

  return (
    <div>
      <FormularioProduto onAddProduto={adicionarProduto} />
      <Catalogo produtosExternos={produtos} />
    </div>
  );
}