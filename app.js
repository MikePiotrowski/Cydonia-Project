// This file has been moved to the js folder
// Redirecting to the new location
window.location.href = 'js/app.js';

// Helper function to show form messages
function showFormMessage(message, type) {
    const messageDiv = document.querySelector('.form-message');
    if (messageDiv) {
        messageDiv.textContent = message;
        messageDiv.className = 'form-message ' + type;

        // Hide the message after 3 seconds
        setTimeout(function() {
            messageDiv.style.display = 'none';
        }, 3000);
    }
}

// Box Animations
function initializeBoxAnimations() {
    const boxes = document.querySelectorAll('#boxes .box');

    boxes.forEach(box => {
        // Add click event to flip the box
        box.addEventListener('click', function() {
            this.classList.toggle('flipped');
        });
    });

    // Add styles for the box animations
    const style = document.createElement('style');
    style.textContent = `
        #boxes .box {
            perspective: 1000px;
            cursor: pointer;
        }

        #boxes .box.flipped {
            transform: rotateY(180deg) translateY(-5px);
            transition: transform 0.6s;
        }

        #boxes .box img {
            transition: transform 0.3s ease;
        }

        #boxes .box:hover img {
            transform: scale(1.1);
        }
    `;
    document.head.appendChild(style);
}

// Image Slideshow for Showcase
function initializeImageSlideshow() {
    const showcase = document.getElementById('showcase');
    if (!showcase) return;

    // Create an array of background images
    const images = [
        'url("../img/Mars.jpg")',
        'url("../img/showcase.jpg")'
    ];

    let currentImageIndex = 0;

    // Change background image every 5 seconds
    setInterval(function() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showcase.style.backgroundImage = images[currentImageIndex];
        showcase.style.transition = 'background-image 1s ease-in-out';
    }, 5000);
}

// Header Scroll Effect
function initializeHeaderScroll() {
    const header = document.querySelector('header');
    if (!header) return;

    // Add scrolled class when user scrolls down
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Check on initial load
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    }
}

// Mars Facts Counter
function initializeMarsFactsCounter() {
    // Create a new section for Mars facts with counters
    const mainContent = document.querySelector('#boxes');
    if (!mainContent) return;

    const factsSection = document.createElement('section');
    factsSection.id = 'mars-facts';
    factsSection.innerHTML = `
        <div class="container">
            <h2>Fascinating Mars Facts</h2>
            <div class="facts-container">
                <div class="fact">
                    <span class="counter" data-target="687">0</span>
                    <p>Earth days in a Mars year</p>
                </div>
                <div class="fact">
                    <span class="counter" data-target="2">0</span>
                    <p>Moons orbiting Mars</p>
                </div>
                <div class="fact">
                    <span class="counter" data-target="24.6">0</span>
                    <p>Hours in a Mars day</p>
                </div>
                <div class="fact">
                    <span class="counter" data-target="6779">0</span>
                    <p>Kilometers - Olympus Mons height</p>
                </div>
            </div>
        </div>
    `;

    // Insert the facts section before the boxes section
    mainContent.parentNode.insertBefore(factsSection, mainContent);

    // Add styles for the facts section
    const style = document.createElement('style');
    style.textContent = `
        #mars-facts {
            background: linear-gradient(rgba(139, 69, 19, 0.9), rgba(160, 82, 45, 0.9)), url('../img/Mars.jpg');
            background-size: cover;
            background-attachment: fixed;
            color: white;
            padding: 60px 0;
            text-align: center;
            margin-bottom: 40px;
        }

        #mars-facts h2 {
            font-size: 36px;
            margin-bottom: 40px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }

        .facts-container {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
        }

        .fact {
            width: 200px;
            margin: 20px;
            padding: 20px;
            background: rgba(0,0,0,0.3);
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            transition: transform 0.3s;
        }

        .fact:hover {
            transform: translateY(-10px);
        }

        .counter {
            font-size: 48px;
            font-weight: bold;
            color: #ffd700;
            display: block;
            margin-bottom: 10px;
        }

        .fact p {
            font-size: 16px;
            margin: 0;
        }

        @media(max-width: 768px) {
            .facts-container {
                flex-direction: column;
                align-items: center;
            }

            .fact {
                width: 80%;
                margin: 10px 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Animate the counters when they come into view
    const counters = document.querySelectorAll('.counter');

    // Check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Animate counter
    function animateCounter(counter) {
        const target = parseFloat(counter.getAttribute('data-target'));
        const duration = 2000; // ms
        const step = target / (duration / 16); // 60fps
        let current = 0;

        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                clearInterval(timer);
                counter.textContent = target;
            } else {
                // For decimal values, show one decimal place
                counter.textContent = Number.isInteger(target) ? 
                    Math.floor(current) : 
                    current.toFixed(1);
            }
        }, 16);
    }

    // Start animation when scrolled into view
    window.addEventListener('scroll', function() {
        counters.forEach(counter => {
            if (isInViewport(counter) && !counter.classList.contains('animated')) {
                counter.classList.add('animated');
                animateCounter(counter);
            }
        });
    });

    // Check on initial load
    setTimeout(() => {
        window.dispatchEvent(new Event('scroll'));
    }, 500);
}

// This file has been moved to the js folder
// Redirecting to the new location
window.location.href = 'js/app.js';