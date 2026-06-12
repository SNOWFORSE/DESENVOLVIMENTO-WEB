function calcularTotal() {
    console.log("Calculando...");
    let preco = document.querySelector(".preco");
    let quantidade = document.querySelector(".qtd");
    let total = preco.value * quantidade.value;
    document.querySelector(".total")
    .innerText="R$ "+ total;
}