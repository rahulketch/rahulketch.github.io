// Common elements for all pages

// Insert navigation
function insertNavbar(activePage) {
    const navHTML = `
    <nav class="navbar">
        <ul>
            <li><a href="index.html" ${activePage === 'home' ? 'class="active"' : ''}>Home</a></li>
            <li><a href="schedule.html" ${activePage === 'schedule' ? 'class="active"' : ''}>Schedule</a></li>
            <li><a href="details.html" ${activePage === 'details' ? 'class="active"' : ''}>Venue Details</a></li>
            <li><a href="faq.html" ${activePage === 'faq' ? 'class="active"' : ''}>FAQ</a></li>
            <li><a href="hyderabad.html" ${activePage === 'hyderabad' ? 'class="active"' : ''}>Hyderabad</a></li>
        </ul>
    </nav>`;
    
    const navPlaceholder = document.getElementById('navbar-placeholder');
    if (navPlaceholder) {
        navPlaceholder.innerHTML = navHTML;
    }
}

// Insert common head elements
function insertCommonHead() {
    const headHTML = `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">`;
    
    document.head.insertAdjacentHTML('afterbegin', headHTML);
}

// Insert footer
function insertFooter() {
    const footerHTML = `
    <footer>
        <p>&copy; 2026 Mahathi & Rahul Wedding</p>
    </footer>`;
    
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
    }
}

// Call on page load
document.addEventListener('DOMContentLoaded', function() {
    // The page should set window.currentPage before loading this script
    const activePage = window.currentPage || 'home';
    insertNavbar(activePage);
    insertFooter();
});

