// 2C = two of clubs
// 2D = two of diamonds
// 2H = two of hearts
// 2S = two of spades

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

// funcion para crear nuevo deck
const crearDeck = () => {
    for (let i = 2; i <= 10; i++) {
       for (let tipo of tipos) {

           deck.push( i + tipo );
       }
    }

    for (let tipo of tipos) {
        for (let esp of especiales) {
            deck.push( esp + tipo );
        }
    }

    // console.log(deck);
    deck = _.shuffle(deck);
    console.log(deck);
    return deck;
}

crearDeck();

// funcion para pedir una carta
const pedirCarta = () => {

    if (deck.length === 0) {
        throw 'No hay cartas en el deck';
    }

    const carta = deck.pop();
    console.log(deck);
    console.log(carta);

    return carta;
}

/* for (let i = 0; i <= 100; i++) {
    pedirCarta();
} */

const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    let puntos = 0;
    if ( isNaN(valor) ) {
        puntos = (valor === 'A') ? 11 : 10;
    } else {
        puntos = valor * 1;
    }
    console.log(puntos);
}

valorCarta ('9D');