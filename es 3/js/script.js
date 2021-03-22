
const parole = ["a", "b", "c", "d", "e"];

// function arrPos (stringa, min, max){
//     var nuovo =[]
//     for ( let i = 0; i<stringa.length; i++ ){
//         if( i >= min && i <= max ){
//             nuovo.push(stringa[i])
//         }
//     }

//     return nuovo;
// }

var min = prompt("inserisci un num minimo");
var max = prompt("inserisci un num massimo");

const newArray = parole.filter ((element, index) => {
    return index >= min && index <= max
});

console.log(newArray);

// newArray = arrPos (parole, 2, 4);
// console.log(newArray);


