// Code your solutions in this file

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
//   }

//   return gifts;
// }

// wrapGifts(gifts);



function writeCards(arrayName, eventName) {
    const newArray = []
    for (let i = 0; i < arrayName.length; i++) {

     newArray.push (`Thank you, ${arrayName[i]}, for the wonderful ${eventName} gift!`)
    }
return newArray
}

writeCards(['Gudalupe', 'Ollie', 'Aki'])

function countDown(integer) {
    while (integer >= 0) {
        console.log(integer)
        integer--
    }
     
}