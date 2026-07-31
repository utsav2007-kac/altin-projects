class SiteComponents {
    static getHeaderHTML() {
        return `
        <header class="header">
            <nav class="nav-left">
                <a href="index.html" class="page-link">HOME</a>
                <a href="about.html" class="page-link">ABOUT</a>
                <a href="services.html" class="page-link">SERVICES</a>
            </nav>
            <div class="logo">
                <a href="index.html" class="page-link">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="12" y="10" width="5" height="28" rx="2.5" fill="#0F0F0F" />
                        <path d="M 22 10 H 28 A 5 5 0 0 1 33 15 V 38 H 28 V 15 H 22 V 38 H 17 V 15 A 5 5 0 0 1 22 10 Z" fill="#0F0F0F" />
                        <rect x="34" y="10" width="5" height="28" rx="2.5" fill="#0F0F0F" />
                    </svg>
                </a>
            </div>
            <nav class="nav-right">
                <a href="collection.html" class="page-link">PORTFOLIO</a>
                <a href="contact.html" class="btn-contact page-link">CONTACT US</a>
            </nav>
        </header>
        `;
    }

    static getMobileNavHTML() {
        return `
        <!-- Mobile Bottom Navigation -->
        <nav class="mobile-nav">
            <a href="index.html">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                Home
            </a>
            <a href="about.html">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                About
            </a>
            <a href="services.html">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                Services
            </a>
            <a href="collection.html">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                Portfolio
            </a>
            <a href="contact.html">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                Contact
            </a>
        </nav>
        `;
    }

    static getFooterHTML() {
        return `
        <footer class="global-footer">
            <div class="footer-content">
                <div class="footer-left">
                    <h3>Studio</h3>
                    <p>Dubai Design District (d3)<br>Building 6, Office 402<br>Dubai, UAE</p>
                    <p class="phone">+971 50 123 4567</p>
                </div>
                <div class="footer-center">
                    <p class="brand-text">Varieties of Interiors</p>
                </div>
                <div class="footer-right">
                    <h3>Follow Us</h3>
                    <div class="social-icons">
                        <a href="#" aria-label="Instagram" class="hover-target">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </a>
                        <a href="#" aria-label="Pinterest" class="hover-target">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.1 2.9c-2.4-2.4-6.4-2.4-8.8 0L2.9 12.3c-2.4 2.4-2.4 6.4 0 8.8 2.4 2.4 6.4 2.4 8.8 0l9.4-9.4c2.4-2.4 2.4-6.4 0-8.8z"></path><path d="M12 22v-6"></path><path d="M12 8V2"></path><path d="M18 14h-4"></path><path d="M10 14H6"></path></svg>
                        </a>
                        <a href="#" aria-label="Twitter" class="hover-target">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                        </a>
                        <a href="#" aria-label="LinkedIn" class="hover-target">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 Joy of Living. All rights reserved.</p>
            </div>
        </footer>
        `;
    }

    static init() {
        const appContainer = document.querySelector('.app-container');
        if (!appContainer) return;

        // Insert Header
        appContainer.insertAdjacentHTML('afterbegin', this.getHeaderHTML());

        // Insert Mobile Nav and Footer after the main element
        const main = appContainer.querySelector('main');
        if (main) {
            main.insertAdjacentHTML('afterend', this.getMobileNavHTML() + this.getFooterHTML());
        }

        this.setActiveLinks();
        
        // Dispatch custom event so GSAP script knows components are loaded
        document.dispatchEvent(new Event('componentsLoaded'));
    }

    static setActiveLinks() {
        // Determine current page. Default to index.html if empty
        let currentPath = window.location.pathname.split('/').pop();
        if (!currentPath || currentPath === '') {
            currentPath = 'index.html';
        }

        // Add active class to corresponding links
        const allLinks = document.querySelectorAll('.header a, .mobile-nav a');
        allLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('active');
            }
        });
    }
}

// Initialize components when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    SiteComponents.init();
});
