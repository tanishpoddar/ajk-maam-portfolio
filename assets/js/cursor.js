// cursor.js
document.addEventListener('DOMContentLoaded', () => {
    // Create cursor element
    const cursor = document.createElement('div');
    cursor.classList.add('cursor-ring');
    document.body.appendChild(cursor);

    // Update cursor position instantly
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Ctrl key handling
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Control') {
            document.body.classList.add('ctrl-pressed');
        }
    });

    document.addEventListener('keyup', (e) => {
        if (e.key === 'Control') {
            document.body.classList.remove('ctrl-pressed');
        }
    });

    // Add hover effect for interactive elements
    const interactiveElements = document.querySelectorAll(`
        a, button, .interactive, input, select, textarea,
        [role="button"], [type="button"], [type="submit"],
        [type="reset"], [contenteditable="true"]
    `);

    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            document.body.classList.add('link-hover');
        });
        
        element.addEventListener('mouseleave', () => {
            document.body.classList.remove('link-hover');
        });
    });

    // Handle cursor visibility
    document.addEventListener('mouseleave', () => {
        cursor.classList.add('cursor-hidden');
    });

    document.addEventListener('mouseenter', () => {
        cursor.classList.remove('cursor-hidden');
    });
});