const BANDEIRADA = 5.50;
const BANDEIRA1 = 4.00;
const BANDEIRA2 = 5.20;

function calcular() {
    let kms = parseFloat(document.getElementById('km').value);
    let bandeiraSelecionada = document.querySelector('input[name="bandeira"]:checked').value;

    let total;
    if (bandeiraSelecionada === "bandeira1") {
        total = BANDEIRADA + (BANDEIRA1 * kms);
    } else {
        total = BANDEIRADA + (BANDEIRA2 * kms);
    }

    document.getElementById('resultado').textContent = "Valor da corrida: R$" + total.toFixed(2);
}
