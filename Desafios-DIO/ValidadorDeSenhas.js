function validadorDeSenha(senha) {
    // A senha deve conter, no mínimo, uma letra maiúscula, uma letra minúscula e um número;
    // A mesma não pode ter nenhum caractere de pontuação, acentuação ou espaço;
    // Além disso, a senha pode ter de 6 a 32 caracteres.

    let maiuscula = /[A-Z]/; // deve conter ao menos uma letra maiúscula
    let minuscula = /[a-z]/;
    let numero = /\d/;
    let verificaTamanho; // deve conter de 6 a 32 caracteres
    let senhaValida = false;
    let verifica = [...senha];

    // regex 

    return senhaValida;
}

let senha = "";

do {
    senha = gets();
    if (senha !== "") {
        let valido = validadorDeSenha(senha);
        console.log("Senha " + (valido ? "valida." : "invalida."));
    }
} while (senha !== "");