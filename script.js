document.addEventListener('DOMContentLoaded', () => {

    const catFacts = [
        "El ronroneo de un gato puede ser una forma de autocuración.",
        "Los gatos tienen glándulas odoríferas en sus mejillas y patas que usan para marcar su territorio.",
        "A los gatos les disgusta el olor de los cítricos como el limón o la naranja.",
        "El gato más viejo registrado vivió hasta los 38 años.",
        "Isaac Newton inventó la puerta para gatos.",
        "Los gatos no pueden saborear el dulce.",
        "Un grupo de gatos se llama 'clowder' en inglés."
    ];

    const factContainer = document.getElementById('fact-container');
    const newFactButton = document.getElementById('new-fact-button');

    newFactButton.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * catFacts.length);
        const randomFact = catFacts[randomIndex];
        factContainer.innerHTML = `<p>${randomFact}</p>`;
    });

});
