
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bowl`);
      
    }

    return gifts;
}

wrapGifts(gifts);

const names = []
    
function writeCards(names, event) {
    const messages = []
    for (let i = 0; i < names.length; i++) {
        const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
        messages.push(message);
    }
    return messages;
}

console.log(writeCards([names], `birthday`));

function countDown() {
     for(let i = 10; i >= 0; i--) {
        if(i==0) {console.log(0);} 
        else {console.log(i);}
     }
        
}


