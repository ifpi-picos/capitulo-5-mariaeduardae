
function calcularFatorial(num) {
    if (num < 0) {
        return "O fatorial não é definido para números negativos.";
    } else if (num === 0 || num === 1) {
        return 1;
    } else {
        let fatorial = 1;
        for (let i = 1; i <= num; i++) {
            fatorial *= i;
        }
        return fatorial;
    }
}

let numero = prompt("Digite um número para calcular seu fatorial:");

numero = parseInt(numero);

let resultado = calcularFatorial(numero);
alert("O fatorial de " + numero + " é: " + resultado);
