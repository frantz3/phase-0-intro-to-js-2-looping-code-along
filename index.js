// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`)
// }

// const gifts = ['teddy bear', 'drone', 'doll'];

// function wrapGifts(gifts) {
//     for (let i =0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         debugger;
//     }

//     return gifts;
// }

// wrapGifts(gifts);

const names = [];



function writeCards(names, event) {
     const msg = []
    for (let i = 0; i < names.length; i++) {
       
        const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
        msg.push(message)
    }
    return msg
}

function countDown() {
    let countDown = 10;
    while (countDown > -1) {
        console.log(countDown--);
    }
}
