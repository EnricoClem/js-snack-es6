// *SNACK 1*
// Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
// Ci ha lasciato il nome del tavolo (“Tavolo Vip”) e la lista degli invitati in ordine di posto:
// [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']
// Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto javascript che ha come attributi:
// nome del tavolo,
// nome dell’ospite,
// posto occupato.
// Generiamo e stampiamo in console la lista per i segnaposto.

let vipGuest = [
    {nome:'Brad Pitt'},
    {nome:'Johnny Depp'},
    {nome:'Lady Gaga'},
    {nome:'Cristiano Ronaldo'},
    {nome:'Georgina Rodriguez'},
    {nome:'Chiara Ferragni'},
    {nome:'Fedez'},
    {nome:'George Clooney'},
    {nome:'Amal Clooney'},
    {nome:'Maneskin'}
];

let tableSeats = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

vipGuest.map(el => Object.assign(el, {tavolo: 'Tavolo Vip'}));

vipGuest.forEach((item, index) => {
    item.posto = tableSeats[index];
})

for(let i = 0; i < vipGuest.length; i++) {
    console.log(vipGuest[i]);
};