// Add this to your main.js or create a new navigation.js file
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuIcon = document.getElementById('mobile-menu-icon');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    let isMenuOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        
        // Toggle menu visibility
        if (isMenuOpen) {
            mobileMenu.classList.remove('hidden');
            mobileMenu.classList.add('animate-fade-in');
            // Change hamburger to X
            mobileMenuIcon.setAttribute('d', 'M6 18L18 6M6 6l12 12');
        } else {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('animate-fade-in');
            // Change X back to hamburger
            mobileMenuIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
        }
    }

    // Toggle menu on button click
    mobileMenuButton.addEventListener('click', toggleMenu);

    // Close menu when clicking a link
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (isMenuOpen) {
                toggleMenu();
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        const isClickInsideMenu = mobileMenu.contains(e.target);
        const isClickOnButton = mobileMenuButton.contains(e.target);
        
        if (isMenuOpen && !isClickInsideMenu && !isClickOnButton) {
            toggleMenu();
        }
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768 && isMenuOpen) { // 768px is the md breakpoint
            toggleMenu();
        }
    });

    // Add scroll event for navbar background
    const navbar = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            navbar.classList.remove('bg-white/80');
            navbar.classList.add('bg-white/95', 'shadow-md');
        } else {
            navbar.classList.add('bg-white/80');
            navbar.classList.remove('bg-white/95', 'shadow-md');
        }
    });
});