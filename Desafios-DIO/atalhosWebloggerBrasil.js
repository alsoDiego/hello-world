let texto = gets();
const italico = /\_(.*?)\_/gim;
const negrito = /\*(.*?)\*/gim;

function parseMarkdown(texto) {
    const html = texto.replace(italico, "<i>$1</i>").replace(negrito, "<b>$1</b>");

    return html.trim();
}

let contador = 0;

do {
    console.log(parseMarkdown(texto));
    texto = gets();
    contador++;
} while (contador < 60);