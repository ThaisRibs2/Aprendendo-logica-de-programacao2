let valor = prompt("Digite um valor:");

valor = parseFloat(valor);
if (isNaN(valor)) {
    alert("Por favor, digite um número válido.");
} else {
    alert("R$ " + valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }));
}
alert("valor formatado: " + valorFormatado);


