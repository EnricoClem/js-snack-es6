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
    'Brad Pitt',
    'Johnny Depp',
    'Lady Gaga',
    'Cristiano Ronaldo',
    'Georgina Rodriguez',
    'Chiara Ferragni',
    'Fedez',
    'George Clooney',
    'Amal Clooney',
    'Maneskin'
];

function toObject(name, order, tableName) {

    return {
        tableName: tableName,
        name: name,
        order: order
    };

};

const guestObjects = []

for (let i = 0; i < vipGuest.length; i++) {
    const guestname = vipGuest[i];
    const order = i + 1;
    const guestObject = toObject (guestname, tableName, order);
    guestObjects.push(guestObject);
}

console.log(guestObjects)

// _____________________________________________________________________________________________

// *SNACK 2*
// Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
// 1. Per preparare l’aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
// ES (Marco della Rovere => MARCO DELLA ROVERE);
// 2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
// 3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120

let students = [
    {id: 231,
    nome: 'Marco della Rovere',
    voto: 78},
    {id: 110,
    nome: 'Paola Cortellessa',
    voto: 96},
    {id: 250,
    nome: 'Andrea Mantegna',
    voto: 48},
    {id: 145,
    nome: 'Gaia Borromini',
    voto: 74},
    {id: 196,
    nome: 'Luigi Grimaldello',
    voto: 68},
    {id: 102,
    nome: 'Piero della Francesca',
    voto: 50},
    {id: 120,
    nome: 'Francesca da Polenta',
    voto: 84},
];

let allcapsNames = [];

let allcapsNames =students.map(function)