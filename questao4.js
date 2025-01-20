
function verificarMaioridade(anoNascimento) {
    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - anoNascimento; 

    if (idade >= 18) {
        return "Você já é maior de idade.";
    } else {
        return "Você ainda não é maior de idade.";
    }
}

const anoNascimento = prompt("Digite o ano de nascimento:");
const resultado = verificarMaioridade(anoNascimento);
alert(resultado);
