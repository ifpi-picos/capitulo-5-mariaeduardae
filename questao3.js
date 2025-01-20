function calcularMedia(nota1, nota2, nota3) {
    const media = (nota1 + nota2 + nota3) / 3;
    return media;
  }
  
  function verificarAprovacao(media) {
    if (media >= 7) {
      return "Aprovado";
    } else {
      return "Reprovado";
    }
  }
  
  
  const nota1 = 8;
  const nota2 = 5;
  const nota3 = 2;
  const media = calcularMedia(nota1, nota2, nota3);
  const resultado = verificarAprovacao(media);
  
  console.log("Média:", media.toFixed(2));
  console.log("Resultado:", resultado);
  