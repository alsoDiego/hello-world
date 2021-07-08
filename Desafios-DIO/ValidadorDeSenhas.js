function validadorDeSenha(senha) {
    // A senha deve conter, no mínimo, uma letra maiúscula, uma letra minúscula e um número;
    // A mesma não pode ter nenhum caractere de pontuação, acentuação ou espaço;
    // Além disso, a senha pode ter de 6 a 32 caracteres.

    let maiusculas = /[A-Z]/; // deve conter ao menos uma letra maiúscula
    let minusculas = /[a-z]/;
    let numeros = /\d/;
    let pontosAcentosEspaco = /[\wÀ-ú]/;
    let verificaTamanho; // deve conter de 6 a 32 caracteres
    let senhaValida = false;
    let verifica = [...senha];

    // regex /[A-Z][a-z]\d[\wÀ-ú]/

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