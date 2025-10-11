// Load wedding data
let weddingData = null;

// Load data on page load
fetch('wedding-data.json')
    .then(response => response.json())
    .then(data => {
        weddingData = data;
        console.log('Wedding data loaded successfully');
    })
    .catch(error => {
        console.error('Error loading wedding data:', error);
    });

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (targetId === '#home') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// WhatsApp button handler
const whatsappBtn = document.getElementById('whatsappBtn');
if (whatsappBtn) {
    whatsappBtn.addEventListener('click', function() {
        // For now, show an alert. Update with actual WhatsApp link later
        alert('WhatsApp group link will be shared soon! Please check back later or contact the couple directly.');
        
        // When you have the link, replace the alert with:
        // window.open('YOUR_WHATSAPP_GROUP_LINK', '_blank');
    });
}

// Scroll reveal animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animation setup and tab functionality
document.addEventListener('DOMContentLoaded', function() {
    // Tab switching functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetDay = this.getAttribute('data-day');
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            document.getElementById(targetDay).classList.add('active');
        });
    });
    
    // Fade-in animation for sections
    const sections = document.querySelectorAll('.welcome-section, .schedule-section, .venue-section, .travel-section, .trip-section, .faq-section, .contact-section');
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });
    
    // Add animation to cards
    const cards = document.querySelectorAll('.info-card, .travel-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
});

// Navbar background on scroll
let lastScroll = 0;
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
    
    lastScroll = currentScroll;
});

// Hero image fade effect on scroll
window.addEventListener('scroll', function() {
    const heroSection = document.querySelector('.hero-image-section');
    const heroImage = document.querySelector('.hero-full-image');
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (heroSection && heroImage) {
        const scrollPosition = window.pageYOffset;
        const heroHeight = heroSection.offsetHeight;
        
        // Calculate opacity (fade from 1 to 0.2 as user scrolls)
        // Opacity goes from 1 to 0.2 as scroll goes from 0 to heroHeight
        const minOpacity = 0.2;
        const maxOpacity = 1;
        const opacityRange = maxOpacity - minOpacity;
        const opacity = Math.max(minOpacity, maxOpacity - (scrollPosition / heroHeight) * opacityRange);
        
        // Apply opacity
        heroImage.style.opacity = opacity;
        
        // Hide scroll indicator when user starts scrolling
        if (scrollIndicator) {
            if (scrollPosition > 50) {
                scrollIndicator.style.opacity = '0';
                scrollIndicator.style.pointerEvents = 'none';
            } else {
                scrollIndicator.style.opacity = '1';
                scrollIndicator.style.pointerEvents = 'auto';
            }
        }
    }
});

// Add countdown timer functionality (optional - can be enabled later)
function updateCountdown() {
    const weddingDate = new Date('2026-02-21T18:00:00').getTime();
    const now = new Date().getTime();
    const distance = weddingDate - now;
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    return {
        days,
        hours,
        minutes,
        seconds,
        distance
    };
}

// Log countdown on console (can be displayed on page if needed)
setInterval(() => {
    const countdown = updateCountdown();
    if (countdown.distance > 0) {
        console.log(`Days until wedding: ${countdown.days}`);
    }
}, 60000); // Update every minute

// Helper function to format date
function formatDate(dateString) {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Function to dynamically update WhatsApp link when available
function updateWhatsAppLink(link) {
    const whatsappBtn = document.getElementById('whatsappBtn');
    if (whatsappBtn && link && link !== 'TO_BE_ADDED') {
        whatsappBtn.onclick = function() {
            window.open(link, '_blank');
        };
        document.querySelector('.note').textContent = 'Click to join now!';
    }
}

// Check if WhatsApp link is available in data
if (weddingData && weddingData.contact.whatsappGroup.link !== 'TO_BE_ADDED') {
    updateWhatsAppLink(weddingData.contact.whatsappGroup.link);
}

