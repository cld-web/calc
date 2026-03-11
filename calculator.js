<script>
    const API_BASE = "https://crudcrud.com/api/dad9e48a7d6248e4af068a4c7ab0e9f8";

    async function cadastrarCliente() {
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;

        if (!nome || !email) {
            alert("Preencha todos os campos!");
            return;
        }

        const cliente = { nome, email };

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

            clientes.forEach(cliente => {
                const item = document.createElement("li");
                item.textContent = `${cliente.nome} - ${cliente.email}`;

                const btnExcluir = document.createElement("button");
                btnExcluir.textContent = "Excluir";
                btnExcluir.onclick = () => excluirCliente(cliente._id);

                item.appendChild(btnExcluir);
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

    window.onload = listarClientes;
</script>