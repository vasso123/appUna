const translations = {
    en: {
        heading: "Apartment for Rent",
        description: "This beautiful apartment is available for rent. Contact us for more details.",
    },
    hr: {
        heading: "Apartman za najam",
        description: "Ovaj prekrasan apartman je dostupan za najam. Kontaktirajte nas za više detalja.",
    }
};

function setLanguage(lang) {
    document.querySelector('html').setAttribute('lang', lang);
    document.getElementById('heading').textContent = translations[lang].heading;
    document.getElementById('description').textContent = translations[lang].description;
}

document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));
document.getElementById('lang-hr').addEventListener('click', () => setLanguage('hr'));

// Postavljanje zadanog jezika
setLanguage('en');
