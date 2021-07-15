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

let  fernanda = 'Fernanda';
let  marcia = 'Marcia';

let resultado;

let N = parseInt(gets());

for(let i = 0; i < N; i++){

    let jogo = gets().split(' ');
    if (jogo[0] === jogo[1]) {
        resultado = 'empate';
    } else {
        resultado = (dicionarioDeRegras[jogo.includes( [ ] ) ]) ?  fernanda : marcia;
    }
print(resultado);
}


//////////////////////////////////////////////
///////// -- CÓDIGO FORNECIDO -- ////////////
////////////////////////////////////////////
/*

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