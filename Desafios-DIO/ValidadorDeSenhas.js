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