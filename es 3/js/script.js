
const parole = ["a", "b", "c", "d", "e"];

function arrPos (stringa, min, max){
    var nuovo =[]
    for ( let i = 0; i<stringa.length; i++ ){
        if( i >= min && i <= max ){
            nuovo.push(stringa[i])
        }
    }

    return nuovo;
}

newArray = arrPos (parole, 2, 4);
console.log(newArray);
