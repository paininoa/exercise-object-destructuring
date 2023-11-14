/*
### Esercizio 1: Sintassi JSON
Dato il seguente oggetto in JavaScript, convertilo in una stringa JSON.
*/

/*
const utente = {
  nome: "Alice",
  eta: 25,
  hobby: ["leggere", "giocare ai videogiochi", "fare escursioni"],
  indirizzo: {
    via: "123 Via degli Aceri",
    citta: "Paese delle Meraviglie",
  },
};

//------------- RISULTATO IN FILE.JSON ----------------

const stringaJSON = JSON.stringify(utente);
console.log(stringaJSON);
*/

/*
### Esercizio 2: Analisi di JSON
Converti la seguente stringa JSON in un oggetto JavaScript e registra l'`email` e l'`id` nella console.

'{"id": 1, "nome": "John Doe", "email": "john.doe@example.com"}'

// ---------

const stringaJson = '{"id": 1, "nome": "John Doe", "email": "john.doe@example.com"}';
const oggetto = JSON.parse(stringaJson);
const {id, email} = oggetto;

*/

/*
### Esercizio 3: Distrutturazione di Base degli Oggetti
Utilizza la distrutturazione degli oggetti per estrarre il `titolo` e l'`anno` dal seguente oggetto e registrarli nella console.
*/

/*
const film = {
  titolo: "Inception",
  regista: "Christopher Nolan",
  anno: 2010,
  valutazione: 8.8
};
*/

// ----------------------------------

/*
const film = {
  titolo: "Inception",
  regista: "Christopher Nolan",
  anno: 2010,
  valutazione: 8.8,
};

const { titolo, anno } = film;

console.log(titolo, anno);
*/

/*
### Esercizio 4: Distrutturazione di Oggetti Annidati
Utilizza la distrutturazione degli oggetti per estrarre la `via` e la `citta` dall'oggetto `indirizzo` all'interno dell'oggetto `utente`.
*/

/*
const utente = {
  nome: "Alice",
  indirizzo: {
    via: "123 Via degli Aceri",
    citta: "Paese delle Meraviglie",
  },
};

const { indirizzo } = utente;
const { via, citta } = indirizzo;
console.log(civico, citta);

// Soluzione Extra
// const {indirizzo:{via, citta}} = utente;
*/

/*
### Esercizio 5: Valori Predefiniti nella Distrutturazione
Utilizza la distrutturazione degli oggetti per estrarre il `nome` e l'`eta` dall'oggetto `persona`. Se l'`eta` non è fornita, dovrebbe avere un valore predefinito di `30`.
*/

/*
const persona = {
  nome: "Bob",
};

const { nome, eta = 30 } = persona;
console.log(nome, eta);
*/

/*
### Esercizio 6: Distrutturazione dei Parametri delle Funzioni
Scrivi una funzione `presentati` che prende un oggetto con le proprietà `nome` e `occupazione` e registra un messaggio nella console.
*/

/*
const persona = {
  nome: "Jane",
  occupazione: "sviluppatrice",
};

const presentati = ({nome, occupazione}) => {
  const messaggio = `Ciao, mi chiamo ${tizio.nome} e faccio lo/la ${tizio.occupazione}`;
  console.log(messaggio);
};

presentati(persona);
*/

/*
Esercizi BONUS:
### BONUS 1: Analisi di JSON Complesso e Distrutturazione Avanzata
Hai ricevuto una risposta JSON da un database contenente informazioni su libri e loro autori.
Analizza il JSON e usa la distrutturazione degli oggetti per estrarre e registrare le seguenti informazioni per ogni libro: 
titolo, nome e cognome dell'autore, e il numero di pagine se il libro ne ha più di 300.
*/

/*
const databaseJson = [
  {
    title: "Il Grande Gatsby",
    author: {
      firstName: "F. Scott",
      lastName: "Fitzgerald",
    },
    details: {
      pages: 180,
      language: "Inglese",
    },
  },
  {
    title: "Guerra e Pace",
    author: {
      firstName: "Lev",
      lastName: "Tolstoj",
    },
    details: {
      pages: 1225,
      language: "Russo",
    },
  },
  {
    title: "1984",
    author: {
      firstName: "George",
      lastName: "Orwell",
    },
    details: {
      pages: 328,
      language: "Inglese",
    },
  },
];

for (let i = 0; i < databaseJson.length; i++) {
  const libro = databaseJson[i];
  const { title, author, details } = libro;
  const { firstName, lastName } = author;
  const { pages } = details;

  const message = `${title}
  ${firstName}, ${lastName}
  ${pages > 300 ? pages : ""}`;

  console.log(message);
}
*/

/*
### BONUS 2: Gestione dei Dati Mancanti con la Distrutturazione
Dato il JSON degli utenti, scrivi una funzione che distruttura ogni oggetto utente per estrarre il nome, 
l'email e l'indirizzo dell'utente. Se l'indirizzo non è fornito, la funzione dovrebbe assegnare un valore
predefinito di "Indirizzo non fornito". Registra le informazioni estratte per ogni utente.
*/

/*
const databaseJson = [
  {
    name: "Alice",
    email: "alice@example.com",
    address: "123 Via Acero, Meraviglia",
  },
  {
    name: "Bob",
    email: "bob@example.com",
  },
  {
    name: "Charlie",
    email: "charlie@example.com",
    address: "456 Via Olmo, Sognilandia",
  },
];

const analizzaDatabase = (database) => {
  let message = "";

  for (let i = 0; i < database.length; i++) {
    const utente = database[i];
    const { name, email, address = "Indirizzo non fornito" } = utente;
    const message = `${name}
    ${email}
    ${address}`;
    console.log(message);
  }
};

analizzaDatabase(databaseJson);
*/

/*
### BONUS 3: Distrutturazione ed Elaborazione dei Dati JSON
Hai ricevuto una stringa JSON contenente un array di prodotti con i loro prezzi e quantità. 
Scrivi una funzione che analizza il JSON e calcola il valore totale di ogni prodotto 
(prezzo moltiplicato per la quantità). Utilizza la distrutturazione degli oggetti per estrarre le proprietà necessarie. 
Quindi, registra il nome del prodotto e il suo valore totale.
*/

const stringaJson = `[
    {
        "product": "Laptop",
        "price": 1200,
        "quantity": 5
    },
    {
        "product": "Telefono",
        "price": 500,
        "quantity": 10
    },
    {
        "product": "Tablet",
        "price": 750,
        "quantity": 3
    }
]`;

const database = JSON.parse(stringaJson);

const analizzaJson = (data) => {
  for (let i = 0; i < data.length; i++) {
    const prodotto = data[i];
    const { product, price, quantity } = prodotto;

    const valoreTotale = price * quantity;

    const message = `${product}: ${valoreTotale}`;

    console.log(message);
  }
};

analizzaJson(database);
