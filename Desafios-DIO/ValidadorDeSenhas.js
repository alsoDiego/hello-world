/* var letra = "P";
if (letrasMaiusculas.test(letra)) {
    console.log('sucesso');
} else {
    console.log('erro');
}

var senha = "teste12345";
if (senha.length == 8) {
    console.log('sucesso');
} else {
    console.log('erro');
}

function senhaValida(p) {
    var retorno = false;
    var letrasMaiusculas = /[A-Z]/;
    var letrasMinusculas = /[a-z]/;
    var numeros = /[0-9]/;
    var caracteresEspeciais = /[!|@|#|$|%|^|&|*|(|)|-|_]/;
    if (p.length > 8) {
        return retorno;
    }
    if (p.length < 8) {
        return retorno;
    }
    var auxMaiuscula = 0;
    var auxMinuscula = 0;
    var auxNumero = 0;
    var auxEspecial = 0;
    for (var i = 0; i < p.length; i++) {
        if (letrasMaiusculas.test(p[i]))
            auxMaiuscula++;
        else if (letrasMinusculas.test(p[i]))
            auxMinuscula++;
        else if (numeros.test(p[i]))
            auxNumero++;
        else if (caracteresEspeciais.test(p[i]))
            auxEspecial++;
    }
    if (auxMaiuscula > 0) {
        if (auxMinuscula > 0) {
            if (auxNumero > 0) {
                if (auxEspecial) {
                    retorno = true;
                }
            }
        }
    }
    return retorno;
}
console.log(senhaValida("test1234"));
console.log(senhaValida("Test123@"));
console.log(senhaValida("Teste123@"));
*/


//// código fornecido

function validadorDeSenha(senha) {
  // Escreva aqui a lógica para validar a senha
  return false;
}

let senha = "";

do {
  senha = gets();
  if (senha !== "") {
    let valido = validadorDeSenha(senha);
    console.log("Senha " + (valido ? "valida." : "invalida."));    
  }
} while (senha !== "");

/// código modificado

function validadorDeSenha(senha) {
    let deveConter =
        /"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,32}$"/;
        // de 6 a 32 caracteres, incluindo, no mínimo, uma letra maiúscula, uma letra minúscula e um número

    let naoDeveConter = /[\wÀ-ú]\d[,.;:]/; // não pode ter nenhum caractere de pontuação, acentuação ou espaço

    let senhaValida = false;

    if (deveConter.test(senha)) {
        if (!naoDeveConter.test(senha)) {
            senhaValida = true;
        }
    }

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