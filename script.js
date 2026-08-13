// Initialize Lenis Smooth Scrolling
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Page Transition Logic
function initPageTransitions() {
    const transitionEl = document.querySelector('.page-transition');
    
    // Animate out the transition screen on page load
    if (transitionEl) {
        gsap.to(transitionEl, {
            y: '-100%',
            duration: 1,
            ease: "power4.inOut",
            onComplete: () => {
                initPageAnimations(); // Start animations only after transition clears
            }
        });
    } else {
        initPageAnimations();
    }

    // Intercept clicks on internal links for exit transition
    const links = document.querySelectorAll('a.page-link');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            if(link.classList.contains('active')) return;
            const target = link.href;
            if(target && target.indexOf('#') === -1) {
                e.preventDefault();
                if(transitionEl) {
                    gsap.fromTo(transitionEl, 
                        { y: '100%' },
                        { 
                            y: '0%', 
                            duration: 0.8, 
                            ease: "power4.inOut",
                            onComplete: () => {
                                window.location.href = target;
                            }
                        }
                    );
                } else {
                    window.location.href = target;
                }
            }
        });
    });
}

// Custom Cursor Logic
function initCursor() {
    const cursor = document.querySelector('.custom-cursor');
    if(cursor) {
        document.addEventListener('mousemove', (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.15,
                ease: "power2.out"
            });
        });

        // Magnetic effect for links and buttons using event delegation
        // This ensures dynamically added elements (like components.js) still get the effect
        document.addEventListener('mouseover', (e) => {
            const target = e.target.closest('a, button, .timeline-item img, .btn-contact, .portfolio-img-wrapper img, .about-image-wrapper img, .hover-target');
            if (target) {
                cursor.classList.add('active');
            }
        });

        document.addEventListener('mouseout', (e) => {
            const target = e.target.closest('a, button, .timeline-item img, .btn-contact, .portfolio-img-wrapper img, .about-image-wrapper img, .hover-target');
            if (target) {
                cursor.classList.remove('active');
            }
        });
    }
}

// Page Specific Animations
function initPageAnimations() {
    // --- HOME PAGE ANIMATIONS ---
    const heroImg = document.querySelector('.hero-image');
    if(heroImg) {
        // Initial intro animation
        gsap.fromTo(heroImg, 
            { scale: 1.2, filter: 'brightness(0)' },
            { 
                scale: 1, 
                filter: 'brightness(0.65)', 
                duration: 2, 
                ease: "power3.out",
                onComplete: () => {
                    // Continuous subtle breathing animation
                    gsap.to(heroImg, {
                        scale: 1.05,
                        duration: 10,
                        repeat: -1,
                        yoyo: true,
                        ease: "sine.inOut"
                    });
                }
            }
        );
    }

    const headerLinks = document.querySelectorAll('.header a');
    if(headerLinks.length) {
        gsap.fromTo(headerLinks,
            { y: -20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out", delay: 0.2 }
        );
    }

    const heroTexts = document.querySelectorAll('.hero-text-overlay h1');
    if(heroTexts.length) {
        gsap.fromTo(heroTexts, 
            { y: 80, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.2, stagger: 0.3, ease: "power4.out" }
        );
        
        // New Related Animation: Parallax Hero Text
        gsap.to('.hero-text-overlay', {
            y: -150,
            ease: "none",
            scrollTrigger: {
                trigger: '.hero',
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });
    }

    // --- SPACES WE CREATE ANIMATIONS (Premium Layout) ---
    const premiumSpaces = document.querySelectorAll('.premium-space-row');
    if(premiumSpaces.length) {
        premiumSpaces.forEach(row => {
            gsap.to(row, {
                scrollTrigger: {
                    trigger: row,
                    start: "top 85%",
                    toggleClass: "active",
                    once: true
                }
            });
            
            // Image Parallax
            const img = row.querySelector('.premium-space-image img');
            if(img) {
                gsap.fromTo(img, 
                    { y: -30, scale: 1.1 },
                    {
                        y: 30, scale: 1,
                        ease: "none",
                        scrollTrigger: {
                            trigger: row,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: true
                        }
                    }
                );
            }
        });
    }

    const timelineSection = document.querySelector('.timeline-section');
    const timelineVideo = document.querySelector('.timeline-video-bg');
    const timelineBgContainer = document.querySelector('.timeline-bg-container');

    if (timelineSection && timelineVideo && timelineBgContainer) {
        // Pin the video background while scrolling through the timeline
        ScrollTrigger.create({
            trigger: timelineSection,
            start: "top top",
            end: "bottom bottom",
            pin: timelineBgContainer,
            pinSpacing: false
        });

        // Handle video fade and playback
        ScrollTrigger.create({
            trigger: timelineSection,
            start: "top 60%",
            end: "bottom 20%",
            onEnter: () => {
                gsap.to(timelineVideo, { opacity: 1, duration: 1.5 });
                timelineVideo.play().catch(e => console.log("Video play blocked", e));
            },
            onLeave: () => {
                gsap.to(timelineVideo, { opacity: 0, duration: 1 });
                timelineVideo.pause();
            },
            onEnterBack: () => {
                gsap.to(timelineVideo, { opacity: 1, duration: 1.5 });
                timelineVideo.play().catch(e => console.log("Video play blocked", e));
            },
            onLeaveBack: () => {
                gsap.to(timelineVideo, { opacity: 0, duration: 1 });
                timelineVideo.pause();
            }
        });
    }

    const timelineItems = document.querySelectorAll('.timeline-item');
    if(timelineItems.length) {
        timelineItems.forEach((item, index) => {
            const direction = item.classList.contains('left') ? -80 : 80;
            const content = item.querySelector('.timeline-content');
            const img = item.querySelector('img');

            // Reveal Item & Content
            gsap.to(item, {
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: item,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            });

            gsap.fromTo(content,
                { x: direction, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 75%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Parallax on images
            if(img) {
                gsap.fromTo(img,
                    { y: -40, scale: 1.15 },
                    {
                        y: 40,
                        scale: 1,
                        ease: "none",
                        scrollTrigger: {
                            trigger: item,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: true
                        }
                    }
                );
            }
        });
    }

    // --- WHY ALTIN ANIMATIONS ---
    const whyAltinSection = document.querySelector('.why-altin-section');
    if (whyAltinSection) {
        gsap.fromTo('.feature-item', 
            { y: 30, opacity: 0 },
            { 
                y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out",
                scrollTrigger: {
                    trigger: '.why-features',
                    start: "top 85%"
                }
            }
        );

        gsap.fromTo('.stat-item', 
            { scale: 0.8, opacity: 0 },
            { 
                scale: 1, opacity: 1, duration: 1, stagger: 0.2, ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: '.why-stats',
                    start: "top 90%"
                }
            }
        );
    }

    // --- COLLECTION PAGE ANIMATIONS ---
    const collectionHeader = document.querySelector('.collection-header');
    if (collectionHeader) {
        gsap.to(collectionHeader, { opacity: 1, duration: 1, ease: "power2.out" });
    }

    const portfolioItems = document.querySelectorAll('.portfolio-item');
    if(portfolioItems.length) {
        portfolioItems.forEach((item) => {
            gsap.to(item, {
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: item,
                    start: "top 85%",
                }
            });

            const img = item.querySelector('img');
            if (img) {
                gsap.fromTo(img, 
                    { scale: 1.2 }, 
                    { scale: 1, duration: 1.5, ease: "power3.out", scrollTrigger: {
                        trigger: item,
                        start: "top 90%"
                    }}
                );
            }
        });
    }

    // --- ABOUT PAGE & SECTION ANIMATIONS ---
    const aboutTitle = document.querySelector('.about-content h1');
    if (aboutTitle) {
        gsap.fromTo(aboutTitle, 
            { opacity: 0, y: 50 },
            { 
                opacity: 1, 
                y: 0, 
                duration: 1, 
                ease: "power2.out",
                scrollTrigger: {
                    trigger: aboutTitle,
                    start: "top 85%"
                }
            }
        );
    }
    const aboutText = document.querySelector('.about-text');
    if (aboutText) {
        gsap.fromTo(aboutText, 
            { y: 50, opacity: 0 }, 
            { 
                y: 0, 
                opacity: 1, 
                duration: 1, 
                ease: "power3.out", 
                scrollTrigger: {
                    trigger: aboutText,
                    start: "top 80%"
                }
            }
        );
    }
    const aboutImg = document.querySelector('.about-image-wrapper');
    if (aboutImg) {
        gsap.fromTo(aboutImg, 
            { x: 50, opacity: 0 }, 
            { 
                x: 0, 
                opacity: 1, 
                duration: 1.2, 
                ease: "power3.out", 
                scrollTrigger: {
                    trigger: '.about-grid',
                    start: "top 75%"
                }
            }
        );
    }

    // Process Section (About Page)
    const processHeader = document.querySelector('.process-header');
    if (processHeader) {
        gsap.fromTo(processHeader, 
            { y: 30, opacity: 0 },
            { 
                y: 0, 
                opacity: 1, 
                duration: 1, 
                ease: "power2.out",
                scrollTrigger: {
                    trigger: processHeader,
                    start: "top 85%"
                }
            }
        );
    }
    const processSteps = document.querySelectorAll('.process-step');
    if (processSteps.length) {
        gsap.fromTo(processSteps, 
            { y: 60, opacity: 0 },
            { 
                y: 0, 
                opacity: 1, 
                duration: 0.8, 
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: '.process-grid',
                    start: "top 80%"
                }
            }
        );
    }

    // --- CONTACT PAGE ANIMATIONS ---
    const contactTitle = document.querySelector('.contact-container h1');
    if (contactTitle) {
        gsap.to(contactTitle, { opacity: 1, duration: 1, ease: "power2.out" });
    }
    const contactInfo = document.querySelector('.contact-info');
    if (contactInfo) {
        gsap.fromTo(contactInfo, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.3 });
    }
    const contactForm = document.querySelector('.contact-form-wrapper');
    if (contactForm) {
        gsap.fromTo(contactForm, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.5 });
    }

    // --- SERVICES PAGE ANIMATIONS ---
    const servicesHeader = document.querySelector('.services-header');
    if (servicesHeader) {
        gsap.to(servicesHeader, { opacity: 1, duration: 1, ease: "power2.out" });
    }

    const serviceRows = document.querySelectorAll('.service-row');
    if (serviceRows.length) {
        serviceRows.forEach(row => {
            const text = row.querySelector('.service-text');
            const img = row.querySelector('.service-img-wrapper');
            const direction = row.classList.contains('reverse') ? 50 : -50;

            gsap.to(row, {
                opacity: 1,
                duration: 0.5,
                scrollTrigger: {
                    trigger: row,
                    start: "top 80%"
                }
            });

            gsap.fromTo(text, 
                { x: direction, opacity: 0 }, 
                { x: 0, opacity: 1, duration: 1, ease: "power3.out", scrollTrigger: {
                    trigger: row,
                    start: "top 80%"
                }}
            );

            gsap.fromTo(img, 
                { scale: 0.9, opacity: 0 }, 
                { scale: 1, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.2, scrollTrigger: {
                    trigger: row,
                    start: "top 80%"
                }}
            );
        });
    }

    // --- BLOG PAGE ANIMATIONS ---
    const blogHeader = document.querySelector('.blog-header');
    if (blogHeader) {
        gsap.to(blogHeader, { opacity: 1, duration: 1, ease: "power2.out" });
    }

    const blogCards = document.querySelectorAll('.blog-card');
    if (blogCards.length) {
        gsap.fromTo(blogCards, 
            { y: 50, opacity: 0 },
            { 
                y: 0, 
                opacity: 1, 
                duration: 0.8, 
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: '.blog-grid',
                    start: "top 85%"
                }
            }
        );
    }

    // --- BLOG DETAIL PAGE ANIMATIONS ---
    const articleElements = document.querySelectorAll('.article-page .reveal');
    if (articleElements.length) {
        articleElements.forEach(el => {
            gsap.fromTo(el,
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.9,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%"
                    }
                }
            );
        });
    }

    const articleTitle = document.querySelector('.article-hero h1');
    if (articleTitle) {
        gsap.fromTo(articleTitle, 
            { y: 30, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.2 }
        );
    }

    // --- GLOBAL FOOTER ANIMATION ---
    const footer = document.querySelector('.global-footer');
    if (footer) {
        gsap.fromTo(footer, 
            { y: 50, opacity: 0 }, 
            { 
                y: 0, 
                opacity: 1, 
                duration: 1, 
                ease: "power3.out",
                scrollTrigger: {
                    trigger: footer,
                    start: "top 95%"
                }
            }
        );
    }
}

// Boot up
initCursor();
window.addEventListener('load', initPageTransitions);
