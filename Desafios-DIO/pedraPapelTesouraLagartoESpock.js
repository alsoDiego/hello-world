////////////////////////////
// -- CÓDIGO ALTERADO -- //
//////////////////////////

let dicionarioDeRegras = {
    tesoura: ['papel','lagarto'],
    papel: ['pedra','spock'],
    pedra: ['lagarto','tesoura'],
    lagarto: ['spock','papel'],
    spock: ['tesoura','pedra']
};

let  fernanda = 'fernanda';
let  marcia = 'marcia';

let resultado;

let N = parseInt(gets());

for(let i = 0; i < N; i++){

    let jogo = gets().split(' ');
    if (jogo[0] === jogo[1]) {
        resultado = 'empate';
    } else {
        resultado = (dicionarioDeRegras.jogo[0][jogo.includes( [ ] ) ]) ?  fernanda : marcia;
    }
console.log(resultado);
}

/*

 -- LINKS PARA CONSULTA --
 https://www.geeksforgeeks.org/how-to-use-a-variable-for-a-key-in-a-javascript-object-literal/

 https://www.codegrepper.com/code-examples/javascript/javascript+use+value+of+variable+as+object+key

 https://www.codegrepper.com/code-examples/javascript/how+to+use+variable+as+object+key+in+typescript

 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects

 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

 -- CÓDIGO FORNECIDO --

let dicionarioDeRegras = {
    tesoura: ['papel','lagarto'],
    papel: ['pedra','spock'],
    pedra: ['lagarto','tesoura'],
    lagarto: ['spock','papel'],
    spock: ['tesoura','pedra']
};

//finalize a declaração das jogadoras
let  = 'fernanda';
let  = 'marcia';

let resultado;

let N = parseInt(gets());

// continue a solução

for(   ){

let     = gets().split(' ');
if(   ===  )
resultado = 'empate';
else
resultado = (dicionarioDeRegras[     .includes(  ] ) ) ?   :    ;

print(resultado);
}

*/