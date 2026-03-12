// app.js
import { Cliente } from "./classes.js";
import { validarCampos, criarElementoCliente } from "./utils.js";

const API_BASE = "https://crudcrud.com/api/dad9e48a7d6248e4af068a4c7ab0e9f8/clientes";

async function cadastrarCliente() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    if (!validarCampos(nome, email)) {
        alert("Preencha todos os campos!");
        return;
    }

    const cliente = new Cliente(nome, email);

    try {
        await fetch(API_BASE, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(cliente)
        });
        listarClientes();
    } catch (error) {
        console.error("Erro ao cadastrar cliente:", error);
    }
}

async function listarClientes() {
    try {
        const response = await fetch(API_BASE);
        const clientes = await response.json();

        const lista = document.getElementById("listaClientes");
        lista.innerHTML = "";

        clientes
            .map(c => new Cliente(c.nome, c.email, c._id))
            .forEach(cliente => {
                const item = criarElementoCliente(cliente, excluirCliente);
                lista.appendChild(item);
            });
    } catch (error) {
        console.error("Erro ao listar clientes:", error);
    }
}

async function excluirCliente(id) {
    try {
        await fetch(`${API_BASE}/${id}`, { method: "DELETE" });
        listarClientes();
    } catch (error) {
        console.error("Erro ao excluir cliente:", error);
    }
}

// Eventos
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btnCadastrar")
        .addEventListener("click", cadastrarCliente);

    listarClientes();
});