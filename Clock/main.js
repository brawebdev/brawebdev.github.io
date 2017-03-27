const hourHand = document.querySelector( '.hour-hand' );
const minHand = document.querySelector( '.min-hand' );
const secondHand = document.querySelector( '.second-hand' );

function setHand( hand, degrees ) {
    hand.style.transform = `rotate(${degrees}deg)`;
}

setInterval( () => {
    const date = new Date();

    setHand( hourHand, 30 * date.getHours() );
    setHand( minHand, 6 * date.getMinutes() );
    setHand( secondHand, 6 * date.getSeconds() );
}, 1000 );