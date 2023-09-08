const translations = {
    en: {
        heading: "Apartment for Rent",
        description: "This beautiful apartment is available for rent. Contact us for more details.",
    },
    hr: {
        heading: "Apartman za najam",
        description: "Ovaj prekrasan apartman je dostupan za najam. Kontaktirajte nas za više detalja.",
    },
    de: {
        heading: "Wohnung zu vermieten",
        description: "Diese wunderschöne Wohnung steht zur Vermietung. Kontaktieren Sie uns für weitere Details.",
    },
    it: {
        heading: "Appartamento in affitto",
        description: "Questo bellissimo appartamento è disponibile in affitto. Contattaci per ulteriori dettagli.",
    }
};

function setLanguage(lang) {
    document.querySelector('html').setAttribute('lang', lang);
    document.getElementById('heading').textContent = translations[lang].heading;
    document.getElementById('description').textContent = translations[lang].description;
}

document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));
document.getElementById('lang-hr').addEventListener('click', () => setLanguage('hr'));
document.getElementById('lang-de').addEventListener('click', () => setLanguage('de'));
document.getElementById('lang-it').addEventListener('click', () => setLanguage('it'));

// Postavljanje zadanog jezika
setLanguage('en');
