// utils.js
export function validarCampos(nome, email) {
    return nome.trim() !== "" && email.trim() !== "";
}

export function criarElementoCliente(cliente, onDelete) {
    const item = document.createElement("li");
    item.textContent = `${cliente.nome} - ${cliente.email}`;

    const btnExcluir = document.createElement("button");
    btnExcluir.textContent = "Excluir";
    btnExcluir.addEventListener("click", () => onDelete(cliente.id));

    item.appendChild(btnExcluir);
    return item;
}