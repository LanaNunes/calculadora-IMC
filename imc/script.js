function calcularIMC() {
    // Obter os valores de altura e peso
    let altura = parseFloat(document.getElementById("Altura").value);
    let peso = parseFloat(document.getElementById("Peso").value);
    let resultadoDiv = document.getElementById("Resultado");

    // Verificar se os valores são válidos
    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        resultadoDiv.innerHTML = "<div class='alert alert-danger'>Por favor, insira valores válidos para altura e peso.</div>";
        return;
    }

    // Calcular o IMC
    let imc = peso / (altura * altura);
    let classificacao = "";

    // Determinar a classificação do IMC
    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        classificacao = "Sobrepeso";
    } else {
        classificacao = "Obesidade";
    }

    // Exibir o resultado
    resultadoDiv.innerHTML = `<div class='alert alert-info'>Seu IMC é ${imc.toFixed(2)} (${classificacao}).</div>`;
}




