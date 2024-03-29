/*
Desafio
    Nas férias de Dezembro, várias escolas se organizam e levam seus alunos para um acampamento de férias por uma semana. Nestes acampamentos os alunos são divididos em cabanas coletivos por gênero e idade, sempre com um adulto que, além de dormir com o grupo no cabana, também são responsáveis por criar e executar várias atividades, como por exemplo jogos, excursões, Gincanas Noturnas, etc.

    No primeiro dia foi realizada uma gincana em que a atividade constituia em agrupar os alunos em um círculo (organizado no sentido anti-horário) do qual seriam retiradas um a um até que sobrasse apenas um aluno, que seria o vencedor.

    No momento em que entra no círculo, cada aluno recebe uma pequena ficha que contém um valor de 1 a 500. Depois que o círculo é formado, conta-se, iniciando no aluno que está ao lado da primeira que entrou no círculo, o número correspondente à ficha que ele detém. O aluno onde o número contado cair deve ser retirado do grupo, e a contagem inicia novamente segundo a ficha do aluno que acabou de ser eliminado. Para ficar mais interessante, quando o valor que consta na ficha é par, a contagem é feita no sentido horário e quando o valor que consta na ficha é ímpar, a contagem é feita no sentido anti-horário.

    Desenvolva um programa para que no próximo evento o responsável pela brincadeira saiba previamente qual criança irá ser a vencedora de cada grupo, com base nas informações fornecidas.

Entrada
    A entrada contém vários casos de teste. A primeira linha de cada caso de teste contém um inteiro N (1 ≤ N ≤ 100), indicando a quantidade de alunos que farão parte de cada círculo. Em seguida, as N linhas de cada caso de teste conterão duas informações, o Nome e o Valor (1 ≤ Valor ≤ 500) que consta na ficha de cada aluno, separados por um espaço, na ordem de entrada na formação do círculo inicial.

    OBS: O Nome de cada aluno não deverá ultrapassar 30 caracteres e contém apenas letras maiúsculas e minúsculas, sem acentos, e o caractere “_”. O final da entrada é indicado pelo número zero.

Saída
    Para cada caso de teste, deve-se apresentar a mensagem Vencedor(a): xxxxxx, com um espaço após o sinal ":" indicando qual é o aluno do grupo que venceu a brincadeira.
*/

let quantidadeDeAlunos = parseInt(gets());

// Executa os casos de teste
while (quantidadeDeAlunos !== 0) {

    //Cria listas de alunos e senhas
    let alunos = [];
    let senhas = [];

    for (let cont = quantidadeDeAlunos; cont > 0; cont--) {
        let alunoESenha = gets().split(" ");
        alunos = [...alunos, alunoESenha[0].split("_").join(" ")];
        senhas = [...senhas, parseInt(alunoESenha[1])];
    }

    //Determina o vencedor
    let vencedor = [...alunos];
    let partidaDaContagem = 0;

    while (quantidadeDeAlunos > 1) {
        let removerPosicao = 0; // indice a ser removido
        let pularPosicoes = senhas[0]; // número da senha removida
        let resto = pularPosicoes % quantidadeDeAlunos;

        (pularPosicoes % 2 === 0) ? pularPosicoes *= -1 : pularPosicoes *= 1;
/*
        if (pularPosicoes % 2 === 0) {
            //Percorre no sentido anti-horário
            removerPosicao = parseInt(partidaDaContagem - resto);
            if (Math.abs(removerPosicao) >= quantidadeDeAlunos) {
                //Força o index para dentro do array
                removerPosicao += quantidadeDeAlunos;
            }
        } else {
            //Percorre no sentido horário
            removerPosicao = parseInt(partidaDaContagem + resto);
            if (removerPosicao >= quantidadeDeAlunos) {
                //Força o index para dentro do array
                removerPosicao -= quantidadeDeAlunos;
            }
        }
*/
        pularPosicoes = senhas[removerPosicao];
        senhas = senhas.slice(removerPosicao);
        vencedor = vencedor.slice(removerPosicao);
        quantidadeDeAlunos--;

        if (pularPosicoes % 2 === 0) {
            partidaDaContagem = (removerPosicao > quantidadeDeAlunos - 1)
              ? 0
              : removerPosicao;
          }
          else {
            partidaDaContagem = (removerPosicao > quantidadeDeAlunos - 1)
              ? quantidadeDeAlunos - 1
              : removerPosicao - 1;
          }

    }
    console.log("Vencedor(a): " + vencedor);

    quantidadeDeAlunos = parseInt(gets());
};
/*
if (pularPosicoes % 2 === 0) {
    i = (pularPosicoes % quantidadeDeAlunos) - 1;
    pularPosicoes = senhaVencedora[senhaVencedora.length - i];
    senhaVencedora = senhaVencedora.slice(-i);
} else {
    i = (pularPosicoes % quantidadeDeAlunos) - 1;
    pularPosicoes = senhaVencedora[i];
    senhaVencedora = senhaVencedora.slice(i);
}
*/