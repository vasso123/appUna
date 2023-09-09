const translations = {
    en: {
        heading: "Apartment Una",
        chooseLanguage: "Select Language: ",
        t1: "Below you can find instructions for entering the apartment and navigating inside.",
        kakoDoci: "How to Get Here",
        adresa: "The address is Umag, Olge Ban 3.",
        parking: "Parking",
        parkingOpis: "There is a public free parking area in front of the apartment.",
        kljucevi: "Apartment Keys",
        t2: "You can collect the keys from the mailbox (surname Keglević). One key is for the courtyard entrance, and the other is for the apartment entrance. Please remember to always lock the courtyard gate.",
        t3: "On the last day of your stay, when leaving the apartment, please leave the keys in the mailbox.",
        ulaz: "Apartment Entrance",
        dvoriste: "Courtyard Entrance",
        vrata: "Front Door",

    },
    hr: {
        heading: "Apartman Una",
        chooseLanguage: "Odaberite jezik: ",
        t1: "U nastavku možete pronaći upute za ulazak u apartman i snalaženje u apartmanu.",
        kakoDoci: "Kako doći",
        adresa: "Adresa je Umag, Olge Ban 3.",
        parking: "Parking",
        parkingOpis: "Ispred apartmana se nalazi javni besplatni parking.",
        kljucevi: "Ključevi za apartman",
        t2: "Ključeve možete preuzeti u poštanskom sandučiću (prezime Keglević). Jedan ključ je za ulazna vrata u dvorište, a drugi je za ulaz u apartman. Molimo vas da uvijek zaključavate dvorišna vrata.",
        t3: "Na zadnji dan boravka, pri odlasku iz apartmana, molimo vas ostavite ključeve u poštanskom sandučiću.",
        ulaz: "Ulaz u apartman",
        dvoriste: "Ulaz u dvorište",
        vrata: "Ulazna vrata",
    },
    de: {
        heading: "Apartment Una",
        chooseLanguage: "Wählen Sie die Sprache: ",
        t1: "Nachfolgend finden Sie Anweisungen zum Betreten der Wohnung und zur Navigation im Inneren.",
        kakoDoci: "Wie Sie hierher kommen",
        adresa: "Die Adresse lautet Umag, Olge Ban 3.",
        parking: "Parken",
        parkingOpis: "Vor der Wohnung befindet sich ein öffentlicher kostenloser Parkplatz.",
        kljucevi: "Wohnungsschlüssel",
        t2: "Sie können die Schlüssel aus dem Briefkasten (Familienname Keglević) abholen. Ein Schlüssel ist für das Tor zum Hof, der andere für den Eingang zur Wohnung. Bitte denken Sie daran, das Hof-Tor immer abzuschließen.",
        t3: "Am letzten Tag Ihres Aufenthalts, wenn Sie die Wohnung verlassen, hinterlassen Sie bitte die Schlüssel im Briefkasten.",
        ulaz: "Eingang zur Wohnung",
        dvoriste: "Hofeingang",
        vrata: "Haustür",

    },
    it: {
        heading: "Appartamento Una",
        chooseLanguage: "Scegli la lingua: ",
        t1: "Di seguito troverai istruzioni per l'accesso all'appartamento e per la navigazione al suo interno.",
        kakoDoci: "Come Arrivare",
        adresa: "L'indirizzo è Umago, Olge Ban 3.",
        parking: "Parcheggio",
        parkingOpis: "Davanti all'appartamento c'è un parcheggio pubblico gratuito.",
        kljucevi: "Chiavi dell'Appartamento",
        t2: "Puoi ritirare le chiavi dalla cassetta delle lettere (cognome Keglević). Una chiave è per l'ingresso del cortile, l'altra per l'ingresso dell'appartamento. Per favore, ricordati sempre di chiudere il cancello del cortile.",
        t3: "L'ultimo giorno del tuo soggiorno, quando lasci l'appartamento, per favore lascia le chiavi nella cassetta delle lettere.",
        ulaz: "Ingresso dell'Appartamento",
        dvoriste: "Ingresso al cortile",
        vrata: "Porta d'ingresso",

    }
};

function setLanguage(lang) {
    document.querySelector('html').setAttribute('lang', lang);
    const tekstovi = translations[lang];
    const elementi = document.querySelectorAll('[translate]');

    elementi.forEach((element) => {
        const kljuc = element.getAttribute('translate');
        if (tekstovi[kljuc]) {
            element.textContent = tekstovi[kljuc];
        }
    });
    
    //document.getElementById('heading').textContent = translations[lang].heading;
    //document.getElementById('description').textContent = translations[lang].description;
}

document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));
document.getElementById('lang-hr').addEventListener('click', () => setLanguage('hr'));
document.getElementById('lang-de').addEventListener('click', () => setLanguage('de'));
document.getElementById('lang-it').addEventListener('click', () => setLanguage('it'));

// Postavljanje zadanog jezika
setLanguage('en');
