
function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

function classificarIMC(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        return "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        return "Sobrepeso";
    } else {
        return "Obesidade";
    }
}

let altura = parseFloat(prompt("Digite sua altura em metros (ex: 1.75):"));
let peso = parseFloat(prompt("Digite seu peso em quilogramas (ex: 70):"));

let imc = calcularIMC(peso, altura);

let classificacao = classificarIMC(imc);

alert("Seu IMC é " + imc.toFixed(2) + " e sua classificação é: " + classificacao);
