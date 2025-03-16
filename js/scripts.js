/*!
 * Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
 */

window.addEventListener('DOMContentLoaded', event => {

    // ========================
    // 1) Existing Bootstrap JS
    // ========================

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    }

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // ==========================================
    // 2) NEW: Tab Switching for "Technical Skills"
    // ==========================================
    document.querySelectorAll('.skill-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove 'active' from all tabs
            document.querySelectorAll('.skill-tab').forEach(t => t.classList.remove('active'));
            // Hide all skill-content
            document.querySelectorAll('.skill-content').forEach(c => c.classList.remove('active'));
            // Activate this clicked tab
            tab.classList.add('active');
            // Show the matching content by ID
            const target = document.getElementById(tab.dataset.target);
            if (target) {
                target.classList.add('active');
            }
        });
    });

});
