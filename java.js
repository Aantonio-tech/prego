class Prego {
    constructor(tamanho, quantidade, precoUnitario) {
        this.tamanho = tamanho;
        this.quantidade = quantidade;
        this.precoUnitario = precoUnitario;
    }

    // Calcula o valor total
    calcularTotal() {
        return this.quantidade * this.precoUnitario;
    }

    // Exibe informações
    exibirInfo() {
        console.log("Tamanho do prego:", this.tamanho);
        console.log("Quantidade:", this.quantidade);
        console.log("Preço unitário: R$", this.precoUnitario);
        console.log("Valor total: R$", this.calcularTotal());
    }
}

// Criando objetos
const prego1 = new Prego("Pequeno", 100, 0.10);
const prego2 = new Prego("Grande", 50, 0.25);

// Exibindo dados
console.log("=== Estoque de Pregos ===");
prego1.exibirInfo();

console.log("------------------------");

prego2.exibirInfo();