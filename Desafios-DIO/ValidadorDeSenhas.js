function validadorDeSenha(senha) {
    // deve conter de 6 a 32 caracteres, incluindo, no mínimo, uma letra maiúscula, uma letra minúscula e um número
    // não pode conter nenhum caractere de pontuação, acentuação ou espaço

    const requisitos = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?!.*[_])\w{6,32}$/;

    return requisitos.test(senha);
}

let senha = gets();

while (senha !== "") {
    console.log("Senha " + (validadorDeSenha(senha) ? "valida." : "invalida."));
    senha = gets();
};