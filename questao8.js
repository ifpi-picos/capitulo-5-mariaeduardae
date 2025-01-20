// Função para exibir o menu
function exibirMenu() {
    console.log("Menu:");
    console.log("1. Pizza - R$ 30,00");
    console.log("2. Hambúrguer - R$ 20,00");
    console.log("3. Salada - R$ 15,00");
    console.log("4. Macarrão - R$ 25,00");
  }
  
  function escolherPrato(opcao) {
    switch (opcao) {
      case 1:
        console.log("Você escolheu Pizza. Preço: R$ 30,00. Descrição: Pizza de queijo e tomate.");
        break;
      case 2:
        console.log("Você escolheu Hambúrguer. Preço: R$ 20,00. Descrição: Hambúrguer com queijo, alface e tomate.");
        break;
      case 3:
        console.log("Você escolheu Salada. Preço: R$ 15,00. Descrição: Salada fresca com alface, tomate e cenoura.");
        break;
      case 4:
        console.log("Você escolheu Macarrão. Preço: R$ 25,00. Descrição: Macarrão ao molho de tomate e manjericão.");
        break;
      default:
        console.log("Opção inválida. Por favor, escolha uma opção do menu.");
    }
  }
  
  exibirMenu();
  
  var opcaoEscolhida = 2;
  escolherPrato(opcaoEscolhida);
  