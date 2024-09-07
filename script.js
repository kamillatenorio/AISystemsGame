// Array of personas and their corresponding solution cards
const gameData = [
    {
        persona: {
            image: 'persona-card.svg', // Persona image
            text: 'I want a green city and healthy plants and trees. What can I do to achieve this?'
        },
        solutions: [
            { 
                name: 'Simax', 
                description: 'is a system that translates spoken or written text into sign language. The translation is signed by a digital, animated avatar.', 
                link: 'https://simax.media/', 
                image: 'card1.png', // Use the local image path
                correct: false 
            },
            { 
                name: 'Flora Incognita', 
                description: 'is an AI-supported app that automatically identifies more than 16,000 vascular plant species from photos.', 
                link: 'https://floraincognita.com/', 
                image: 'card2.svg', // Use the local image path
                correct: false 
            },
            { 
                name: 'DeepL', 
                description: 'is a translation system that supports 33 languages. The system also enables the translation of PDF, Word, and PowerPoint files.', 
                link: 'https://deepl.com', 
                image: 'card3.svg', // Use the local image path
                correct: false 
            },
            { 
                name: 'Baumblick', 
                description: 'app can predict which trees in Berlin will be most at risk of drought, allowing local residents to intervene early by watering them.', 
                link: 'https://baumblick.qtrees.ai/', 
                image: 'card4.svg', // Use the local image path
                correct: true 
            },
            { 
                name: 'SeaClear', 
                description: 'is a project that uses robots and object recognition to identify and remove plastic debris from the sea floor.', 
                link: 'https://seaclear-project.eu/', 
                image: 'card5.svg', // Use the local image path
                correct: false 
            }        
        ]
    },
    {
        persona: {
            image: 'persona-card2.svg', // Different persona image
            text: 'The pollution of the oceans is really a huge problem. Do you have any ideas on how we can act more effectively and quickly?'
        },
        solutions: [
            { 
                name: 'BirdVision', 
                description: 'system uses cameras on wind turbines to detect and track birds and can shut down turbines in an emergency if birds are in danger.', 
                link: 'https://birdvision.org/', 
                image: 'card11.svg', // Use the local image path
                correct: false 
            },
            { 
                name: 'Grammarly', 
                description: 'is a tool that helps you write clear, concise, and correct emails and documents.', 
                link: 'https://grammarly.com', 
                image: 'card8.svg', 
                correct: false 
            },
            { 
                name: 'Plantix', 
                description: ' helps farmers to recognise (agricultural) plant diseases via a photo, gives tips for treatment, and thus increases crop yields.', 
                link: 'https://plantix.net/en/', 
                image: 'card9.svg', 
                correct: false 
            },
            { 
                name: 'Elsa AI', 
                description: 'helps nonnative speakers to learn to speak English without an accent by providing instant feedback on pronunciation.', 
                link: 'https://elsaspeak.com/en/', 
                image: 'card10.svg', 
                correct: false 
            },
            { 
                name: 'SeaClear', 
                description: 'is a project that uses robots and object recognition to identify and remove plastic debris from the sea floor.', 
                link: 'https://seaclear-project.eu/', 
                image: 'card5.svg', // Use the local image path
                correct: true 
            }
        ]
    }
];

// Track the score
let score = 0;
let currentLevel = 0;

// Function to render the persona card dynamically
function renderPersonaCard(persona) {
    const personaCard = document.getElementById('persona-card');

    // HTML structure for the persona card
    const personaCardHTML = `
        <div class="persona-container">
            <div class="image-container">
                <img src="${persona.image}" alt="Persona Image">
            </div>
            <div class="text">
                ${persona.text}
            </div>
        </div>
    `;

    // Insert the persona card structure into the container
    personaCard.innerHTML = personaCardHTML;
}

// Function to render the solution cards dynamically
function renderSolutionCards(solutions) {
    const solutionCards = document.getElementById('solution-cards');
    solutionCards.innerHTML = ""; // Clear previous cards if any

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
}

// Function to handle selecting a solution card
function selectSolution(solution) {
    if (solution.correct) {
        // If correct, increment the score
        score++;
        document.getElementById('score-value').textContent = score;

        // Load next persona and solutions
        currentLevel++;
        if (currentLevel < gameData.length) {
            loadGameLevel(currentLevel);
        } else {
            alert('Congratulations! You completed all levels.');
        }
    } else {
        // If incorrect, show the modal
        showModal();
    }
}

// Function to show the modal
function showModal() {
    const modal = document.getElementById('try-again-modal');
    modal.style.display = 'flex'; // Show the modal

    // Close the modal when the close button is clicked
    document.querySelector('.close-btn').onclick = function() {
        modal.style.display = 'none';
    };

    // Close the modal if the user clicks outside of the modal content
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
}

// Function to load a specific game level
function loadGameLevel(level) {
    const levelData = gameData[level];
    renderPersonaCard(levelData.persona); // Render the persona card
    renderSolutionCards(levelData.solutions); // Render the solution cards
}

// Initialize the game on DOM load
document.addEventListener('DOMContentLoaded', () => {
    loadGameLevel(currentLevel); // Start with the first level
    setupModal(); // Setup modal close functionality
});

// Function to setup modal close behavior (runs on DOMContentLoaded)
function setupModal() {
    const modal = document.getElementById('try-again-modal');

    // Close the modal when the close button is clicked
    document.querySelector('.close-btn').onclick = function() {
        modal.style.display = 'none';
    };

    // Close the modal if the user clicks outside the modal content
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
}
