const translations = {
    en: {
        heading: "Apartment Una",
        chooseLanguage: "Choose language: ",
        t1: "Below you can find instructions for entering the apartment and navigating the apartment.",
        kakoDoci: "How to get there",
        adresa: "Address is Umag, Olge Ban 3.",
        parking: "Parking",
        parkingOpis: "There is a free public parking lot in front of the apartment.",
        kljucevi: "Keys for apartment",
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
        t2: "Ključeve možete preuzeti u poštanskom sandučiću (prezime Keglević). Jedan ključ je za ulazna vrata u dvorište, a drugi je za ulaz u apartman. Molimo vas da uvijek zaključavate dvorišna vrata."
    },
    de: {
        heading: "Appartement Una",
    },
    it: {
        heading: "Appartamento Una",

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
