
let numero1 = prompt("Digite o primeiro número:");
let numero2 = prompt("Digite o segundo número:");


numero1 = Number(numero1);
numero2 = Number(numero2);

if (numero1 % numero2 === 0 || numero2 % numero1 === 0) {
    console.log("Pelo menos um dos números é múltiplo do outro");
} else {
    console.log("Nenhum dos números é múltiplo do outro");
}
