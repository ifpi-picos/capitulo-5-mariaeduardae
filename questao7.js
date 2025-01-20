function classificarTriangulo(a, b, c) {

    if (a + b > c && a + c > b && b + c > a) {
      if (a === b && b === c) {
        return "Triângulo Equilátero";
      } else if (a === b || a === c || b === c) {
        return "Triângulo Isósceles";
      } else {
        return "Triângulo Escaleno";
      }
    } else {
      return "Valores inválidos para formar um triângulo";
    }
  }
  

  const ladoA = prompt("Digite o valor do lado A:");
  const ladoB = prompt("Digite o valor do lado B:");
  const ladoC = prompt("Digite o valor do lado C:");
  
  const resultado = classificarTriangulo(Number(ladoA), Number(ladoB), Number(ladoC));
  alert(resultado);
  