class Parquimetro {
    constructor() {
        // Definição das tarifas (valor mínimo para cada tempo)
        this.tarifas = [
            { valor: 3.00, tempo: 120 },
            { valor: 1.75, tempo: 60 },
            { valor: 1.00, tempo: 30 }
        ];
    }

    processarPagamento(valorInformado) {
        if (valorInformado < 1.00) {
            throw new Error("Valor insuficiente. Mínimo R$ 1,00.");
        }

        let tempoPermanencia = 0;
        let valorCusto = 0;
        let troco = 0;

        // Encontra a maior tarifa aplicável ao valor inserido
        for (const tarifa of this.tarifas) {
            if (valorInformado >= tarifa.valor) {
                tempoPermanencia = tarifa.tempo;
                valorCusto = tarifa.valor;
                troco = valorInformado - valorCusto;
                break; 
            }
        }

        return {
            tempo: tempoPermanencia,
            troco: troco.toFixed(2)
        };
    }
}

// Orquestrador da Interface (UI)
const interfaceParquimetro = {
    maquina: new Parquimetro(),

    calcular() {
        const input = document.getElementById('valor');
        const display = document.getElementById('resultado');
        const valor = parseFloat(input.value);

        try {
            const resultado = this.maquina.processarPagamento(valor);
            display.innerHTML = `
                <div class="sucesso">
                    <p><strong>Tempo:</strong> ${resultado.tempo} minutos</p>
                    <p><strong>Troco:</strong> R$ ${resultado.troco}</p>
                </div>
            `;
        } catch (erro) {
            display.innerHTML = `<p class="erro">${erro.message}</p>`;
        }
    }
};