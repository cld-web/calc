// App.js
import React, { useState } from "react";
import { CardProduto } from "./CardProduto";

function App() {
  const [adicionado, setAdicionado] = useState(false);

  const handleAdicionar = () => {
    setAdicionado(!adicionado);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <CardProduto
        nome="Notebook Dell Inspiron"
        preco="3.499,00"
        adicionado={adicionado}
        onAdicionar={handleAdicionar}
      />
    </div>
  );
}

export default App;