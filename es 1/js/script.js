var bici = [
    {
        nome: "graziella",
        peso: 4000
    },
    {
        nome: "bianchi",
        peso: 2000,
    },
    {
        nome: "pininfarina",
        peso: 5000,
    }
];

var {nome, peso} = bici[0];


for ( let i = 0; i < bici.length; i++){
    if(peso > bici[i].peso){
        peso = bici[i].peso
        nome = bici[i].nome
    }
    
}

console.log( `la bici che pesa di meno è quella della ${nome} ` );