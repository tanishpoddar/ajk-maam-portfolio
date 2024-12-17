// cursor.js
document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor');
    let mouseX = 0;
    let mouseY = 0;

    // Update cursor position
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Update cursor position immediately
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    });

    // Add hover effect for all links and interactive elements
    const links = document.querySelectorAll('a, button, .interactive');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.classList.add('link-hover');
        });
        
        link.addEventListener('mouseleave', () => {
            cursor.classList.remove('link-hover');
        });
    });

    // Hide cursor when leaving window
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
    });

    // Show cursor when entering window
    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
    });
});