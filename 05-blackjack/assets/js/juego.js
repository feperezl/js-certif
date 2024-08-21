// 2C = two of clubs
// 2D = two of diamonds
// 2H = two of hearts
// 2S = two of spades

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0;
    puntosComputadora = 0;

// referencias html
const btnPedir = document.querySelector('#btnPedir');

const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasPC = document.querySelector('#pc-cartas');

const puntos = document.querySelectorAll('small');


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

    return carta;
};
const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN(valor) ) ? 
            (valor === 'A') ? 11 : 10
            : valor * 1;
};

// turno de la computadora
const turnopc = (puntosMin) => {
   do {
       const carta = pedirCarta();
       
       puntosComputadora = puntosComputadora + valorCarta(carta);
       puntos[1].innerText = puntosComputadora;
       
       const imgCarta = document.createElement('img');
       imgCarta.src = `assets/cartas/${ carta }.png`;
       imgCarta.classList.add('carta');
       divCartasPC.append(imgCarta);

       if (puntosMin > 21) {
              break;
       }

    } while( (puntosComputadora < puntosMin) && (puntosMin <= 21));
}   
// eventos
btnPedir.addEventListener('click', () => {
    const carta = pedirCarta();
    
    puntosJugador = puntosJugador + valorCarta(carta);
    puntos[0].innerText = puntosJugador;

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');
    divCartasJugador.append(imgCarta);

    if (puntosJugador > 21) {

        btnPedir.disabled = true;
        turnopc(puntosJugador);
        alert('Perdiste');

    } else if (puntosJugador === 21) {
        btnPedir.disabled = true;
        alert('21!! Ganaste')
    }
});

btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnopc(puntosJugador);
});
