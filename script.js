// Array of solution cards with local image paths
const solutions = [
    { 
        name: 'Simax', 
        description: 'is a system that translates spoken or written text into sign language. The translation is signed by a digital, animated avatar.', 
        link: 'https://simax.media/', 
        image: 'card1.png', // Use the local image path
        correct: true 
    },
    { 
        name: 'Flora Incognita', 
        description: 'is an AI-supported app that automatically identifies more than 16.000 vascular plant species from photos.', 
        link: 'https://floraincognita.com/', 
        image: 'card2.svg', // Use the local image path
        correct: false 
    },
    { 
        name: 'DeepL', 
        description: 'is a translation system that supports 33 languages. The system also enables the translation of PDF, Word, and PowerPoint files.', 
        link: 'https://deepl.com', 
        image: 'card3.svg', // Use the local image path
        correct: true 
    },
    { 
        name: 'Baumblick', 
        description: 'app can predict which trees in Berlin will be most at risk of drought, allowing local residents to intervene early by watering them.', 
        link: 'https://baumblick.qtrees.ai/', 
        image: 'card4.svg', // Use the local image path
        correct: false 
    }
];

// Track the score
let score = 0;

// Function to render the persona card dynamically
function renderPersonaCard() {
    const personaCard = document.getElementById('persona-card');

    // HTML structure for the persona card inside a white container
    const personaCardHTML = `
        <div class="persona-container">
            <div class="image-container">
                <img src="persona-card.svg" alt="Persona Image">
            </div>
            <div class="text">
                I want a green city and healthy plants and trees. What can I do to achieve this?
            </div>
        </div>
    `;

    // Insert the persona card structure into the container
    personaCard.innerHTML = personaCardHTML;
}

// Function to render the solution cards dynamically
document.addEventListener('DOMContentLoaded', () => {
    renderPersonaCard(); // Render the persona card first

    const solutionCards = document.getElementById('solution-cards');
    solutions.forEach(solution => {
        // Create card container
        const cardContainer = document.createElement('div');
        cardContainer.classList.add('card-container');

        // HTML structure for each card
        const cardBody = `
            <div class="card-body"></div>
            <img class="card-image" src="${solution.image}" alt="${solution.name}">
            <div class="card-description">
                <span><b>${solution.name} </b></span><span>${solution.description}</span>
            </div>
            <div class="card-link">More Info: <a href="${solution.link}" target="_blank">${solution.link}</a></div>
        `;

        // Insert the card structure into the container
        cardContainer.innerHTML = cardBody;

        // Add click event to check if the card is correct
        cardContainer.addEventListener('click', () => selectSolution(solution));

        // Append the card to the solution cards container
        solutionCards.appendChild(cardContainer);
    });
});

// Function to handle selecting a solution card
function selectSolution(solution) {
    if (solution.correct) {
        alert('Correct!');
        score++;
    } else {
        alert('Try again!');
    }
    // Update the score display
    document.getElementById('score-value').textContent = score;
}
