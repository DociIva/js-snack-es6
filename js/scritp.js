//jsnack 3
//Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
//La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri
//inseriti dall'utente (è possibile usare, ad esempio, for/foreach/filter

// 1
const nuovoArray = ['Paolo', 'Fabio', 'Lorenzo', 'Luca'];
let min = parseInt(prompt('Inserisci un numero tra 0 e 5'));
while(isNaN(min) || min < 0 || min > nuovoArray.length) {
    min = parseInt(prompt('Inserisci un numero tra 0 e 5'));
}
let max = parseInt(prompt('Inserisci un numero tra 0 e 5'));
while(isNaN(max) || max < min || max > nuovoArray.length) {
    max = parseInt(prompt('Inserisci un numero tra 0 e 5'));
}
// let newArray = [];
/*
function filterArray(arr, min, max) {
    for(var i = 0; i < ar.length; i++){
        const tmp = arr[i];
        if(min <= i && max >= i) {
            newArray.push(tmp);
        }
    }
}
filterArray(nuovoArray, min, max);
console.log(newArray);*/


/*
const newFilterArray = nuovoArray.filter((element, index) => {
    return min <= index && max >= index;
});
console.log(newFilterArray);
*/

function filterArray(min, max) {
    nuovoArray.forEach((element,index) =>{
        if(min <= index && max >= index){
            newArray.push(element);
        }
    })
}
filterArray(min,max);
console.log(newArray);




















































// PRIMO FATTI MODO NUOVO
//console.log('Ciao');
// Snack 1
//Creare un array di oggetti: 
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. 
//Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
/*
const bici1 = {
    nome : 'pippo',
    peso : 9,
}
const bici2 = {
    nome : 'pluto',
    peso : 8,
}
const bici3 = {
    nome : 'bianchi',
    peso : 7.5,
}
const biciclette = [
    bici1,
    bici2,
    bici3,
];
  
   
// così con il destructuring 1
  
// fai una variabile pari a 0 per le bici minori cosi quando fai il pagaragone 
let pesoMinoreIn = 0;
let pesoMaxIn = 0;
  
// ciclo per trovare  il peso della bici minore
for (let i = 0; i < biciclette.length; i++) {
    // se il peso è minore
    if(biciclette[i].peso < biciclette[pesoMinoreIn].peso) {
        pesoMinoreIn = 1;
    }
    // se il peso è maggiore 
    if(biciclette[i].peso > biciclette[pesoMaxIn].peso) {
        pesoMaxIn = 1;
    }
}
//console.log('la bici piu pensate e ' , biciclette[pesoMaxIn]);
//console.log('La bici con il peso minore è la bici ', biciclette[pesoMinoreIn]);
// metterlo nella pagina
document.getElementById('min-bici').innerHTML = `
    <span class="bici">${biciclette[pesoMinoreIn].nome}</span>
    <div class="peso">
        <label for="peso">Peso:</label>
        <strong>${biciclette[pesoMinoreIn].peso}</strong>
    </div>
`
document.getElementById('max-bici').innerHTML = `
    <span class="bici">${biciclette[pesoMaxIn].nome}</span>
    <div class="peso">
        <label for="peso">Peso:</label>
        <strong>${biciclette[pesoMaxIn].peso}</strong>
    </div>
` */

// // Snack 2
//Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
//Generare numeri random al posto degli 0 nelle proprietà:
//Punti fatti e falli subiti
//Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// 1                           arr fu. dichiarata Sempre prima
/*
const randomNumeber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1 )) + min;
};
// inizio squadre

const squadre = [
    {
        nome : 'PSG',
        puntiFatti : 0,
        falliSubiti : 0,
    },
    {
        nome : 'Roma',
        puntiFatti : 0,
        falliSubiti : 0,

    },
    {
        nome : 'Juve',
        puntiFatti : 0,
        falliSubiti : 0,

    },
    {
        nome : 'Toro',
        puntiFatti : 0,
        falliSubiti : 0,

    },
];

// clone di squadre
let aggSquadre = [...squadre];

console.log(squadre);
// for 


for(let i = 0; i < aggSquadre.length; i++) {
    aggSquadre[i].puntiFatti = randomNumeber(0,100);
    aggSquadre[i].falliSubiti = randomNumeber(0,100);
   
}
console.log(aggSquadre);
// nuovo array per il risultato
let nuovoArray = [];

const risultatoNuovo = aggSquadre.map((element) => {
    return {
        nome: element.nome,
        falliSubiti: element.falliSubiti
    }
})
console.log('Nuovo risultato ', risultatoNuovo);
*/


/*
for(let i = 0; i < aggSquadre.length; i++) {
   nuovoArray.push({
        nome :aggSquadre[i].nome,
        falliSubiti : aggSquadre[i].falliSubiti,
   })    
}
console.log('Nuovo risultato', nuovoArray);*/


  





// PRIMI FATTI NORMALI
//console.log('ciao');
/**
 * // jsnack 1
// Creare un array di oggetti
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore
 */
/*

var biciclette = [
    { 
      nome : 'pippo',
      peso : 11,
    }, 
    {
      nome : 'lillo',
      peso : 10,
    },
    {
      nome : 'pluto',
      peso : 5,
    }
];
 
var biciLeggera = biciclette[0];
 
 for(var i = 1; i < biciclette.length; i++){
     if(biciclette[i].peso < biciLeggera.peso){
       biciLeggera = biciclette[i];
     }
  }
 console.log(biciLeggera);
 */

 // Snack 2
//Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
//Generare numeri random al posto degli 0 nelle proprietà:
//Punti fatti e falli subiti
//Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
/*
// A
var calcio = [
    {
        nome : 'PSG',
        puntiFatti : 0,
        falliSubiti : 0,
    },
    {
        nome : 'Roma',
        puntiFatti : 0,
        falliSubiti : 0,

    },
    {
        nome : 'Juve',
        puntiFatti : 0,
        falliSubiti : 0,

    },
    {
        nome : 'Toro',
        puntiFatti : 0,
        falliSubiti : 0,

    },
];
// B
for(var i =  0; i < calcio.length; i++){
    var calcio = calci[i];

    calcio.puntiFatti = randomNumeber(0 , 10);
    calcio.falliSubiti = randomNumeber(0 , 10);
}
 console.table(calcio);

// C Generare i numeri random 
function randomNumeber(min , max){
    return Math.floor(Math.random() * (max - min + 1) ) + min ;
};
*/