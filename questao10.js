
let numero = prompt("Por favor, insira um número positivo:");

numero = parseInt(numero);

let i = 0;

while (i <= numero) {
    if (i % 2 === 0) {
        console.log(i);
    }
    i++;
}
