// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Optional: Add active class to navigation based on scroll position
window.addEventListener('scroll', () => {
    // This can be expanded for section tracking if needed
});

// Project card click handler (ready for future expansion)
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function() {
        // Can add modal or navigation here later
        console.log('Project clicked');
    });
});
