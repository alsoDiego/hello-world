const weaponAdvantages = {
    tesoura: ['papel',   'lagarto'],
    papel:   ['pedra',     'spock'],
    pedra:   ['lagarto', 'tesoura'],
    lagarto: ['papel',     'spock'],
    spock:   ['tesoura',   'pedra'],
}

let nCases = '';

while (true) {
    nCases = gets()

    if (!nCases || nCases === '' || nCases <= 0) break;

    for (let i = 1; i <= nCases; i++) {
        const [Fernanda, Marcia] = gets().split(' ')

        if (Fernanda === Marcia) {
            console.log('empate')
        }
        else if (weaponAdvantages[Fernanda].includes(Marcia)) {
            console.log('fernanda');
        }
        else {
            console.log('marcia');
        }
    }
}