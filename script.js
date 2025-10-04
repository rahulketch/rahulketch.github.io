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

// Add fade-in animation to sections
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.welcome-section, .schedule-section, .venue-section, .travel-section, .outfits-section, .trip-section, .faq-section, .contact-section');
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });
    
    // Add animation to cards
    const cards = document.querySelectorAll('.info-card, .timeline-item, .travel-card');
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

