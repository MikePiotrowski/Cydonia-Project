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
    let scene, camera, renderer, controls, terrain;
    let light, ambientLight, directionalLight;

    // Current view mode
    let currentMode = 'viking';

    // Setup the scene
    function initScene() {
        // Create scene
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0x000000);

        // Create camera
        camera = new THREE.PerspectiveCamera(60, modelContainer.clientWidth / modelContainer.clientHeight, 0.1, 1000);
        camera.position.set(0, 5, 10);

        // Create renderer
        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(modelContainer.clientWidth, modelContainer.clientHeight);
        renderer.shadowMap.enabled = true;
        modelContainer.appendChild(renderer.domElement);

        // Add orbit controls
        controls = new THREE.OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.screenSpacePanning = false;
        controls.minDistance = 5;
        controls.maxDistance = 20;
        controls.maxPolarAngle = Math.PI / 2;

        // Add lights
        ambientLight = new THREE.AmbientLight(0x404040, 1);
        scene.add(ambientLight);

        directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 10, 7.5);
        directionalLight.castShadow = true;
        scene.add(directionalLight);

        // Add a subtle red point light to simulate Mars lighting
        const pointLight = new THREE.PointLight(0xff4500, 0.5);
        pointLight.position.set(-10, 5, 0);
        scene.add(pointLight);

        // Add stars background
        addStarsBackground();

        // Handle window resize
        window.addEventListener('resize', onWindowResize);
    }

    // Create a procedural terrain for the Face on Mars
    function createTerrain() {
        // Create a plane geometry for the terrain
        const geometry = new THREE.PlaneGeometry(10, 10, 128, 128);

        // Apply height displacement to create the face-like terrain
        const vertices = geometry.attributes.position.array;
        for (let i = 0; i < vertices.length; i += 3) {
            const x = vertices[i];
            const z = vertices[i + 2];

            // Create the basic terrain with some randomness
            let height = Math.sin(x) * Math.cos(z) * 0.5;

            // Add face-like features
            // Eyes
            const leftEye = Math.exp(-Math.pow(x + 2, 2) - Math.pow(z + 1, 2));
            const rightEye = Math.exp(-Math.pow(x - 2, 2) - Math.pow(z + 1, 2));

            // Nose
            const nose = 0.5 * Math.exp(-Math.pow(x, 2) / 0.5 - Math.pow(z - 1, 2) / 0.5);

            // Mouth
            const mouth = -0.5 * Math.exp(-Math.pow(x, 2) / 2 - Math.pow(z - 3, 2) / 0.5);

            // Combine features
            height += leftEye + rightEye + nose + mouth;

            // Add some noise for realism
            height += (Math.random() - 0.5) * 0.1;

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

        // Create the terrain mesh with the Viking material as default
        terrain = new THREE.Mesh(geometry, vikingMaterial);
        terrain.rotation.x = -Math.PI / 2; // Rotate to horizontal
        terrain.receiveShadow = true;
        terrain.castShadow = true;

        // Store all materials for switching
        terrain.userData = {
            materials: {
                viking: vikingMaterial,
                enhanced: enhancedMaterial,
                wireframe: wireframeMaterial
            }
        };

        scene.add(terrain);
    }

    // Add a starry background
    function addStarsBackground() {
        const starsGeometry = new THREE.BufferGeometry();
        const starsMaterial = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 0.1
        });

        const starsVertices = [];
        for (let i = 0; i < 1000; i++) {
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
    createTerrain();
    animate();

    // Add event listeners for control buttons
    const resetViewBtn = document.getElementById('reset-view');
    if (resetViewBtn) {
        resetViewBtn.addEventListener('click', function() {
            // Reset camera position
            camera.position.set(0, 5, 10);
            camera.lookAt(0, 0, 0);
            controls.reset();
        });
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

            // Switch material based on mode
            if (terrain && terrain.userData.materials[mode]) {
                terrain.material = terrain.userData.materials[mode];
                currentMode = mode;

                // Adjust lighting for different modes
                if (mode === 'viking') {
                    directionalLight.position.set(5, 10, 7.5);
                    directionalLight.intensity = 1;
                } else if (mode === 'enhanced') {
                    directionalLight.position.set(-5, 8, 5);
                    directionalLight.intensity = 1.5;
                } else if (mode === 'wireframe') {
                    directionalLight.intensity = 0.5;
                }
            }
        });
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
