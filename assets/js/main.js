document.addEventListener('DOMContentLoaded', () => {
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('[data-aos]');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if(elementPosition < screenPosition) {
                element.classList.add('aos-animate');
                setTimeout(() => {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0) translateX(0)';
                }, element.dataset.aosDelay || 0);
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    setTimeout(animateOnScroll, 100);
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80, 
                    behavior: 'smooth'
                });
            }
        });
    });

    const navbar = document.querySelector('nav');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            navbar.classList.add('bg-white/95', 'shadow-md');
            navbar.classList.remove('bg-white/80');
        } else {
            navbar.classList.remove('bg-white/95', 'shadow-md');
            navbar.classList.add('bg-white/80');
        }

        if (currentScroll > lastScroll && currentScroll > 500) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    });

    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('text-blue-500');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('text-blue-500');
            }
        });
    });

    const mobileMenuBtn = document.querySelector('#mobileMenuBtn');
    const mobileMenu = document.querySelector('#mobileMenu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
});

document.querySelectorAll('a[href="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});