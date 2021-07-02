for (let casos = parseInt(gets()); casos > 0; casos-- ) {
    // recebe a linha de palavras
    let entrada = gets().split(" ");

    // ordena as palavras
    entrada.sort(function(a, b){
        // ASC  -> a.length - b.length
        // DESC -> b.length - a.length
        return b.length - a.length;
      });
    
    // cria uma nova string com as palavras em ordem
    let saida = entrada.join(" ");
    
    console.log(saida)
}