// Mars Cydonia Connection - JavaScript Functionality

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functions
    initializeScrollToTop();
    initializeNewsletterForm();
    initializeBoxAnimations();
    initializeImageSlideshow();
    initializeMarsFactsCounter();
    initializeHeaderScroll();
    initializeFaqAccordion();
    initializeContactForm();
    initializeEnhancedScrollbar(); // Initialize enhanced scrollbar features
    initialize3DModel(); // Initialize the 3D model viewer
    initializeImageComparison(); // Initialize the image comparison slider
    initializeMarsLiveData(); // Initialize the Mars live data section
    initializeInteractiveMarsMap(); // Initialize the interactive Mars map
    initializeMarsSounds(); // Initialize the Mars sounds section with Web Audio API
    initializeAccessibilityControls(); // Initialize accessibility controls
});

// Scroll to Top Button
function initializeScrollToTop() {
    // Create the button element
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.className = 'scroll-to-top';
    document.body.appendChild(scrollBtn);

    // Add styles for the button via JavaScript
    const style = document.createElement('style');
    style.textContent = `
        .scroll-to-top {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: #c1440e;
            color: white;
            border: none;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            font-size: 20px;
            cursor: pointer;
            display: none;
            z-index: 99;
            box-shadow: 0 2px 10px rgba(0,0,0,0.2);
            transition: background-color 0.3s, transform 0.3s;
        }
        .scroll-to-top:hover {
            background: #e8491d;
            transform: translateY(-3px);
        }
        .scroll-to-top.show {
            display: block;
            animation: fadeIn 0.3s;
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
    `;
    document.head.appendChild(style);

    // Show/hide the button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    });

    // Scroll to top when button is clicked
    scrollBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Newsletter Form Validation
function initializeNewsletterForm() {
    const form = document.querySelector('#newsletter form');
    const emailInput = document.querySelector('#newsletter input[type="email"]');

    if (form && emailInput) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const email = emailInput.value.trim();

            if (email === '') {
                showFormMessage('Please enter your email address', 'error');
                return;
            }

            if (!isValidEmail(email)) {
                showFormMessage('Please enter a valid email address', 'error');
                return;
            }

            // Simulate form submission
            showFormMessage('Thank you for subscribing!', 'success');
            emailInput.value = '';

            // Here you would normally send the data to a server
        });
    }

    // Create a message element if it doesn't exist
    if (!document.querySelector('.form-message')) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'form-message';
        if (form) {
            form.appendChild(messageDiv);
        }

        // Add styles for the message
        const style = document.createElement('style');
        style.textContent = `
            .form-message {
                margin-top: 10px;
                padding: 8px 12px;
                border-radius: 4px;
                font-size: 14px;
                display: none;
            }
            .form-message.error {
                background-color: #ffdddd;
                color: #f44336;
                border: 1px solid #f44336;
                display: block;
            }
            .form-message.success {
                background-color: #ddffdd;
                color: #4CAF50;
                border: 1px solid #4CAF50;
                display: block;
            }
        `;
        document.head.appendChild(style);
    }
}

// Helper function to validate email format
function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

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

// FAQ Accordion Functionality
function initializeFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');

    if (faqItems.length === 0) return;

    // Add click event to each FAQ question
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            // Check if this item is already active
            const isActive = item.classList.contains('active');

            // Close all items first
            faqItems.forEach(faqItem => {
                faqItem.classList.remove('active');
            });

            // If the clicked item wasn't active, make it active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // Open the first FAQ item by default
    if (faqItems.length > 0) {
        faqItems[0].classList.add('active');
    }

    // Add keyboard accessibility
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        // Add tabindex to make questions focusable
        question.setAttribute('tabindex', '0');

        // Add ARIA attributes for accessibility
        question.setAttribute('aria-expanded', 'false');
        const answer = item.querySelector('.faq-answer');
        const answerId = 'faq-answer-' + Math.random().toString(36).substr(2, 9);
        answer.id = answerId;
        question.setAttribute('aria-controls', answerId);

        // Handle keyboard events
        question.addEventListener('keydown', (e) => {
            // Enter or Space key
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                question.click();
            }
        });

        // Update ARIA attributes when toggled
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    const isActive = item.classList.contains('active');
                    question.setAttribute('aria-expanded', isActive ? 'true' : 'false');
                }
            });
        });

        observer.observe(item, { attributes: true });
    });
}

// Contact Form Functionality
function initializeContactForm() {
    const contactForm = document.getElementById('cydonia-contact-form');

    if (!contactForm) return;

    // Create a message element for form feedback
    const formMessage = document.createElement('div');
    formMessage.className = 'form-message';
    contactForm.appendChild(formMessage);

    // Add styles for the form message
    const style = document.createElement('style');
    style.textContent = `
        .form-message {
            margin-top: 20px;
            padding: 12px;
            border-radius: 5px;
            font-size: 16px;
            text-align: center;
            display: none;
        }
        .form-message.error {
            background-color: rgba(244, 67, 54, 0.2);
            color: #f44336;
            border: 1px solid #f44336;
        }
        .form-message.success {
            background-color: rgba(76, 175, 80, 0.2);
            color: #4CAF50;
            border: 1px solid #4CAF50;
        }
    `;
    document.head.appendChild(style);

    // Handle form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        // Validate form
        if (name === '' || email === '' || subject === '' || message === '') {
            showFormMessage('Please fill in all fields', 'error');
            return;
        }

        if (!isValidEmail(email)) {
            showFormMessage('Please enter a valid email address', 'error');
            return;
        }

        // Simulate form submission (in a real application, this would send data to a server)
        // Show loading state
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        // Simulate server delay
        setTimeout(function() {
            // Show success message
            showFormMessage('Thank you for your message! We will get back to you soon.', 'success');

            // Reset form
            contactForm.reset();

            // Reset button
            submitButton.textContent = originalButtonText;
            submitButton.disabled = false;
        }, 1500);
    });

    // Function to show form messages
    function showFormMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = 'form-message ' + type;
        formMessage.style.display = 'block';

        // Scroll to message
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

        // Hide message after 5 seconds for success messages
        if (type === 'success') {
            setTimeout(function() {
                formMessage.style.display = 'none';
            }, 5000);
        }
    }
}

/**
 * Enhanced Scrollbar Functionality
 * 
 * This function adds advanced interactive features to the scrollbar:
 * 1. A progress indicator at the top of the page showing scroll position
 * 2. Subtle section indicators that appear on hover for quick navigation
 * 3. Dynamic scrollbar colors that change based on the current section
 * 4. Particle effects that appear when scrolling quickly
 * 5. Custom cursors and visual feedback during interaction
 * 
 * Recent Updates:
 * - Section indicators have been redesigned to be much less distracting
 * - Indicators are now very subtle by default and only become more visible on hover
 * - Tooltips are smaller and only appear when explicitly hovering over an indicator
 * - Added a hover area along the scrollbar to make the indicators easier to access
 * - Removed animated effects that could be distracting
 * 
 * Browser Compatibility:
 * - Full functionality in Chrome, Edge, Safari, and Opera
 * - Partial functionality in Firefox (supports progress bar and section indicators,
 *   but custom scrollbar styling is limited)
 * - Basic functionality in Internet Explorer (progress bar only)
 */
function initializeEnhancedScrollbar() {
    // Create scroll progress indicator
    const progressContainer = document.createElement('div');
    progressContainer.className = 'scroll-progress-container';

    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress-bar';

    progressContainer.appendChild(progressBar);
    document.body.appendChild(progressContainer);

    // Define main sections to create indicators for
    const sections = [
        { id: 'showcase', label: 'Top' },
        { id: 'cydonia-info', label: 'Cydonia Info' },
        { id: 'boxes', label: 'Features' },
        { id: 'discovery-timeline', label: 'Timeline' },
        { id: 'faq-section', label: 'FAQ' },
        { id: 'contact-section', label: 'Contact' }
    ];

    // Create hover area for scrollbar
    const hoverArea = document.createElement('div');
    hoverArea.className = 'scrollbar-hover-area';
    document.body.appendChild(hoverArea);

    // Create section indicators
    const sectionIndicators = [];

    sections.forEach((section, index) => {
        const sectionElement = document.getElementById(section.id);
        if (!sectionElement) return;

        // Create indicator element
        const indicator = document.createElement('div');
        indicator.className = 'section-indicator';
        indicator.setAttribute('data-section', section.id);

        // Make tooltip less prominent by using data attribute instead of title
        indicator.setAttribute('data-tooltip', section.label);

        // Position indicator based on section position
        const sectionPosition = index / (sections.length - 1);
        const positionPercentage = 20 + (sectionPosition * 60); // Position between 20% and 80% of viewport height
        indicator.style.top = `${positionPercentage}%`;

        // Add click event to scroll to section
        indicator.addEventListener('click', () => {
            sectionElement.scrollIntoView({ behavior: 'smooth' });
        });

        document.body.appendChild(indicator);
        sectionIndicators.push({
            element: indicator,
            section: sectionElement
        });
    });

    // Add tooltip style for indicators - more subtle and only visible on hover
    const style = document.createElement('style');
    style.textContent = `
        .section-indicator::after {
            content: attr(data-tooltip);
            position: absolute;
            right: 15px;
            top: 50%;
            transform: translateY(-50%) translateX(10px);
            background: rgba(139, 69, 19, 0.7);
            color: white;
            padding: 3px 8px;
            border-radius: 3px;
            font-size: 11px;
            white-space: nowrap;
            opacity: 0;
            transition: all 0.3s ease;
            pointer-events: none;
            box-shadow: 0 1px 3px rgba(0,0,0,0.2);
            visibility: hidden;
        }

        .scrollbar-hover-area:hover ~ .section-indicator:hover::after,
        .section-indicator:hover::after {
            opacity: 0.9;
            transform: translateY(-50%) translateX(0);
            visibility: visible;
        }

        /* Remove animated pulse effect to be less distracting */
        .section-indicator.active {
            transition: all 0.3s ease;
        }
    `;
    document.head.appendChild(style);

    // Update progress and indicators on scroll
    window.addEventListener('scroll', () => {
        // Update progress bar
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercentage = (scrollTop / scrollHeight) * 100;

        progressBar.style.width = `${scrollPercentage}%`;

        // Add glow effect when near the end
        if (scrollPercentage > 90) {
            progressBar.style.boxShadow = '0 0 15px rgba(232, 73, 29, 0.8)';
        } else {
            progressBar.style.boxShadow = '0 0 10px rgba(232, 73, 29, 0.5)';
        }

        // Update section indicators - with more subtle active state
        sectionIndicators.forEach(({ element, section }) => {
            const rect = section.getBoundingClientRect();
            const isVisible = 
                rect.top < window.innerHeight / 2 && 
                rect.bottom > window.innerHeight / 2;

            if (isVisible) {
                element.classList.add('active');
                // Don't make the tooltip automatically visible for active indicators
                // to reduce distraction
            } else {
                element.classList.remove('active');
            }
        });
    });

    // Add scroll effects for the scrollbar thumb
    const scrollbarEffects = () => {
        // Create a style element for dynamic scrollbar effects
        const dynamicStyle = document.createElement('style');
        document.head.appendChild(dynamicStyle);

        // Change scrollbar color based on section
        window.addEventListener('scroll', () => {
            // Get current scroll position
            const scrollPosition = window.scrollY;

            // Determine which section we're in
            let currentSection = '';
            let gradientColors = ['#8b4513', '#a0522d']; // Default colors

            if (document.getElementById('showcase') && 
                scrollPosition < document.getElementById('showcase').offsetTop + document.getElementById('showcase').offsetHeight) {
                currentSection = 'showcase';
                gradientColors = ['#8b4513', '#a0522d']; // Brown gradient
            } else if (document.getElementById('cydonia-info') && 
                scrollPosition < document.getElementById('cydonia-info').offsetTop + document.getElementById('cydonia-info').offsetHeight) {
                currentSection = 'cydonia-info';
                gradientColors = ['#c1440e', '#e8491d']; // Red gradient
            } else if (document.getElementById('mars-facts') && 
                scrollPosition < document.getElementById('mars-facts').offsetTop + document.getElementById('mars-facts').offsetHeight) {
                currentSection = 'mars-facts';
                gradientColors = ['#ffd700', '#e8491d']; // Gold to red gradient
            } else if (document.getElementById('discovery-timeline') && 
                scrollPosition < document.getElementById('discovery-timeline').offsetTop + document.getElementById('discovery-timeline').offsetHeight) {
                currentSection = 'discovery-timeline';
                gradientColors = ['#8b4513', '#ffd700']; // Brown to gold gradient
            }

            // Update scrollbar thumb color
            dynamicStyle.textContent = `
                ::-webkit-scrollbar-thumb {
                    background: linear-gradient(to bottom, ${gradientColors[0]}, ${gradientColors[1]});
                    transition: background 0.5s ease;
                }
            `;
        });
    };

    // Initialize scrollbar effects
    scrollbarEffects();

    // Add scroll animation effect
    const addScrollAnimation = () => {
        // Detect scroll direction and speed
        let lastScrollTop = 0;
        let scrollDirection = 'down';
        let scrollSpeed = 0;
        let particleContainer = null;

        // Create particle container
        const createParticleContainer = () => {
            particleContainer = document.createElement('div');
            particleContainer.className = 'scroll-particles-container';
            document.body.appendChild(particleContainer);

            // Add styles for particles
            const particleStyle = document.createElement('style');
            particleStyle.textContent = `
                .scroll-particles-container {
                    position: fixed;
                    right: 0;
                    top: 0;
                    bottom: 0;
                    width: 30px;
                    pointer-events: none;
                    z-index: 998;
                    overflow: hidden;
                }

                .scroll-particle {
                    position: absolute;
                    width: 6px;
                    height: 6px;
                    background: var(--scroll-speed-color);
                    border-radius: 50%;
                    opacity: 0.7;
                    pointer-events: none;
                    z-index: 998;
                }
            `;
            document.head.appendChild(particleStyle);
        };

        // Create a particle
        const createParticle = (y, speed) => {
            if (!particleContainer) return;

            const particle = document.createElement('div');
            particle.className = 'scroll-particle';

            // Random position near scrollbar
            const xPos = Math.random() * 15;
            particle.style.right = `${xPos}px`;
            particle.style.top = `${y}px`;

            // Size based on speed
            const size = Math.min(3 + (speed / 10), 8);
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;

            // Color based on section
            particle.style.background = getComputedStyle(document.documentElement).getPropertyValue('--scroll-speed-color');

            // Add glow effect
            particle.style.boxShadow = `0 0 ${size}px ${size/2}px var(--scroll-speed-color)`;

            // Add to container
            particleContainer.appendChild(particle);

            // Animate and remove
            const direction = scrollDirection === 'down' ? 1 : -1;
            let opacity = 0.7;
            let posY = parseFloat(particle.style.top);

            const animateParticle = () => {
                if (opacity <= 0) {
                    particle.remove();
                    return;
                }

                // Move particle
                posY += direction * (speed / 30);
                opacity -= 0.02;

                particle.style.top = `${posY}px`;
                particle.style.opacity = opacity;

                requestAnimationFrame(animateParticle);
            };

            requestAnimationFrame(animateParticle);
        };

        // Initialize particle container
        createParticleContainer();

        window.addEventListener('scroll', () => {
            const st = window.pageYOffset || document.documentElement.scrollTop;

            // Determine scroll direction
            if (st > lastScrollTop) {
                scrollDirection = 'down';
            } else {
                scrollDirection = 'up';
            }

            // Calculate scroll speed (simplified)
            scrollSpeed = Math.abs(st - lastScrollTop);
            lastScrollTop = st;

            // Apply effects based on scroll speed
            if (scrollSpeed > 30) {
                // Fast scroll effect
                document.documentElement.style.setProperty('--scroll-speed-color', '#e8491d');

                // Create particles on fast scroll
                if (scrollSpeed > 50) {
                    // Calculate scrollbar position
                    const scrollPercentage = st / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
                    const scrollbarPos = scrollPercentage * window.innerHeight;

                    // Create 1-3 particles based on speed
                    const particleCount = Math.min(Math.floor(scrollSpeed / 50), 3);
                    for (let i = 0; i < particleCount; i++) {
                        // Create particles near the scrollbar position
                        const particlePos = scrollbarPos + (Math.random() * 100 - 50);
                        if (particlePos > 0 && particlePos < window.innerHeight) {
                            createParticle(particlePos, scrollSpeed);
                        }
                    }
                }
            } else {
                // Normal scroll effect
                document.documentElement.style.setProperty('--scroll-speed-color', '#8b4513');
            }
        });
    };

    // Initialize scroll animation
    addScrollAnimation();
}

/**
 * 3D Model Viewer for the Face on Mars
 * 
 * This function creates an interactive 3D model of the Face on Mars using Three.js.
 * It allows users to:
 * - Rotate, zoom, and pan the model
 * - Reset the view to the default position
 * - Switch between different visualization modes (Viking view, enhanced view, wireframe)
 * 
 * The model is procedurally generated based on terrain algorithms to simulate
 * the topography of the Face on Mars formation.
 */
function initialize3DModel() {
    const modelContainer = document.getElementById('mars-3d-model');
    if (!modelContainer) return;

    // Variables for Three.js
    let scene, camera, renderer, controls;
    let currentModel; // Reference to the currently displayed model
    let ambientLight, directionalLight, hemisphereLight;

    // Current view mode and structure
    let currentMode = 'viking';
    let currentStructure = 'face';

    // Object to store all models
    const models = {};

    // Texture loader
    const textureLoader = new THREE.TextureLoader();

    // Setup the scene
    function initScene() {
        // Create scene
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0x000000);

        // Create camera
        camera = new THREE.PerspectiveCamera(60, modelContainer.clientWidth / modelContainer.clientHeight, 0.1, 1000);
        camera.position.set(0, 5, 10);

        // Create renderer with improved settings
        renderer = new THREE.WebGLRenderer({ 
            antialias: true,
            alpha: true,
            preserveDrawingBuffer: true
        });
        renderer.setSize(modelContainer.clientWidth, modelContainer.clientHeight);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Softer shadows
        renderer.outputEncoding = THREE.sRGBEncoding; // Improved color rendering
        modelContainer.appendChild(renderer.domElement);

        // Add enhanced orbit controls
        controls = new THREE.OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.screenSpacePanning = false;
        controls.minDistance = 5;
        controls.maxDistance = 20;
        controls.maxPolarAngle = Math.PI / 2;
        controls.autoRotate = false; // Enable auto-rotation option
        controls.autoRotateSpeed = 0.5;

        // Add improved lighting system
        // Ambient light for base illumination
        ambientLight = new THREE.AmbientLight(0x404040, 0.5);
        scene.add(ambientLight);

        // Main directional light (sun)
        directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 10, 7.5);
        directionalLight.castShadow = true;

        // Improved shadow settings
        directionalLight.shadow.mapSize.width = 1024;
        directionalLight.shadow.mapSize.height = 1024;
        directionalLight.shadow.camera.near = 0.5;
        directionalLight.shadow.camera.far = 50;
        directionalLight.shadow.bias = -0.0005;

        scene.add(directionalLight);

        // Hemisphere light for more realistic environmental lighting
        hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x443333, 0.5);
        scene.add(hemisphereLight);

        // Add a subtle red point light to simulate Mars lighting
        const pointLight = new THREE.PointLight(0xff4500, 0.5);
        pointLight.position.set(-10, 5, 0);
        scene.add(pointLight);

        // Add stars background
        addStarsBackground();

        // Handle window resize
        window.addEventListener('resize', onWindowResize);
    }

    // Create all models
    function createModels() {
        createFaceModel();
        createPyramidModel();
        createFortModel();
        createCityModel();

        // Set the initial model (Face on Mars)
        switchModel('face');
    }

    // Create the Face on Mars model
    function createFaceModel() {
        // Create a plane geometry for the terrain with higher resolution
        const geometry = new THREE.PlaneGeometry(10, 10, 256, 256);

        // Apply height displacement to create the face-like terrain
        const vertices = geometry.attributes.position.array;
        for (let i = 0; i < vertices.length; i += 3) {
            const x = vertices[i];
            const z = vertices[i + 2];

            // Create the basic terrain with some randomness
            let height = Math.sin(x) * Math.cos(z) * 0.5;

            // Add face-like features with more detail
            // Eyes
            const leftEye = Math.exp(-Math.pow(x + 2, 2) - Math.pow(z + 1, 2));
            const rightEye = Math.exp(-Math.pow(x - 2, 2) - Math.pow(z + 1, 2));

            // Eye details
            const leftPupil = -0.2 * Math.exp(-Math.pow(x + 2, 2) / 0.1 - Math.pow(z + 1, 2) / 0.1);
            const rightPupil = -0.2 * Math.exp(-Math.pow(x - 2, 2) / 0.1 - Math.pow(z + 1, 2) / 0.1);

            // Eyebrows
            const leftBrow = 0.2 * Math.exp(-Math.pow(x + 2, 2) / 0.5 - Math.pow(z + 0.5, 2) / 0.1);
            const rightBrow = 0.2 * Math.exp(-Math.pow(x - 2, 2) / 0.5 - Math.pow(z + 0.5, 2) / 0.1);

            // Nose with more detail
            const nose = 0.5 * Math.exp(-Math.pow(x, 2) / 0.5 - Math.pow(z - 1, 2) / 0.5);
            const nostrilLeft = -0.1 * Math.exp(-Math.pow(x + 0.5, 2) / 0.1 - Math.pow(z - 1.5, 2) / 0.1);
            const nostrilRight = -0.1 * Math.exp(-Math.pow(x - 0.5, 2) / 0.1 - Math.pow(z - 1.5, 2) / 0.1);

            // Mouth with more detail
            const mouth = -0.5 * Math.exp(-Math.pow(x, 2) / 2 - Math.pow(z - 3, 2) / 0.5);
            const lips = 0.1 * Math.exp(-Math.pow(x, 2) / 2 - Math.pow(z - 2.7, 2) / 0.1);

            // Cheeks
            const leftCheek = 0.2 * Math.exp(-Math.pow(x + 3, 2) - Math.pow(z - 1.5, 2));
            const rightCheek = 0.2 * Math.exp(-Math.pow(x - 3, 2) - Math.pow(z - 1.5, 2));

            // Combine all features
            height += leftEye + rightEye + leftPupil + rightPupil + leftBrow + rightBrow;
            height += nose + nostrilLeft + nostrilRight;
            height += mouth + lips + leftCheek + rightCheek;

            // Add some noise for realism (less noise for more defined features)
            height += (Math.random() - 0.5) * 0.05;

            vertices[i + 1] = height;
        }

        // Update normals for proper lighting
        geometry.computeVertexNormals();

        // Create materials for different view modes
        const vikingMaterial = new THREE.MeshStandardMaterial({
            color: 0xb2714d,
            roughness: 0.8,
            metalness: 0.2,
            flatShading: false
        });

        const enhancedMaterial = new THREE.MeshStandardMaterial({
            color: 0xc1440e,
            roughness: 0.6,
            metalness: 0.4,
            flatShading: false
        });

        const wireframeMaterial = new THREE.MeshBasicMaterial({
            color: 0xe8491d,
            wireframe: true
        });

        // Load Mars texture for textured view
        const marsTexture = textureLoader.load('https://mars3d.oss-accelerate.aliyuncs.com/data/textures/mars_1k_color.jpg');
        const marsBumpMap = textureLoader.load('https://mars3d.oss-accelerate.aliyuncs.com/data/textures/mars_1k_normal.jpg');

        const texturedMaterial = new THREE.MeshStandardMaterial({
            map: marsTexture,
            bumpMap: marsBumpMap,
            bumpScale: 0.1,
            roughness: 0.7,
            metalness: 0.2
        });

        // Create the terrain mesh with the Viking material as default
        const model = new THREE.Mesh(geometry, vikingMaterial);
        model.rotation.x = -Math.PI / 2; // Rotate to horizontal
        model.receiveShadow = true;
        model.castShadow = true;

        // Store all materials for switching
        model.userData = {
            materials: {
                viking: vikingMaterial,
                enhanced: enhancedMaterial,
                wireframe: wireframeMaterial,
                textured: texturedMaterial
            }
        };

        // Store the model
        models.face = model;
    }

    // Create the D&M Pyramid model
    function createPyramidModel() {
        // Create a pyramid geometry
        const pyramidGeometry = new THREE.ConeGeometry(5, 4, 5, 1, false);

        // Adjust vertices to make it look more like the D&M Pyramid
        const vertices = pyramidGeometry.attributes.position.array;
        for (let i = 0; i < vertices.length; i += 3) {
            // Add some irregularities to make it look more natural/eroded
            if (vertices[i + 1] > 0) { // Only modify the top part
                // Add some random displacement to the vertices
                vertices[i] += (Math.random() - 0.5) * 0.5;
                vertices[i + 2] += (Math.random() - 0.5) * 0.5;

                // Add some erosion to the top
                if (vertices[i + 1] > 3) {
                    vertices[i + 1] -= Math.random() * 0.3;
                }
            }
        }

        // Update normals for proper lighting
        pyramidGeometry.computeVertexNormals();

        // Create materials for different view modes
        const vikingMaterial = new THREE.MeshStandardMaterial({
            color: 0xb2714d,
            roughness: 0.9,
            metalness: 0.1,
            flatShading: true
        });

        const enhancedMaterial = new THREE.MeshStandardMaterial({
            color: 0xc1440e,
            roughness: 0.7,
            metalness: 0.3,
            flatShading: true
        });

        const wireframeMaterial = new THREE.MeshBasicMaterial({
            color: 0xe8491d,
            wireframe: true
        });

        // Load stone texture for textured view
        const stoneTexture = textureLoader.load('https://threejs.org/examples/textures/brick_diffuse.jpg');
        const stoneBumpMap = textureLoader.load('https://threejs.org/examples/textures/brick_bump.jpg');

        const texturedMaterial = new THREE.MeshStandardMaterial({
            map: stoneTexture,
            bumpMap: stoneBumpMap,
            bumpScale: 0.1,
            roughness: 0.8,
            metalness: 0.1
        });

        // Create the pyramid mesh
        const model = new THREE.Mesh(pyramidGeometry, vikingMaterial);
        model.rotation.x = 0; // No rotation needed
        model.position.y = -2; // Position it on the ground
        model.receiveShadow = true;
        model.castShadow = true;

        // Store all materials for switching
        model.userData = {
            materials: {
                viking: vikingMaterial,
                enhanced: enhancedMaterial,
                wireframe: wireframeMaterial,
                textured: texturedMaterial
            }
        };

        // Store the model
        models.pyramid = model;
    }

    // Create The Fort model
    function createFortModel() {
        // Create a group to hold all parts of the fort
        const fortGroup = new THREE.Group();

        // Create the main structure (a box with modified top)
        const mainGeometry = new THREE.BoxGeometry(8, 3, 8);

        // Modify the top vertices to create a more complex structure
        const vertices = mainGeometry.attributes.position.array;
        for (let i = 0; i < vertices.length; i += 3) {
            // Only modify the top vertices
            if (vertices[i + 1] > 1) {
                // Add some random displacement for natural look
                vertices[i] += (Math.random() - 0.5) * 0.3;
                vertices[i + 2] += (Math.random() - 0.5) * 0.3;

                // Create a central depression (like a courtyard)
                const distFromCenter = Math.sqrt(vertices[i] * vertices[i] + vertices[i + 2] * vertices[i + 2]);
                if (distFromCenter < 2) {
                    vertices[i + 1] -= 1.0;
                }
            }
        }

        // Update normals for proper lighting
        mainGeometry.computeVertexNormals();

        // Create materials for different view modes
        const vikingMaterial = new THREE.MeshStandardMaterial({
            color: 0xa3684a,
            roughness: 0.9,
            metalness: 0.1,
            flatShading: true
        });

        const enhancedMaterial = new THREE.MeshStandardMaterial({
            color: 0xb35c39,
            roughness: 0.7,
            metalness: 0.3,
            flatShading: true
        });

        const wireframeMaterial = new THREE.MeshBasicMaterial({
            color: 0xe8491d,
            wireframe: true
        });

        // Load rock texture for textured view
        const rockTexture = textureLoader.load('https://threejs.org/examples/textures/terrain/grasslight-big.jpg');
        const rockBumpMap = textureLoader.load('https://threejs.org/examples/textures/terrain/grasslight-big-nm.jpg');

        const texturedMaterial = new THREE.MeshStandardMaterial({
            map: rockTexture,
            bumpMap: rockBumpMap,
            bumpScale: 0.2,
            roughness: 0.8,
            metalness: 0.1
        });

        // Create the main structure mesh
        const mainStructure = new THREE.Mesh(mainGeometry, vikingMaterial);
        mainStructure.position.y = -0.5;
        mainStructure.receiveShadow = true;
        mainStructure.castShadow = true;

        // Add the main structure to the group
        fortGroup.add(mainStructure);

        // Add some smaller structures on top (like towers)
        for (let i = 0; i < 4; i++) {
            const towerGeometry = new THREE.CylinderGeometry(0.5, 0.7, 2, 8);
            const tower = new THREE.Mesh(towerGeometry, vikingMaterial);

            // Position towers at corners
            const angle = (i * Math.PI / 2) + (Math.PI / 4);
            tower.position.x = 3 * Math.cos(angle);
            tower.position.z = 3 * Math.sin(angle);
            tower.position.y = 1.5;

            tower.receiveShadow = true;
            tower.castShadow = true;

            fortGroup.add(tower);
        }

        // Store all materials for switching
        fortGroup.userData = {
            materials: {
                viking: vikingMaterial,
                enhanced: enhancedMaterial,
                wireframe: wireframeMaterial,
                textured: texturedMaterial
            }
        };

        // Store the model
        models.fort = fortGroup;
    }

    // Create the City Complex model
    function createCityModel() {
        // Create a group to hold all parts of the city
        const cityGroup = new THREE.Group();

        // Create a base terrain
        const terrainGeometry = new THREE.PlaneGeometry(15, 15, 64, 64);

        // Apply height displacement to create terrain
        const vertices = terrainGeometry.attributes.position.array;
        for (let i = 0; i < vertices.length; i += 3) {
            const x = vertices[i];
            const z = vertices[i + 2];

            // Create a slightly uneven terrain
            let height = Math.sin(x * 0.5) * Math.cos(z * 0.5) * 0.2;

            // Add some random noise
            height += (Math.random() - 0.5) * 0.1;

            vertices[i + 1] = height;
        }

        // Update normals for proper lighting
        terrainGeometry.computeVertexNormals();

        // Create materials for different view modes
        const vikingMaterial = new THREE.MeshStandardMaterial({
            color: 0xb2714d,
            roughness: 0.9,
            metalness: 0.1,
            flatShading: false
        });

        const enhancedMaterial = new THREE.MeshStandardMaterial({
            color: 0xc1440e,
            roughness: 0.7,
            metalness: 0.3,
            flatShading: false
        });

        const wireframeMaterial = new THREE.MeshBasicMaterial({
            color: 0xe8491d,
            wireframe: true
        });

        // Load Mars surface texture for textured view
        const marsTexture = textureLoader.load('https://mars3d.oss-accelerate.aliyuncs.com/data/textures/mars_1k_color.jpg');
        const marsBumpMap = textureLoader.load('https://mars3d.oss-accelerate.aliyuncs.com/data/textures/mars_1k_normal.jpg');

        const texturedMaterial = new THREE.MeshStandardMaterial({
            map: marsTexture,
            bumpMap: marsBumpMap,
            bumpScale: 0.05,
            roughness: 0.8,
            metalness: 0.1
        });

        // Create the terrain mesh
        const terrain = new THREE.Mesh(terrainGeometry, vikingMaterial);
        terrain.rotation.x = -Math.PI / 2; // Rotate to horizontal
        terrain.position.y = -1;
        terrain.receiveShadow = true;
        terrain.castShadow = false;

        // Add the terrain to the group
        cityGroup.add(terrain);

        // Add buildings in a grid pattern
        const buildingCount = 25; // 5x5 grid
        const gridSize = 10;
        const buildingSpacing = gridSize / 5;

        for (let i = 0; i < buildingCount; i++) {
            // Calculate grid position
            const row = Math.floor(i / 5);
            const col = i % 5;

            // Calculate position with some randomness
            const posX = (col - 2) * buildingSpacing + (Math.random() - 0.5) * 0.5;
            const posZ = (row - 2) * buildingSpacing + (Math.random() - 0.5) * 0.5;

            // Randomize building type
            const buildingType = Math.floor(Math.random() * 3);
            let buildingGeometry;

            if (buildingType === 0) {
                // Pyramid-like building
                buildingGeometry = new THREE.ConeGeometry(0.4, 0.8, 4, 1);
            } else if (buildingType === 1) {
                // Box-like building
                const width = 0.4 + Math.random() * 0.3;
                const height = 0.5 + Math.random() * 0.5;
                const depth = 0.4 + Math.random() * 0.3;
                buildingGeometry = new THREE.BoxGeometry(width, height, depth);
            } else {
                // Cylindrical building
                const radius = 0.3 + Math.random() * 0.2;
                const height = 0.4 + Math.random() * 0.6;
                buildingGeometry = new THREE.CylinderGeometry(radius, radius, height, 8);
            }

            // Create the building mesh
            const building = new THREE.Mesh(buildingGeometry, vikingMaterial);

            // Position the building
            building.position.x = posX;
            building.position.z = posZ;

            // Adjust y position based on terrain height at this position
            const terrainHeight = Math.sin(posX * 0.5) * Math.cos(posZ * 0.5) * 0.2;
            building.position.y = terrainHeight + (buildingType === 1 ? 0.25 : 0.4);

            building.receiveShadow = true;
            building.castShadow = true;

            // Add the building to the group
            cityGroup.add(building);
        }

        // Add a central larger structure (like a temple or administrative building)
        const centralGeometry = new THREE.BoxGeometry(1.5, 1.2, 1.5);
        const centralBuilding = new THREE.Mesh(centralGeometry, vikingMaterial);
        centralBuilding.position.y = 0.6;
        centralBuilding.receiveShadow = true;
        centralBuilding.castShadow = true;
        cityGroup.add(centralBuilding);

        // Add a pyramid on top of the central building
        const pyramidGeometry = new THREE.ConeGeometry(0.7, 0.8, 4, 1);
        const pyramid = new THREE.Mesh(pyramidGeometry, vikingMaterial);
        pyramid.position.y = 1.4;
        pyramid.receiveShadow = true;
        pyramid.castShadow = true;
        cityGroup.add(pyramid);

        // Store all materials for switching
        cityGroup.userData = {
            materials: {
                viking: vikingMaterial,
                enhanced: enhancedMaterial,
                wireframe: wireframeMaterial,
                textured: texturedMaterial
            }
        };

        // Store the model
        models.city = cityGroup;
    }

    // Function to switch between models
    function switchModel(structureType) {
        // Remove current model from scene if it exists
        if (currentModel) {
            scene.remove(currentModel);
        }

        // Get the requested model
        const model = models[structureType];

        if (model) {
            // Add the new model to the scene
            scene.add(model);
            currentModel = model;
            currentStructure = structureType;

            // Apply the current view mode
            applyViewMode(currentMode);

            // Reset camera position based on model type
            resetCameraForModel(structureType);
        }
    }

    // Reset camera position based on model type
    function resetCameraForModel(structureType) {
        switch(structureType) {
            case 'face':
                camera.position.set(0, 5, 10);
                break;
            case 'pyramid':
                camera.position.set(0, 3, 8);
                break;
            case 'fort':
                camera.position.set(0, 4, 10);
                break;
            case 'city':
                camera.position.set(0, 8, 12);
                break;
            default:
                camera.position.set(0, 5, 10);
        }

        camera.lookAt(0, 0, 0);
        controls.update();
    }

    // Apply the current view mode to the model
    function applyViewMode(mode) {
        if (currentModel && currentModel.userData && currentModel.userData.materials) {
            // For group models, apply material to all children
            if (currentModel.isGroup) {
                currentModel.traverse(function(child) {
                    if (child.isMesh && currentModel.userData.materials[mode]) {
                        child.material = currentModel.userData.materials[mode];
                    }
                });
            } 
            // For single mesh models
            else if (currentModel.userData.materials[mode]) {
                currentModel.material = currentModel.userData.materials[mode];
            }

            // Adjust lighting for different modes
            if (mode === 'viking') {
                directionalLight.position.set(5, 10, 7.5);
                directionalLight.intensity = 1;
                hemisphereLight.intensity = 0.5;
            } else if (mode === 'enhanced') {
                directionalLight.position.set(-5, 8, 5);
                directionalLight.intensity = 1.5;
                hemisphereLight.intensity = 0.7;
            } else if (mode === 'wireframe') {
                directionalLight.intensity = 0.5;
                hemisphereLight.intensity = 0.3;
            } else if (mode === 'textured') {
                directionalLight.position.set(3, 10, 5);
                directionalLight.intensity = 1.2;
                hemisphereLight.intensity = 0.6;
            }
        }
    }

    // Add a starry background
    function addStarsBackground() {
        const starsGeometry = new THREE.BufferGeometry();
        const starsMaterial = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 0.1,
            transparent: true,
            opacity: 0.8,
            sizeAttenuation: true
        });

        const starsVertices = [];
        for (let i = 0; i < 2000; i++) {
            const x = (Math.random() - 0.5) * 2000;
            const y = (Math.random() - 0.5) * 2000;
            const z = (Math.random() - 0.5) * 2000;
            starsVertices.push(x, y, z);
        }

        starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3));
        const stars = new THREE.Points(starsGeometry, starsMaterial);
        scene.add(stars);
    }

    // Handle window resize
    function onWindowResize() {
        camera.aspect = modelContainer.clientWidth / modelContainer.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(modelContainer.clientWidth, modelContainer.clientHeight);
    }

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    }

    // Initialize the scene and start animation
    initScene();
    createModels(); // Create all models instead of just terrain
    animate();

    // Add event listeners for control buttons
    const resetViewBtn = document.getElementById('reset-view');
    if (resetViewBtn) {
        resetViewBtn.addEventListener('click', function() {
            // Reset camera position based on current model
            resetCameraForModel(currentStructure);
        });
    }

    // Structure selector dropdown
    const structureSelect = document.getElementById('structure-select');
    if (structureSelect) {
        structureSelect.addEventListener('change', function() {
            // Get the selected structure
            const selectedStructure = this.value;

            // Switch to the selected model
            switchModel(selectedStructure);

            // Update the section title to reflect the current structure
            updateModelTitle(selectedStructure);
        });
    }

    // Function to update the model section title
    function updateModelTitle(structureType) {
        const sectionTitle = document.querySelector('#model3d-section .section-title');
        const sectionDescription = document.querySelector('#model3d-section .section-description');

        if (sectionTitle && sectionDescription) {
            // Update title and description based on structure type
            switch(structureType) {
                case 'face':
                    sectionTitle.textContent = 'Interactive 3D Model: The Face on Mars';
                    sectionDescription.textContent = 'Explore the famous "Face on Mars" in three dimensions. Rotate, zoom, and examine the structure from all angles to form your own opinion about this intriguing Martian formation.';
                    break;
                case 'pyramid':
                    sectionTitle.textContent = 'Interactive 3D Model: The D&M Pyramid';
                    sectionDescription.textContent = 'Examine the five-sided D&M Pyramid, one of the most geometric structures in the Cydonia region. This pyramid-like formation has sparked debate due to its seemingly regular shape.';
                    break;
                case 'fort':
                    sectionTitle.textContent = 'Interactive 3D Model: The Fort';
                    sectionDescription.textContent = 'Investigate "The Fort," a rectangular formation in Cydonia with what appears to be a central courtyard and corner structures resembling bastions or towers.';
                    break;
                case 'city':
                    sectionTitle.textContent = 'Interactive 3D Model: The City Complex';
                    sectionDescription.textContent = 'Explore the potential city complex in the Cydonia region, featuring multiple structures arranged in what some researchers suggest resembles an ancient settlement pattern.';
                    break;
            }
        }
    }

    // View mode buttons
    const viewButtons = document.querySelectorAll('.view-btn');
    viewButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            viewButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            // Get the view mode from the button ID
            const mode = this.id.replace('view-', '');

            // Update current mode
            currentMode = mode;

            // Apply the view mode to the current model
            applyViewMode(mode);
        });
    });

    // Add keyboard controls for accessibility
    document.addEventListener('keydown', function(event) {
        // Arrow keys for rotation
        if (event.key === 'ArrowLeft') {
            controls.rotateLeft(0.1);
        } else if (event.key === 'ArrowRight') {
            controls.rotateRight(0.1);
        } else if (event.key === 'ArrowUp') {
            controls.rotateUp(0.1);
        } else if (event.key === 'ArrowDown') {
            controls.rotateDown(0.1);
        }
        // Plus/minus for zoom
        else if (event.key === '+' || event.key === '=') {
            controls.dollyIn(1.1);
        } else if (event.key === '-' || event.key === '_') {
            controls.dollyOut(1.1);
        }
        // R to reset view
        else if (event.key === 'r' || event.key === 'R') {
            resetCameraForModel(currentStructure);
        }
        // Number keys 1-4 to switch models
        else if (event.key === '1') {
            switchModel('face');
            updateModelTitle('face');
            if (structureSelect) structureSelect.value = 'face';
        } else if (event.key === '2') {
            switchModel('pyramid');
            updateModelTitle('pyramid');
            if (structureSelect) structureSelect.value = 'pyramid';
        } else if (event.key === '3') {
            switchModel('fort');
            updateModelTitle('fort');
            if (structureSelect) structureSelect.value = 'fort';
        } else if (event.key === '4') {
            switchModel('city');
            updateModelTitle('city');
            if (structureSelect) structureSelect.value = 'city';
        }
        // View mode keys
        else if (event.key === 'v' || event.key === 'V') {
            currentMode = 'viking';
            applyViewMode(currentMode);
            viewButtons.forEach(btn => {
                btn.classList.toggle('active', btn.id === 'view-viking');
            });
        } else if (event.key === 'e' || event.key === 'E') {
            currentMode = 'enhanced';
            applyViewMode(currentMode);
            viewButtons.forEach(btn => {
                btn.classList.toggle('active', btn.id === 'view-enhanced');
            });
        } else if (event.key === 'w' || event.key === 'W') {
            currentMode = 'wireframe';
            applyViewMode(currentMode);
            viewButtons.forEach(btn => {
                btn.classList.toggle('active', btn.id === 'view-wireframe');
            });
        } else if (event.key === 't' || event.key === 'T') {
            currentMode = 'textured';
            applyViewMode(currentMode);
            viewButtons.forEach(btn => {
                btn.classList.toggle('active', btn.id === 'view-textured');
            });
        }
    });

    // Add loading indicator
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'loading-indicator';
    loadingDiv.innerHTML = '<span>Loading 3D Model...</span>';
    loadingDiv.style.position = 'absolute';
    loadingDiv.style.top = '50%';
    loadingDiv.style.left = '50%';
    loadingDiv.style.transform = 'translate(-50%, -50%)';
    loadingDiv.style.color = '#ffd700';
    loadingDiv.style.fontSize = '20px';
    loadingDiv.style.fontWeight = 'bold';
    loadingDiv.style.textShadow = '0 0 10px rgba(0,0,0,0.5)';
    modelContainer.appendChild(loadingDiv);

    // Remove loading indicator after a short delay
    setTimeout(() => {
        loadingDiv.style.opacity = '0';
        setTimeout(() => {
            loadingDiv.remove();
        }, 500);
    }, 1500);

    // Add info tooltip
    const infoTooltip = document.createElement('div');
    infoTooltip.className = 'model-tooltip';
    infoTooltip.innerHTML = 'Click and drag to rotate. Scroll to zoom.';
    infoTooltip.style.position = 'absolute';
    infoTooltip.style.bottom = '10px';
    infoTooltip.style.right = '10px';
    infoTooltip.style.background = 'rgba(0,0,0,0.7)';
    infoTooltip.style.color = '#fff';
    infoTooltip.style.padding = '5px 10px';
    infoTooltip.style.borderRadius = '5px';
    infoTooltip.style.fontSize = '12px';
    infoTooltip.style.opacity = '0.7';
    infoTooltip.style.transition = 'opacity 0.3s';
    modelContainer.appendChild(infoTooltip);

    // Hide tooltip after 5 seconds
    setTimeout(() => {
        infoTooltip.style.opacity = '0';
        setTimeout(() => {
            infoTooltip.remove();
        }, 500);
    }, 5000);
}

/**
 * Image Comparison Slider
 * 
 * This function creates an interactive before/after image comparison slider.
 * Users can drag the slider to reveal different portions of two images,
 * allowing for easy comparison between the original Viking images and
 * higher-resolution images from later Mars missions.
 */
function initializeImageComparison() {
    const comparisonWrappers = document.querySelectorAll('.comparison-wrapper');

    if (comparisonWrappers.length === 0) return;

    comparisonWrappers.forEach(wrapper => {
        const slider = wrapper.querySelector('.comparison-slider');
        const originalImage = wrapper.querySelector('.comparison-item.original');

        if (!slider || !originalImage) return;

        let isActive = false;

        // Set initial position
        const initialPosition = 50; // 50%
        updateSliderPosition(initialPosition);

        // Function to update slider position
        function updateSliderPosition(position) {
            // Constrain position between 0 and 100
            position = Math.max(0, Math.min(position, 100));

            // Update slider position
            slider.style.left = `${position}%`;

            // Update original image width
            originalImage.style.width = `${position}%`;
        }

        // Mouse events
        slider.addEventListener('mousedown', () => {
            isActive = true;
        });

        window.addEventListener('mouseup', () => {
            isActive = false;
        });

        window.addEventListener('mousemove', (e) => {
            if (!isActive) return;

            // Calculate new position
            const rect = wrapper.getBoundingClientRect();
            const position = ((e.clientX - rect.left) / rect.width) * 100;

            updateSliderPosition(position);
        });

        // Touch events for mobile
        slider.addEventListener('touchstart', (e) => {
            isActive = true;
            e.preventDefault(); // Prevent scrolling while dragging
        });

        window.addEventListener('touchend', () => {
            isActive = false;
        });

        window.addEventListener('touchcancel', () => {
            isActive = false;
        });

        window.addEventListener('touchmove', (e) => {
            if (!isActive || e.touches.length !== 1) return;

            // Calculate new position
            const touch = e.touches[0];
            const rect = wrapper.getBoundingClientRect();
            const position = ((touch.clientX - rect.left) / rect.width) * 100;

            updateSliderPosition(position);
            e.preventDefault(); // Prevent scrolling while dragging
        });

        // Add animation effect when hovering over the slider
        slider.addEventListener('mouseenter', () => {
            slider.querySelector('.slider-button').style.transform = 'translate(-50%, -50%) scale(1.1)';
        });

        slider.addEventListener('mouseleave', () => {
            if (!isActive) {
                slider.querySelector('.slider-button').style.transform = 'translate(-50%, -50%)';
            }
        });

        // Add keyboard accessibility
        slider.setAttribute('tabindex', '0');
        slider.setAttribute('role', 'slider');
        slider.setAttribute('aria-valuemin', '0');
        slider.setAttribute('aria-valuemax', '100');
        slider.setAttribute('aria-valuenow', initialPosition.toString());

        slider.addEventListener('keydown', (e) => {
            let newPosition = parseFloat(slider.getAttribute('aria-valuenow'));

            // Left/right arrow keys to move slider
            if (e.key === 'ArrowLeft') {
                newPosition -= 5;
            } else if (e.key === 'ArrowRight') {
                newPosition += 5;
            }

            updateSliderPosition(newPosition);
            slider.setAttribute('aria-valuenow', newPosition.toString());
        });

        // Add instructions tooltip
        const tooltip = document.createElement('div');
        tooltip.className = 'comparison-tooltip';
        tooltip.textContent = 'Drag slider to compare images';
        tooltip.style.position = 'absolute';
        tooltip.style.top = '10px';
        tooltip.style.left = '50%';
        tooltip.style.transform = 'translateX(-50%)';
        tooltip.style.background = 'rgba(0,0,0,0.7)';
        tooltip.style.color = '#fff';
        tooltip.style.padding = '5px 10px';
        tooltip.style.borderRadius = '5px';
        tooltip.style.fontSize = '12px';
        tooltip.style.zIndex = '4';
        tooltip.style.opacity = '0.7';
        tooltip.style.transition = 'opacity 0.3s';
        wrapper.appendChild(tooltip);

        // Hide tooltip after 5 seconds
        setTimeout(() => {
            tooltip.style.opacity = '0';
            setTimeout(() => {
                tooltip.remove();
            }, 500);
        }, 5000);
    });
}

/**
 * Interactive Mars Map
 * 
 * This function initializes the interactive Mars map that allows users to explore
 * the Cydonia region with different data layers and points of interest.
 */
function initializeInteractiveMarsMap() {
    const mapSection = document.getElementById('interactive-mars-map');
    if (!mapSection) return;

    const marsMap = document.getElementById('mars-map');
    const locationInfo = document.getElementById('location-info');
    const zoomInBtn = document.getElementById('zoom-in');
    const zoomOutBtn = document.getElementById('zoom-out');
    const resetMapBtn = document.getElementById('reset-map');
    const layerElevation = document.getElementById('layer-elevation');
    const layerMinerals = document.getElementById('layer-minerals');
    const layerAnomalies = document.getElementById('layer-anomalies');

    // Map state
    let mapState = {
        zoom: 1,
        position: { x: 0, y: 0 },
        isDragging: false,
        startDragPosition: { x: 0, y: 0 },
        points: [
            { 
                id: 'face', 
                name: 'The Face on Mars', 
                x: 40, 
                y: 30, 
                type: 'major',
                description: 'The famous Face on Mars, first photographed by Viking 1 in 1976. This mesa in the Cydonia region appears to have facial features when viewed from above.'
            },
            { 
                id: 'pyramid', 
                name: 'D&M Pyramid', 
                x: 65, 
                y: 60, 
                type: 'major',
                description: 'A five-sided pyramidal structure located about 20km south of the Face. Named after its discoverers DiPietro and Molenaar.'
            },
            { 
                id: 'fort', 
                name: 'The Fort', 
                x: 25, 
                y: 55, 
                type: 'secondary',
                description: 'A rectangular formation with what appear to be right angles and straight edges, nicknamed "The Fort" due to its structural appearance.'
            },
            { 
                id: 'city', 
                name: 'The City Complex', 
                x: 50, 
                y: 70, 
                type: 'secondary',
                description: 'A collection of formations that appear to be arranged in a geometric pattern consistent with urban planning.'
            },
            { 
                id: 'viking1', 
                name: 'Viking 1 Image Location', 
                x: 35, 
                y: 20, 
                type: 'nasa',
                description: 'The location where NASA\'s Viking 1 orbiter captured the first images of the Face and other Cydonia formations in 1976.'
            }
        ]
    };

    // Initialize map
    initMap();

    // Add event listeners
    zoomInBtn.addEventListener('click', () => {
        if (mapState.zoom < 3) {
            mapState.zoom += 0.5;
            updateMap();
        }
    });

    zoomOutBtn.addEventListener('click', () => {
        if (mapState.zoom > 0.5) {
            mapState.zoom -= 0.5;
            updateMap();
        }
    });

    resetMapBtn.addEventListener('click', () => {
        mapState.zoom = 1;
        mapState.position = { x: 0, y: 0 };
        updateMap();
    });

    layerElevation.addEventListener('change', updateMap);
    layerMinerals.addEventListener('change', updateMap);
    layerAnomalies.addEventListener('change', updateMap);

    // Map dragging functionality
    marsMap.addEventListener('mousedown', startDrag);
    marsMap.addEventListener('mousemove', drag);
    marsMap.addEventListener('mouseup', endDrag);
    marsMap.addEventListener('mouseleave', endDrag);

    // Touch support for mobile
    marsMap.addEventListener('touchstart', (e) => {
        e.preventDefault();
        const touch = e.touches[0];
        startDrag({ clientX: touch.clientX, clientY: touch.clientY });
    });

    marsMap.addEventListener('touchmove', (e) => {
        e.preventDefault();
        const touch = e.touches[0];
        drag({ clientX: touch.clientX, clientY: touch.clientY });
    });

    marsMap.addEventListener('touchend', endDrag);

    // Keyboard navigation for accessibility
    marsMap.addEventListener('keydown', (e) => {
        switch(e.key) {
            case 'ArrowUp':
                mapState.position.y += 10;
                break;
            case 'ArrowDown':
                mapState.position.y -= 10;
                break;
            case 'ArrowLeft':
                mapState.position.x += 10;
                break;
            case 'ArrowRight':
                mapState.position.x -= 10;
                break;
            case '+':
                if (mapState.zoom < 3) mapState.zoom += 0.5;
                break;
            case '-':
                if (mapState.zoom > 0.5) mapState.zoom -= 0.5;
                break;
            case 'Home':
                mapState.zoom = 1;
                mapState.position = { x: 0, y: 0 };
                break;
            default:
                return;
        }
        e.preventDefault();
        updateMap();
    });

    // Initialize the map
    function initMap() {
        // Create points of interest
        updateMap();
    }

    // Update map based on current state
    function updateMap() {
        // Clear existing points
        while (marsMap.querySelector('.map-point')) {
            marsMap.removeChild(marsMap.querySelector('.map-point'));
        }

        // Apply layers
        marsMap.style.filter = '';
        let filters = [];

        if (layerElevation.checked) {
            filters.push('contrast(1.2) brightness(1.1)');
        }

        if (layerMinerals.checked) {
            filters.push('hue-rotate(30deg) saturate(1.5)');
        }

        if (filters.length > 0) {
            marsMap.style.filter = filters.join(' ');
        }

        // Apply zoom and position
        marsMap.style.backgroundSize = `${mapState.zoom * 100}%`;
        marsMap.style.backgroundPosition = `calc(50% + ${mapState.position.x}px) calc(50% + ${mapState.position.y}px)`;

        // Add points of interest if layer is enabled
        if (layerAnomalies.checked) {
            mapState.points.forEach(point => {
                const pointElement = document.createElement('div');
                pointElement.className = `map-point map-point-${point.type}`;
                pointElement.style.left = `calc(${point.x}% + ${mapState.position.x}px)`;
                pointElement.style.top = `calc(${point.y}% + ${mapState.position.y}px)`;
                pointElement.setAttribute('data-id', point.id);
                pointElement.setAttribute('tabindex', '0');
                pointElement.setAttribute('role', 'button');
                pointElement.setAttribute('aria-label', point.name);

                pointElement.addEventListener('click', () => showPointInfo(point));
                pointElement.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        showPointInfo(point);
                    }
                });

                marsMap.appendChild(pointElement);
            });
        }
    }

    // Show information about a point of interest
    function showPointInfo(point) {
        locationInfo.innerHTML = `
            <h4>${point.name}</h4>
            <p>${point.description}</p>
        `;

        // Highlight the selected point
        const points = marsMap.querySelectorAll('.map-point');
        points.forEach(p => p.classList.remove('active'));

        const selectedPoint = marsMap.querySelector(`.map-point[data-id="${point.id}"]`);
        if (selectedPoint) {
            selectedPoint.classList.add('active');
        }
    }

    // Map dragging functions
    function startDrag(e) {
        mapState.isDragging = true;
        mapState.startDragPosition = {
            x: e.clientX - mapState.position.x,
            y: e.clientY - mapState.position.y
        };
        marsMap.style.cursor = 'grabbing';
    }

    function drag(e) {
        if (!mapState.isDragging) return;

        mapState.position = {
            x: e.clientX - mapState.startDragPosition.x,
            y: e.clientY - mapState.startDragPosition.y
        };

        updateMap();
    }

    function endDrag() {
        mapState.isDragging = false;
        marsMap.style.cursor = 'grab';
    }

    // Add styles for map points
    const style = document.createElement('style');
    style.textContent = `
        #mars-map {
            cursor: grab;
            position: relative;
        }

        .map-point {
            position: absolute;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            transform: translate(-50%, -50%);
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        }

        .map-point-major {
            background-color: #e8491d;
        }

        .map-point-secondary {
            background-color: #8b4513;
        }

        .map-point-nasa {
            background-color: #3498db;
        }

        .map-point:hover, .map-point:focus, .map-point.active {
            transform: translate(-50%, -50%) scale(1.3);
            box-shadow: 0 0 15px rgba(255, 255, 255, 0.7);
            z-index: 10;
        }
    `;
    document.head.appendChild(style);
}

/**
 * Mars Live Data Section
 * 
 * This function initializes the Mars Live Data section that displays real-time
 * data from NASA's APIs, including latest photos from Mars rovers and weather data.
 */
function initializeMarsLiveData() {
    const marsDataSection = document.getElementById('mars-live-data');
    if (!marsDataSection) return;

    // NASA API key - using DEMO_KEY for development (limited to 30 requests per hour)
    const NASA_API_KEY = 'DEMO_KEY';

    // Add basic styles
    addBasicStyles();

    // Initialize tabs
    initializeTabs();

    // Initialize rover photos functionality
    initializeRoverPhotos();

    // Initialize Mars weather functionality
    initializeWeatherData();

    /**
     * Add basic styles for the Mars Live Data section
     */
    function addBasicStyles() {
        const style = document.createElement('style');
        style.textContent = `
            #mars-live-data {
                background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://mars.nasa.gov/system/resources/detail_files/25640_PIA24937-web.jpg');
                background-size: cover;
                background-position: center;
                color: #fff;
                padding: 60px 0;
            }
            .mars-data-container {
                background: rgba(30, 30, 30, 0.8);
                border-radius: 10px;
                padding: 20px;
                margin-top: 30px;
            }
            .mars-data-tabs {
                display: flex;
                border-bottom: 2px solid #8b4513;
                margin-bottom: 20px;
            }
            .tab-button {
                background: none;
                border: none;
                color: #ccc;
                padding: 10px 20px;
                font-size: 16px;
                cursor: pointer;
            }
            .tab-button.active {
                color: #e8491d;
                font-weight: bold;
            }
            .tab-content {
                display: none;
            }
            .tab-content.active {
                display: block;
            }
            .photo-card {
                background: rgba(40, 40, 40, 0.7);
                border-radius: 8px;
                margin-bottom: 20px;
                overflow: hidden;
            }
            .photo-card img {
                width: 100%;
                height: 200px;
                object-fit: cover;
            }
            .photo-info {
                padding: 10px;
            }
            .weather-card {
                background: rgba(40, 40, 40, 0.7);
                border-radius: 8px;
                margin-bottom: 20px;
                padding: 15px;
            }
            .loading-indicator, .error-message {
                text-align: center;
                padding: 20px;
            }
            #photos-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                gap: 20px;
            }
            .photo-modal {
                display: none;
                position: fixed;
                z-index: 1000;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.9);
            }
            .close-modal {
                position: absolute;
                top: 15px;
                right: 25px;
                color: white;
                font-size: 40px;
                cursor: pointer;
            }
            .modal-content {
                display: block;
                margin: 50px auto;
                max-width: 90%;
                max-height: 80vh;
            }
        `;
        document.head.appendChild(style);
    }

    /**
     * Initialize the tab interface
     */
    function initializeTabs() {
        const tabButtons = document.querySelectorAll('.mars-data-tabs .tab-button');
        const tabContents = document.querySelectorAll('.tab-content');

        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons and contents
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));

                // Add active class to clicked button and corresponding content
                button.classList.add('active');
                const tabId = button.getAttribute('data-tab');
                document.getElementById(tabId).classList.add('active');
            });
        });
    }

    /**
     * Initialize the Mars rover photos functionality
     */
    function initializeRoverPhotos() {
        const roverSelect = document.getElementById('rover-select');
        const loadButton = document.getElementById('load-photos');
        const photosGrid = document.getElementById('photos-grid');
        const loadingIndicator = document.getElementById('photo-loading');
        const errorMessage = document.getElementById('photo-error');
        const roverStatus = document.getElementById('rover-status');
        const photoModal = document.querySelector('.photo-modal');
        const modalImg = document.getElementById('modal-img');
        const modalCaption = document.getElementById('modal-caption');
        const closeModal = document.querySelector('.close-modal');

        // Hide loading indicator and error message initially
        if (loadingIndicator) loadingIndicator.style.display = 'none';
        if (errorMessage) errorMessage.style.display = 'none';
        if (photoModal) photoModal.style.display = 'none';

        // Add event listener to load button
        if (loadButton) {
            loadButton.addEventListener('click', () => {
                const selectedRover = roverSelect.value;
                fetchRoverPhotos(selectedRover);
            });
        }

        // Close modal when clicking the close button
        if (closeModal) {
            closeModal.addEventListener('click', () => {
                photoModal.style.display = 'none';
                document.body.style.overflow = 'auto'; // Re-enable scrolling
            });
        }

        // Close modal when clicking outside the image
        if (photoModal) {
            photoModal.addEventListener('click', (e) => {
                if (e.target === photoModal) {
                    photoModal.style.display = 'none';
                    document.body.style.overflow = 'auto'; // Re-enable scrolling
                }
            });
        }

        /**
         * Fetch the latest photos from the specified Mars rover
         */
        function fetchRoverPhotos(rover) {
            if (!photosGrid || !loadingIndicator || !errorMessage || !roverStatus) return;

            // Clear previous photos and show loading indicator
            photosGrid.innerHTML = '';
            loadingIndicator.style.display = 'block';
            errorMessage.style.display = 'none';
            roverStatus.innerHTML = `Loading data for the ${rover.charAt(0).toUpperCase() + rover.slice(1)} rover...`;

            // NASA Mars Rover Photos API endpoint
            const apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/latest_photos?api_key=${NASA_API_KEY}`;

            fetch(apiUrl)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    // Hide loading indicator
                    loadingIndicator.style.display = 'none';

                    // Check if there are photos
                    if (data.latest_photos && data.latest_photos.length > 0) {
                        const photos = data.latest_photos;

                        // Update rover status with information
                        const roverInfo = photos[0].rover;
                        roverStatus.innerHTML = `
                            <h3>${roverInfo.name} Rover</h3>
                            <p><strong>Status:</strong> ${roverInfo.status}</p>
                            <p><strong>Launch Date:</strong> ${roverInfo.launch_date}</p>
                            <p><strong>Landing Date:</strong> ${roverInfo.landing_date}</p>
                            <p><strong>Total Photos:</strong> ${roverInfo.total_photos}</p>
                        `;

                        // Display photos (limit to 12 for performance)
                        const photosToShow = photos.slice(0, 12);
                        photosToShow.forEach(photo => {
                            const photoCard = document.createElement('div');
                            photoCard.className = 'photo-card';

                            const img = document.createElement('img');
                            img.src = photo.img_src;
                            img.alt = `Mars photo taken by ${photo.rover.name}`;
                            img.loading = 'lazy'; // Lazy load images

                            const photoInfo = document.createElement('div');
                            photoInfo.className = 'photo-info';
                            photoInfo.innerHTML = `
                                <p>Date: ${photo.earth_date}</p>
                                <p>Camera: ${photo.camera.full_name}</p>
                            `;

                            photoCard.appendChild(img);
                            photoCard.appendChild(photoInfo);
                            photosGrid.appendChild(photoCard);

                            // Add click event to open modal
                            if (photoModal && modalImg && modalCaption) {
                                photoCard.addEventListener('click', () => {
                                    modalImg.src = photo.img_src;
                                    modalCaption.innerHTML = `
                                        <h3>Mars Photo</h3>
                                        <p>Taken by ${photo.rover.name}'s ${photo.camera.full_name} on ${photo.earth_date}</p>
                                        <p>Sol: ${photo.sol} (Martian day)</p>
                                    `;
                                    photoModal.style.display = 'block';
                                    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
                                });
                            }
                        });
                    } else {
                        // No photos found
                        errorMessage.textContent = 'No photos found for this rover.';
                        errorMessage.style.display = 'block';
                        roverStatus.innerHTML = `No recent photos available for the ${rover} rover.`;
                    }
                })
                .catch(error => {
                    console.error('Error fetching rover photos:', error);
                    loadingIndicator.style.display = 'none';
                    errorMessage.textContent = `Error loading Mars rover photos: ${error.message}`;
                    errorMessage.style.display = 'block';
                    roverStatus.innerHTML = `Error loading data for the ${rover} rover.`;
                });
        }
    }

    /**
     * Initialize the Mars weather data functionality
     */
    function initializeWeatherData() {
        const weatherGrid = document.getElementById('weather-grid');
        const loadingIndicator = document.getElementById('weather-loading');
        const errorMessage = document.getElementById('weather-error');

        if (!weatherGrid || !loadingIndicator || !errorMessage) return;

        // Hide error message initially
        errorMessage.style.display = 'none';

        // Fetch Mars weather data when the weather tab is clicked
        const weatherTab = document.querySelector('[data-tab="mars-weather"]');
        if (weatherTab) {
            weatherTab.addEventListener('click', () => {
                // Only fetch if we haven't already loaded the data
                if (weatherGrid.children.length === 0 && loadingIndicator.style.display !== 'block') {
                    fetchMarsWeather();
                }
            });
        }

        /**
         * Fetch the latest weather data from Mars
         */
        function fetchMarsWeather() {
            // Show loading indicator
            loadingIndicator.style.display = 'block';
            errorMessage.style.display = 'none';
            weatherGrid.innerHTML = '';

            // Since the InSight mission has ended, we'll use simulated data
            setTimeout(() => {
                loadingIndicator.style.display = 'none';

                // Display a note about using simulated data
                const noteDiv = document.createElement('div');
                noteDiv.className = 'weather-note';
                noteDiv.innerHTML = `
                    <p><i class="fas fa-info-circle"></i> The InSight mission has ended its operations. 
                    Displaying representative Mars weather data based on historical measurements.</p>
                `;
                weatherGrid.appendChild(noteDiv);

                // Display simulated data
                displaySimulatedWeatherData();
            }, 1000);
        }

        /**
         * Display simulated Mars weather data based on historical measurements
         */
        function displaySimulatedWeatherData() {
            // Create simulated data for 7 sols (Martian days)
            const currentDate = new Date();

            for (let i = 0; i < 7; i++) {
                const solDate = new Date(currentDate);
                solDate.setDate(solDate.getDate() - i);

                // Simulate sol number (just for display purposes)
                const sol = 3500 - i;

                // Simulate temperature data with realistic values for Mars
                const minTemp = -90 + Math.random() * 20; // Between -90°C and -70°C
                const maxTemp = -20 - Math.random() * 30; // Between -50°C and -20°C

                // Simulate pressure data (typical Mars values)
                const pressure = 700 + Math.random() * 100; // Between 700 and 800 Pa

                // Simulate wind data
                const windSpeed = 5 + Math.random() * 15; // Between 5 and 20 m/s
                const windDirection = Math.floor(Math.random() * 360); // 0-359 degrees

                // Create a weather card
                const card = document.createElement('div');
                card.className = 'weather-card';

                // Format date
                const dateStr = solDate.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                });

                // Create card content
                card.innerHTML = `
                    <h4>Sol ${sol} (Simulated)</h4>
                    <p>Date: ${dateStr}</p>
                    <div>
                        <p><strong>Temperature:</strong></p>
                        <p>High: ${maxTemp.toFixed(1)}°C</p>
                        <p>Low: ${minTemp.toFixed(1)}°C</p>
                    </div>
                    <div>
                        <p><strong>Pressure:</strong> ${pressure.toFixed(1)} Pa</p>
                    </div>
                    <div>
                        <p><strong>Wind:</strong></p>
                        <p>Direction: ${windDirection}°</p>
                        <p>Speed: ${windSpeed.toFixed(1)} m/s</p>
                    </div>
                `;

                weatherGrid.appendChild(card);
            }
        }
    }
}

/**
 * Initialize the Mars Sounds section with Web Audio API
 */
function initializeMarsSounds() {
    // Check if the Mars sounds section exists
    const marsSoundsSection = document.getElementById('mars-sounds');
    if (!marsSoundsSection) return;

    // Audio players initialization
    const audioPlayers = document.querySelectorAll('.audio-player');

    audioPlayers.forEach(player => {
        const audio = player.querySelector('audio');
        const playButton = player.querySelector('.play-button');
        const progressBar = player.querySelector('.progress-bar');
        const progressContainer = player.querySelector('.progress-container');
        const timeDisplay = player.querySelector('.time-display');
        const volumeButton = player.querySelector('.volume-button');
        const volumeSlider = player.querySelector('.volume-slider');

        if (!audio || !playButton || !progressBar || !progressContainer || !timeDisplay) return;

        // Play/Pause functionality
        playButton.addEventListener('click', () => {
            if (audio.paused) {
                // Pause all other audio elements first
                document.querySelectorAll('audio').forEach(a => {
                    if (a !== audio && !a.paused) {
                        a.pause();
                        const otherButton = a.parentElement.querySelector('.play-button i');
                        if (otherButton) otherButton.className = 'fas fa-play';
                    }
                });

                audio.play().catch(error => {
                    console.error('Error playing audio:', error);
                });
                playButton.querySelector('i').className = 'fas fa-pause';
            } else {
                audio.pause();
                playButton.querySelector('i').className = 'fas fa-play';
            }
        });

        // Update progress bar as audio plays
        audio.addEventListener('timeupdate', () => {
            const progress = (audio.currentTime / audio.duration) * 100;
            progressBar.style.width = `${progress}%`;

            // Update time display
            const minutes = Math.floor(audio.currentTime / 60);
            const seconds = Math.floor(audio.currentTime % 60);
            timeDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        });

        // Allow seeking by clicking on progress bar
        progressContainer.addEventListener('click', (e) => {
            const rect = progressContainer.getBoundingClientRect();
            const pos = (e.clientX - rect.left) / rect.width;
            audio.currentTime = pos * audio.duration;
        });

        // Volume control
        if (volumeButton && volumeSlider) {
            volumeButton.addEventListener('click', () => {
                if (audio.volume > 0) {
                    audio.volume = 0;
                    volumeButton.querySelector('i').className = 'fas fa-volume-mute';
                    volumeSlider.value = 0;
                } else {
                    audio.volume = volumeSlider.value;
                    updateVolumeIcon(audio.volume);
                }
            });

            volumeSlider.addEventListener('input', () => {
                audio.volume = volumeSlider.value;
                updateVolumeIcon(audio.volume);
            });

            function updateVolumeIcon(volume) {
                const icon = volumeButton.querySelector('i');
                if (volume === 0) {
                    icon.className = 'fas fa-volume-mute';
                } else if (volume < 0.5) {
                    icon.className = 'fas fa-volume-down';
                } else {
                    icon.className = 'fas fa-volume-up';
                }
            }
        }

        // Reset when audio ends
        audio.addEventListener('ended', () => {
            progressBar.style.width = '0%';
            playButton.querySelector('i').className = 'fas fa-play';
            timeDisplay.textContent = '0:00';
        });
    });

    // Interactive Mars Soundscape with Web Audio API
    const startSoundscapeBtn = document.getElementById('start-soundscape');
    const soundscapeVisual = document.getElementById('soundscape-visual');
    const windIntensitySlider = document.getElementById('wind-intensity');
    const roverSoundsSlider = document.getElementById('rover-sounds');
    const dustStormSlider = document.getElementById('dust-storm');

    if (!startSoundscapeBtn || !soundscapeVisual || !windIntensitySlider || !roverSoundsSlider || !dustStormSlider) return;

    let audioContext;
    let analyser;
    let windOscillator;
    let roverOscillator;
    let dustStormNoise;
    let visualizationActive = false;
    let animationFrame;

    startSoundscapeBtn.addEventListener('click', () => {
        if (!visualizationActive) {
            initAudioContext();
            startVisualization();
            startSoundscapeBtn.textContent = 'Stop Experience';
            visualizationActive = true;
        } else {
            stopVisualization();
            startSoundscapeBtn.textContent = 'Start Experience';
            visualizationActive = false;
        }
    });

    function initAudioContext() {
        // Create audio context if it doesn't exist
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
            analyser = audioContext.createAnalyser();
            analyser.fftSize = 256;
            analyser.connect(audioContext.destination);

            // Create wind sound (filtered noise)
            createWindSound();

            // Create rover sound (oscillator with modulation)
            createRoverSound();

            // Create dust storm sound (heavy noise with filter sweep)
            createDustStormSound();
        }

        // Resume audio context if it was suspended
        if (audioContext.state === 'suspended') {
            audioContext.resume();
        }
    }

    function createWindSound() {
        // Create noise source for wind
        const bufferSize = 2 * audioContext.sampleRate;
        const noiseBuffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
        const output = noiseBuffer.getChannelData(0);

        for (let i = 0; i < bufferSize; i++) {
            output[i] = Math.random() * 2 - 1;
        }

        const whiteNoise = audioContext.createBufferSource();
        whiteNoise.buffer = noiseBuffer;
        whiteNoise.loop = true;

        // Create filter for wind sound
        const windFilter = audioContext.createBiquadFilter();
        windFilter.type = 'lowpass';
        windFilter.frequency.value = 500;
        windFilter.Q.value = 1;

        // Create gain node for wind volume
        const windGain = audioContext.createGain();
        windGain.gain.value = parseFloat(windIntensitySlider.value) * 0.3;

        // Connect nodes
        whiteNoise.connect(windFilter);
        windFilter.connect(windGain);
        windGain.connect(analyser);

        // Start the noise
        whiteNoise.start();

        // Store references
        windOscillator = {
            source: whiteNoise,
            filter: windFilter,
            gain: windGain
        };

        // Update wind sound when slider changes
        windIntensitySlider.addEventListener('input', () => {
            windGain.gain.value = parseFloat(windIntensitySlider.value) * 0.3;
        });
    }

    function createRoverSound() {
        // Create oscillator for rover sounds
        const oscillator = audioContext.createOscillator();
        oscillator.type = 'sawtooth';
        oscillator.frequency.value = 100;

        // Create filter for rover sound
        const roverFilter = audioContext.createBiquadFilter();
        roverFilter.type = 'bandpass';
        roverFilter.frequency.value = 800;
        roverFilter.Q.value = 2;

        // Create LFO for filter modulation
        const lfo = audioContext.createOscillator();
        lfo.type = 'sine';
        lfo.frequency.value = 0.2;

        const lfoGain = audioContext.createGain();
        lfoGain.gain.value = 200;

        // Create gain node for rover volume
        const roverGain = audioContext.createGain();
        roverGain.gain.value = parseFloat(roverSoundsSlider.value) * 0.2;

        // Connect nodes
        oscillator.connect(roverFilter);
        roverFilter.connect(roverGain);
        roverGain.connect(analyser);

        lfo.connect(lfoGain);
        lfoGain.connect(roverFilter.frequency);

        // Start oscillators
        oscillator.start();
        lfo.start();

        // Store references
        roverOscillator = {
            source: oscillator,
            filter: roverFilter,
            gain: roverGain,
            lfo: lfo
        };

        // Update rover sound when slider changes
        roverSoundsSlider.addEventListener('input', () => {
            roverGain.gain.value = parseFloat(roverSoundsSlider.value) * 0.2;
        });
    }

    function createDustStormSound() {
        // Create noise source for dust storm
        const bufferSize = 2 * audioContext.sampleRate;
        const noiseBuffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
        const output = noiseBuffer.getChannelData(0);

        for (let i = 0; i < bufferSize; i++) {
            output[i] = Math.random() * 2 - 1;
        }

        const stormNoise = audioContext.createBufferSource();
        stormNoise.buffer = noiseBuffer;
        stormNoise.loop = true;

        // Create filter for dust storm sound
        const stormFilter = audioContext.createBiquadFilter();
        stormFilter.type = 'highpass';
        stormFilter.frequency.value = 2000;
        stormFilter.Q.value = 5;

        // Create LFO for filter sweep
        const stormLfo = audioContext.createOscillator();
        stormLfo.type = 'sine';
        stormLfo.frequency.value = 0.1;

        const stormLfoGain = audioContext.createGain();
        stormLfoGain.gain.value = 1000;

        // Create gain node for dust storm volume
        const stormGain = audioContext.createGain();
        stormGain.gain.value = parseFloat(dustStormSlider.value) * 0.4;

        // Connect nodes
        stormNoise.connect(stormFilter);
        stormFilter.connect(stormGain);
        stormGain.connect(analyser);

        stormLfo.connect(stormLfoGain);
        stormLfoGain.connect(stormFilter.frequency);

        // Start the noise and LFO
        stormNoise.start();
        stormLfo.start();

        // Store references
        dustStormNoise = {
            source: stormNoise,
            filter: stormFilter,
            gain: stormGain,
            lfo: stormLfo
        };

        // Update dust storm sound when slider changes
        dustStormSlider.addEventListener('input', () => {
            stormGain.gain.value = parseFloat(dustStormSlider.value) * 0.4;
        });
    }

    function startVisualization() {
        // Create visualization
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        function draw() {
            animationFrame = requestAnimationFrame(draw);

            // Get frequency data
            analyser.getByteFrequencyData(dataArray);

            // Clear canvas
            const canvas = soundscapeVisual.querySelector('canvas');
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw visualization
            const barWidth = (canvas.width / bufferLength) * 2.5;
            let x = 0;

            for (let i = 0; i < bufferLength; i++) {
                const barHeight = dataArray[i] / 2;

                // Use colors based on the Mars theme
                const r = 232 + (dataArray[i] / 255) * 23;
                const g = 73 + (dataArray[i] / 255) * 20;
                const b = 29 + (dataArray[i] / 255) * 10;

                ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
                ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);

                x += barWidth + 1;
            }
        }

        // Create canvas if it doesn't exist
        if (!soundscapeVisual.querySelector('canvas')) {
            const canvas = document.createElement('canvas');
            canvas.width = soundscapeVisual.clientWidth;
            canvas.height = soundscapeVisual.clientHeight;
            soundscapeVisual.appendChild(canvas);
        }

        // Start animation
        draw();
    }

    function stopVisualization() {
        // Stop animation
        if (animationFrame) {
            cancelAnimationFrame(animationFrame);
            animationFrame = null;
        }

        // Stop audio
        if (audioContext) {
            if (windOscillator && windOscillator.source) {
                windOscillator.source.stop();
                windOscillator = null;
            }

            if (roverOscillator && roverOscillator.source) {
                roverOscillator.source.stop();
                roverOscillator.lfo.stop();
                roverOscillator = null;
            }

            if (dustStormNoise && dustStormNoise.source) {
                dustStormNoise.source.stop();
                dustStormNoise.lfo.stop();
                dustStormNoise = null;
            }

            audioContext.close();
            audioContext = null;
        }

        // Clear visualization
        const canvas = soundscapeVisual.querySelector('canvas');
        if (canvas) {
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }

    // Clean up when leaving the page
    window.addEventListener('beforeunload', () => {
        if (visualizationActive) {
            stopVisualization();
        }
    });
}

/**
 * Initialize accessibility controls for high contrast mode and text size
 */
function initializeAccessibilityControls() {
    // Get control elements
    const highContrastToggle = document.getElementById('high-contrast-toggle');
    const textDecreaseBtn = document.getElementById('text-decrease');
    const textResetBtn = document.getElementById('text-reset');
    const textIncreaseBtn = document.getElementById('text-increase');

    if (!highContrastToggle || !textDecreaseBtn || !textResetBtn || !textIncreaseBtn) return;

    // High Contrast Mode
    // Check if high contrast mode was previously enabled
    const highContrastEnabled = localStorage.getItem('highContrastMode') === 'enabled';

    // Apply high contrast mode if it was enabled
    if (highContrastEnabled) {
        document.body.classList.add('high-contrast');
        highContrastToggle.classList.add('active');
    }

    // Toggle high contrast mode
    highContrastToggle.addEventListener('click', () => {
        document.body.classList.toggle('high-contrast');
        highContrastToggle.classList.toggle('active');

        // Save preference to localStorage
        if (document.body.classList.contains('high-contrast')) {
            localStorage.setItem('highContrastMode', 'enabled');
            // Announce to screen readers
            announceToScreenReader('High contrast mode enabled');
        } else {
            localStorage.setItem('highContrastMode', 'disabled');
            // Announce to screen readers
            announceToScreenReader('High contrast mode disabled');
        }
    });

    // Text Size Controls
    // Check if text size was previously adjusted
    const savedTextSize = localStorage.getItem('textSizeAdjustment');
    if (savedTextSize) {
        document.documentElement.style.fontSize = savedTextSize;
    }

    // Get the base font size (default is 16px in most browsers)
    const getBaseFontSize = () => {
        const baseFontSize = window.getComputedStyle(document.documentElement).fontSize;
        return parseFloat(baseFontSize);
    };

    // Get current font size
    const getCurrentFontSize = () => {
        const currentSize = window.getComputedStyle(document.documentElement).fontSize;
        return parseFloat(currentSize);
    };

    // Decrease text size
    textDecreaseBtn.addEventListener('click', () => {
        const currentSize = getCurrentFontSize();
        const baseSize = getBaseFontSize();

        // Don't allow smaller than 80% of base size
        if (currentSize > baseSize * 0.8) {
            const newSize = Math.max(currentSize - 1, baseSize * 0.8);
            document.documentElement.style.fontSize = `${newSize}px`;
            localStorage.setItem('textSizeAdjustment', `${newSize}px`);
            announceToScreenReader('Text size decreased');
        } else {
            announceToScreenReader('Minimum text size reached');
        }
    });

    // Reset text size
    textResetBtn.addEventListener('click', () => {
        document.documentElement.style.fontSize = '';
        localStorage.removeItem('textSizeAdjustment');
        announceToScreenReader('Text size reset to default');
    });

    // Increase text size
    textIncreaseBtn.addEventListener('click', () => {
        const currentSize = getCurrentFontSize();
        const baseSize = getBaseFontSize();

        // Don't allow larger than 200% of base size
        if (currentSize < baseSize * 2) {
            const newSize = Math.min(currentSize + 1, baseSize * 2);
            document.documentElement.style.fontSize = `${newSize}px`;
            localStorage.setItem('textSizeAdjustment', `${newSize}px`);
            announceToScreenReader('Text size increased');
        } else {
            announceToScreenReader('Maximum text size reached');
        }
    });

    // Helper function to announce changes to screen readers
    function announceToScreenReader(message) {
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.classList.add('sr-only'); // Screen reader only
        announcement.textContent = message;

        document.body.appendChild(announcement);

        // Remove after announcement is read
        setTimeout(() => {
            document.body.removeChild(announcement);
        }, 3000);
    }

    // Add screen reader only style if it doesn't exist
    if (!document.querySelector('style#sr-styles')) {
        const style = document.createElement('style');
        style.id = 'sr-styles';
        style.textContent = `
            .sr-only {
                position: absolute;
                width: 1px;
                height: 1px;
                padding: 0;
                margin: -1px;
                overflow: hidden;
                clip: rect(0, 0, 0, 0);
                white-space: nowrap;
                border: 0;
            }
        `;
        document.head.appendChild(style);
    }
}
