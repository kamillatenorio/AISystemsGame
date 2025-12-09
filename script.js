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
                description: 'is a system that translates spoken or written text into sign language. The translation is presented by a digital, animated avatar in sign language.', 
                link: 'https://simax.media/', 
                image: 'card1.png', // Use the local image path
                correct: false 
            },
            { 
                name: 'Flora Incognita', 
                description: 'is an AI-powered app that automatically identifies more than 16,000 vascular plant species based on photos.', 
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
                description: 'is an app that can predict which trees in Berlin are most threatened by drought, so residents can intervene early by watering them.', 
                link: 'https://baumblick.qtrees.ai/', 
                image: 'card4.svg', // Use the local image path
                correct: true 
            },
            { 
                name: 'SeaClear', 
                description: 'is a project that uses robots and object recognition to identify and remove plastic waste from the seabed.', 
                link: 'https://seaclear-project.eu/', 
                image: 'card5.svg', // Use the local image path
                correct: false 
            }        
        ]
    },
    {
        persona: {
            image: 'persona-card2.svg', // Different persona image
            text: 'Ocean pollution is really a huge problem. Do you have ideas on how we can act more effectively and quickly?'
        },
        solutions: [
            { 
                name: 'BirdVision', 
                description: 'is a system that uses cameras on wind turbines to detect and track birds, and can shut down the turbines in emergencies when birds are in danger.', 
                link: 'https://birdvision.org/', 
                image: 'card11.svg', // Use the local image path
                correct: false 
            },
            { 
                name: 'Grammarly', 
                description: 'is a tool that helps you write clearly and precisely in English and corrects grammatically incorrect emails and documents.', 
                link: 'https://grammarly.com', 
                image: 'card8.svg', 
                correct: false 
            },
            { 
                name: 'Plantix', 
                description: 'helps farmers identify (agricultural) plant diseases based on a photo, provides tips for treatment, and thus increases crop yields.', 
                link: 'https://plantix.net/en/', 
                image: 'card9.svg', 
                correct: false 
            },
            { 
                name: 'Elsa AI', 
                description: 'helps non-native speakers speak English without an accent by providing instant feedback on pronunciation.', 
                link: 'https://elsaspeak.com/en/', 
                image: 'card10.svg', 
                correct: false 
            },
            { 
                name: 'SeaClear', 
                description: 'is a project that uses robots and object recognition to identify and remove plastic waste from the seabed.', 
                link: 'https://seaclear-project.eu/', 
                image: 'card5.svg', // Use the local image path
                correct: true 
            }
        ]
    },
    {
        persona: {
            image: 'persona-card3.svg', // Persona image
            text: 'My grandma is losing her eyesight more and more every year. I would like to make her everyday life easier, but I am rarely there. Can I help her somehow?'
        },
        solutions: [
            { 
                name: 'Claudette', 
                description: 'analyzes the terms of use and privacy policies of online platforms to determine whether they comply with EU law.', 
                link: 'http://claudette.eui.eu/', 
                image: 'card12.svg', // Use the local image path
                correct: false 
            },
            { 
                name: 'ChatGPT', 
                description: 'simulates human conversations in dialogue format and provides answers to users’ questions.', 
                link: 'https://chatgpt.com/', 
                image: 'card13.png', // Use the local image path
                correct: false 
            },
            { 
                name: 'Stockfish', 
                description: 'is a powerful chess AI algorithm that plays the game at world champion level.', 
                link: 'https://stockfishchess.org/', 
                image: 'card14.svg', // Use the local image path
                correct: false 
            },
            { 
                name: 'Seeing AI', 
                description: 'supports visually impaired people by, for example, reading texts aloud, recognizing and describing people and products.', 
                link: 'https://www.seeingai.com/', 
                image: 'card15.svg', // Use the local image path
                correct: true 
            },
            { 
                name: 'Grammarly', 
                description: 'is a tool that helps you write clearly and precisely in English and corrects grammatically incorrect emails and documents.', 
                link: 'https://grammarly.com', 
                image: 'card8.svg', 
                correct: false 
            },        
        ]
    },
    {
        persona: {
            image: 'persona-card4.svg', // Persona image
            text: 'I have been stressed lately, especially because of my busy schedule. I would like to find books that I enjoy. Do you have any suggestions?'
        },
        solutions: [
            { 
                name: 'Readow', 
                description: 'gives suggestions for books a user might like, based on their favorite books.', 
                link: 'https://readow.ai/', 
                image: 'card16.svg', // Use the local image path
                correct: true 
            },
            { 
                name: 'Seeing AI', 
                description: 'supports visually impaired people by, for example, reading texts aloud, recognizing people and products, and describing them.', 
                link: 'https://www.seeingai.com/', 
                image: 'card15.svg', // Use the local image path
                correct: false 
            },
            { 
                name: 'Rainforrest Connection', 
                description: 'is a technology that enables people to monitor and protect the biodiversity and health of the rainforest.', 
                link: 'https://rfcx.org/', 
                image: 'card21.svg', // Use the local image path
                correct: false 
            },
            { 
                name: 'PoliTrack', 
                description: 'is an information platform about politicians and election-related information in Germany with visualizations and data analyses.', 
                link: 'https://politrack.org/', 
                image: 'card18.svg', // Use the local image path
                correct: false 
            },
            { 
                name: 'Plantix', 
                description: 'helps farmers identify (agricultural) plant diseases based on a photo, provides tips for treatment, and thus increases crop yields.', 
                link: 'https://plantix.net/en/', 
                image: 'card9.svg', 
                correct: false 
            }      
        ]
    },
    {
        persona: {
            image: 'persona-card5.svg', // Persona image
            text: 'As a non-native speaker working in an international company, I regularly write emails and reports in English, which means I spend a lot of time checking grammar. Do you have any suggestions?'
        },
        solutions: [
            { 
                name: 'KI4LSA', 
                description: 'is a project aimed at optimizing pedestrian traffic flow and safety by analyzing the traffic situation using sensors and adjusting the traffic light control accordingly.', 
                link: 'https://www.iosb-ina.fraunhofer.de/en/divisions/Machine-Learning/Research-topics-and-projects/Project-KI4LSA-Artificial-intelligence-for-light-signal-systems.html', 
                image: 'card19.svg', // Use the local image path
                correct: false 
            },
            { 
                name: 'Grammarly', 
                description: 'is a tool that helps you write clearly and precisely in English and corrects grammatically incorrect emails and documents.', 
                link: 'https://grammarly.com', 
                image: 'card8.svg', 
                correct: true 
            },
            { 
                name: 'Dall-E', 
                description: 'creates images based on text input. The generated images can be photorealistic or imitate a certain style and can be modified, for example, by inserting an element.', 
                link: 'https://www.dallefree.ai/', 
                image: 'card20.png', // Use the local image path
                correct: false 
            },
            { 
                name: 'Rainforrest Connection', 
                description: 'is a technology that enables people to monitor and protect the biodiversity and health of the rainforest.', 
                link: 'https://rfcx.org/', 
                image: 'card21.svg', // Use the local image path
                correct: false 
            },
            { 
                name: 'apic.ai', 
                description: 'analyzes the behavior of bees and bumblebees to detect the impact of environmental factors, agricultural practices, and substances on their health.', 
                link: 'https://apic.ai/', 
                image: 'card22.svg', 
                correct: false 
            }      
        ]
    },
    {
        persona: {
            image: 'persona-card6.svg', // Persona image
            text: 'I am a farmer and want to protect the bees in my region and fertilize my fields properly. How do I find the right balance?'
        },
        solutions: [
            { 
                name: 'apic.ai', 
                description: 'analyzes the behavior of bees and bumblebees to detect the impact of environmental factors, agricultural practices, and substances on their health.', 
                link: 'https://apic.ai/', 
                image: 'card22.svg', 
                correct: true 
            },
            { 
                name: 'Baumblick', 
                description: 'is an app that can predict which trees in Berlin are most threatened by drought, so residents can intervene early by watering them.', 
                link: 'https://baumblick.qtrees.ai/', 
                image: 'card4.svg', // Use the local image path
                correct: false 
            },
            { 
                name: 'SeaClear', 
                description: 'is a project that uses robots and object recognition to identify and remove plastic waste from the seabed.', 
                link: 'https://seaclear-project.eu/', 
                image: 'card5.svg', // Use the local image path
                correct: false 
            },        
            { 
                name: 'PoliTrack', 
                description: 'is an information platform about politicians and election-related information in Germany with visualizations and data analyses.', 
                link: 'https://politrack.org/', 
                image: 'card18.svg', // Use the local image path
                correct: false 
            },
            { 
                name: 'ChatGPT', 
                description: 'simulates human conversations in dialogue format and provides answers to users’ questions.', 
                link: 'https://chatgpt.com/', 
                image: 'card13.png', // Use the local image path
                correct: false 
            }
        ]
    },
    {
        persona: {
            image: 'persona-card7.svg', // Persona image
            text: 'Most of our teachers are completely overworked. How can we make their work easier?'
        },
        solutions: [
            { 
                name: 'Dall-E', 
                description: 'creates images based on text input. The generated images can be photorealistic or imitate a certain style and can be modified, for example, by inserting an element.', 
                link: 'https://www.dallefree.ai/', 
                image: 'card20.png', // Use the local image path
                correct: false 
            },
            { 
                name: 'Rainforrest Connection', 
                description: 'is a technology that enables people to monitor and protect the biodiversity and health of the rainforest.', 
                link: 'https://rfcx.org/', 
                image: 'card21.svg', // Use the local image path
                correct: false 
            },
            { 
                name: 'Fobizz', 
                description: 'presents a collection of tools that support teachers in planning and conducting lessons.', 
                link: 'https://tools.fobizz.com/', 
                image: 'card23.svg', // Use the local image path
                correct: true 
            },
            { 
                name: 'PoliTrack', 
                description: 'is an information platform about politicians and election-related information in Germany with visualizations and data analyses.', 
                link: 'https://politrack.org/', 
                image: 'card18.svg', // Use the local image path
                correct: false 
            },
            { 
                name: 'Claude', 
                description: 'is a chatbot that can help with various tasks, such as brainstorming ideas, generating text and code, and understanding topics.', 
                link: 'https://claude.ai/', 
                image: 'card24.svg', 
                correct: false 
            }      
        ]
    },
    {
        persona: {
            image: 'persona-card8.svg', // Persona image
            text: 'My partner has a birthday and I have no idea what to give him. Do you?'
        },
        solutions: [
            { 
                name: 'Claude', 
                description: 'is a chatbot that can help with various tasks, such as brainstorming ideas, generating text and code, and understanding topics.', 
                link: 'https://claude.ai/', 
                image: 'card24.svg', 
                correct: true 
            },
            { 
                name: 'Stockfish', 
                description: 'is a powerful chess AI algorithm that plays the game at world champion level.', 
                link: 'https://stockfishchess.org/', 
                image: 'card14.svg', // Use the local image path
                correct: false 
            },
            { 
                name: 'KI4LSA', 
                description: 'is a project aimed at optimizing pedestrian traffic flow and safety by analyzing the situation on the street with sensors and adjusting the traffic light control accordingly.', 
                link: 'https://www.iosb-ina.fraunhofer.de/en/divisions/Machine-Learning/Research-topics-and-projects/Project-KI4LSA-Artificial-intelligence-for-light-signal-systems.html', 
                image: 'card19.svg', // Use the local image path
                correct: false 
            },
            { 
                name: 'Flora Incognita', 
                description: 'is an AI-powered app that automatically identifies more than 16,000 vascular plant species based on photos.', 
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
            }
        ]
    }
];

// Track the score, current game level, and attempt status
let score = 0;
let currentLevel = 0;
let hasAttempted = false;

// Start game by hiding the start page and showing the game container
document.getElementById('start-button').addEventListener('click', () => {
    document.getElementById('start-page').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
    loadGameLevel(currentLevel); // Start the game from the first level
});

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
    if (!hasAttempted) {
        if (solution.correct) {
            // If correct and first try, increment the score
            score++;
            document.getElementById('score-value').textContent = score;
        } else {
            // If incorrect on the first try, mark as attempted
            hasAttempted = true;
        }
    }

    if (solution.correct) {
        // Check if there are more levels
        currentLevel++;
        if (currentLevel < gameData.length) {
            // Load next persona and solutions
            loadGameLevel(currentLevel);
        } else {
            // End of the game
            endGame();
        }
    } else {
        // If incorrect, show the modal
        showModal();
    }
}

// Function to load a specific game level
function loadGameLevel(level) {
    hasAttempted = false; // Reset the attempt flag for the new level
    const levelData = gameData[level];
    renderPersonaCard(levelData.persona); // Render the persona card
    renderSolutionCards(levelData.solutions); // Render the solution cards
}

// Function to replace game-container with "END OF THE GAME" and show the score
function endGame() {
    const gameContainer = document.getElementById('game-container');
    gameContainer.innerHTML = ''; // Clear the game container

    // Create end game container
    const endGameContainer = document.createElement('div');
    endGameContainer.classList.add('end-game-container');

    // Add end of game message and score
    const endMessage = `
        <h1>END OF THE GAME</h1>
        <h2>Your final score:  ${score} out of 8</h2>
        <p>Great! You have helped some people by recommending AI systems that could be useful for them. There are a variety of AI systems that can support us in different tasks. The possibilities are huge! </p> 
        <div id="slide-deck-container">
            <div id="prev-slide" class="slide-nav">&lt;</div>
            <div id="slide-deck" class="slide-deck"></div>
            <div id="next-slide" class="slide-nav">&gt;</div>
        </div>
        <p> To learn more about AI, scroll down and go to the next page (IV. Cross-domain systems of artificial intelligence).</p></p>
    `;

    endGameContainer.innerHTML = endMessage;
    gameContainer.appendChild(endGameContainer);

    // Gather all solution cards for the slideshow
    const allSolutionCards = [];
    gameData.forEach(level => {
        level.solutions.forEach(solution => {
            const cardHTML = `
                <div class="slide-card">
                    <img class="slide-image" src="${solution.image}" alt="${solution.name}">
                    <div class="slide-description">
                        <span><b>${solution.name} </b></span><span>${solution.description}</span>
                    </div>
                    <div class="card-link">More information: <a href="${solution.link}" target="_blank">${solution.link}</a></div>
                </div>
            `;
            allSolutionCards.push(cardHTML);
        });
    });

    // Insert the first few slides into the slide deck
    const slideDeck = document.getElementById('slide-deck');
    slideDeck.innerHTML = allSolutionCards[0]; // Start with the first slide

    let currentSlide = 0;

    // Function to show the next slide
    function showNextSlide() {
        currentSlide = (currentSlide + 1) % allSolutionCards.length;
        slideDeck.innerHTML = allSolutionCards[currentSlide];
    }

    // Function to show the previous slide
    function showPrevSlide() {
        currentSlide = (currentSlide - 1 + allSolutionCards.length) % allSolutionCards.length;
        slideDeck.innerHTML = allSolutionCards[currentSlide];
    }

    // Event listeners for navigation
    document.getElementById('next-slide').addEventListener('click', showNextSlide);
    document.getElementById('prev-slide').addEventListener('click', showPrevSlide);
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

// Initialize the game on DOM load
document.addEventListener('DOMContentLoaded', () => {
    loadGameLevel(currentLevel); // Start with the first level
    setupModal(); // Setup modal close functionality
});