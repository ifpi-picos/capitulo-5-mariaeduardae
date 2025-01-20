
const numero = parseInt(prompt("Digite um número positivo:"));

if (numero > 0) {
  console.log("Números ímpares de 0 até " + numero + ":");
  
  for (let i = 1; i <= numero; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
} else {
  console.log("Por favor, digite um número positivo.");
}
