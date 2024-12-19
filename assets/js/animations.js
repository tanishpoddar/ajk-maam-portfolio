document.addEventListener('DOMContentLoaded', () => {
    if (typeof gsap !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        const academicCards = document.querySelectorAll('.academic-card');
        academicCards.forEach((card, index) => {
            gsap.from(card, {
                opacity: 0,
                y: 50,
                duration: 0.8,
                delay: index * 0.2,
                scrollTrigger: {
                    trigger: card,
                    start: 'top bottom-=100',
                    toggleActions: 'play none none reverse'
                }
            });
        });

        const expertiseItems = document.querySelectorAll('.expertise-item');
        expertiseItems.forEach((item, index) => {
            gsap.from(item, {
                opacity: 0,
                x: -30,
                duration: 0.6,
                delay: index * 0.1,
                scrollTrigger: {
                    trigger: item,
                    start: 'top bottom-=100',
                    toggleActions: 'play none none reverse'
                }
            });
        });

        const languageCards = document.querySelectorAll('.language-card');
        languageCards.forEach((card, index) => {
            gsap.from(card, {
                opacity: 0,
                y: 30,
                duration: 0.6,
                delay: index * 0.2,
                scrollTrigger: {
                    trigger: card,
                    start: 'top bottom-=100',
                    toggleActions: 'play none none reverse'
                }
            });
        });
    }

    const animateOnScroll = () => {
        const elements = document.querySelectorAll('[data-aos]');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if(elementPosition < screenPosition) {
                element.classList.add('aos-animate');
                if (element.dataset.aosDelay) {
                    setTimeout(() => {
                        element.style.opacity = '1';
                        element.style.transform = 'translateY(0)';
                    }, parseInt(element.dataset.aosDelay));
                } else {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    // Initial animation check
    setTimeout(animateOnScroll, 100);
});