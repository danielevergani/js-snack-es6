const squadre = [
    {
        nome: "inter",
        punti: 0,
        falli: 0
    },
    {
        nome: "roma",
        punti: 0,
        falli: 0
    },
    {
        nome: "samp",
        punti: 0,
        falli: 0
    }
];


for ( let i = 0; i <squadre.length; i++){
    squadre[i].punti = Math.floor(Math.random() * 100) + 1;;;
    squadre[i].falli = Math.floor(Math.random() * 10) + 1;;
}

console.log(squadre);

let squadre2 = [];
let singolaSquadra

for ( let i = 0; i <squadre.length; i++){
    var {nome, falli} = squadre[i];

    singolaSquadra = {
        nome,
        falli,
    };

    squadre2.push(singolaSquadra);
}

console.log(squadre2);
