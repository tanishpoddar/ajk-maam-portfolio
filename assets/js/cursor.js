document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.createElement('div');
    cursor.classList.add('cursor-ring');
    document.body.appendChild(cursor);
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
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

    document.addEventListener('mouseleave', () => {
        cursor.classList.add('cursor-hidden');
    });

    document.addEventListener('mouseenter', () => {
        cursor.classList.remove('cursor-hidden');
    });
});