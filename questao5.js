
function celsiusParaFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitParaCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}


let escolha = prompt("Digite 'C' para converter de Celsius para Fahrenheit ou 'F' para converter de Fahrenheit para Celsius:");

let temperatura = parseFloat(prompt("Digite a temperatura que deseja converter:"));
let resultado;

if (escolha.toUpperCase() === 'C') {
    resultado = celsiusParaFahrenheit(temperatura);
    alert(`${temperatura}°C é igual a ${resultado.toFixed(2)}°F`);
} else if (escolha.toUpperCase() === 'F') {
    resultado = fahrenheitParaCelsius(temperatura);
    alert(`${temperatura}°F é igual a ${resultado.toFixed(2)}°C`);
} else {
    alert("Escolha inválida!");
}
