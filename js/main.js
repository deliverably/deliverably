// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navContent = document.querySelector('.nav-content');
    const body = document.body;

    menuBtn.addEventListener('click', function() {
        navContent.classList.toggle('show');
        body.classList.toggle('menu-open');
        // Toggle menu icon
        const menuIcon = menuBtn.querySelector('i');
        menuIcon.classList.toggle('fa-bars');
        menuIcon.classList.toggle('fa-times');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!navContent.contains(event.target) && !menuBtn.contains(event.target) && navContent.classList.contains('show')) {
            navContent.classList.remove('show');
            body.classList.remove('menu-open');
            const menuIcon = menuBtn.querySelector('i');
            menuIcon.classList.add('fa-bars');
            menuIcon.classList.remove('fa-times');
        }
    });
});
