document.addEventListener('DOMContentLoaded', () => {
    // Scroll Progress
    window.addEventListener('scroll', () => {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        document.querySelector('.scroll-progress').style.width = scrolled + '%';
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements
    document.querySelectorAll('.section-title, .card, .project-card, .skill-category').forEach(el => {
        observer.observe(el);
    });

    // Smooth scrolling
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

    // Header background on scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(10, 10, 15, 0.95)';
        } else {
            header.style.background = 'rgba(10, 10, 15, 0.8)';
        }
    });

    // Add stagger animation to cards
    setTimeout(() => {
        document.querySelectorAll('.card, .project-card').forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
        });
    }, 100);

    // Parallax effect for floating shapes
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const shapes = document.querySelectorAll('.shape');
        shapes.forEach((shape, index) => {
            const speed = 0.5 + (index * 0.1);
            shape.style.transform += ` translateY(${scrolled * speed}px)`;
        });
    });
}); 