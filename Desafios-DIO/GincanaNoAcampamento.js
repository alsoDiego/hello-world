/*
Desafio
    Nas férias de Dezembro, várias escolas se organizam e levam seus alunos para um acampamento de férias por uma semana. Nestes acampamentos os alunos são divididos em cabanas coletivos por gênero e idade, sempre com um adulto que, além de dormir com o grupo no cabana, também são responsáveis por criar e executar várias atividades, como por exemplo jogos, excursões, Gincanas Noturnas, etc.

    No primeiro dia foi realizada uma gincana em que a atividade constituia em agrupar os alunos em um círculo (organizado no sentido anti-horário) do qual seriam retiradas um a um até que sobrasse apenas um aluno, que seria o vencedor.

    No momento em que entra no círculo, cada aluno recebe uma pequena ficha que contém um valor de 1 a 500. Depois que o círculo é formado, conta-se, iniciando no aluno que está ao lado da primeira que entrou no círculo, o número correspondente à ficha que ela detém. O aluno onde o número contado cair deve ser retirado do grupo, e a contagem inicia novamente segundo a ficha do aluno que acabou de ser eliminado. Para ficar mais interessante, quando o valor que consta na ficha é par, a contagem é feita no sentido horário e quando o valor que consta na ficha é ímpar, a contagem é feita no sentido anti-horário.

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
    let senhaVencedora = [...senhas];
    let senhaDaRodada = senhas[0];
    let alunoSai;
    let indice = senhaVencedora.indexOf(senhaDaRodada);
    let resto = (senhaDaRodada % senhaVencedora.length);

    for (let circulo = senhaVencedora.length; circulo > 1; circulo--) {
        if (senhaDaRodada % 2 === 0) {
            alunoSai = parseInt( indice - resto + senhaVencedora.length )
        } else {
            alunoSai = parseInt( indice + resto - senhaVencedora.length )
        }
        senhaDaRodada = senhaVencedora[alunoSai];
        senhaVencedora = senhaVencedora.slice(alunoSai);
        resto = senhaDaRodada % senhaVencedora.length;
        indice = alunoSai;
    }
    senhaVencedora = parseInt(senhaVencedora);
    let vencedor = alunos[senhas.indexOf(senhaVencedora)];
    console.log("Vencedor(a): " + vencedor);

    quantidadeDeAlunos = parseInt(gets());
};
/*
if (senhaDaRodada % 2 === 0) {
    i = (senhaDaRodada % quantidadeDeAlunos) - 1;
    senhaDaRodada = senhaVencedora[senhaVencedora.length - i];
    senhaVencedora = senhaVencedora.slice(-i);
} else {
    i = (senhaDaRodada % quantidadeDeAlunos) - 1;
    senhaDaRodada = senhaVencedora[i];
    senhaVencedora = senhaVencedora.slice(i);
}
*/