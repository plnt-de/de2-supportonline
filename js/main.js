/**
 * tailoranter.com — Stick Jump
 * Main JavaScript
 */

(function () {
    'use strict';

    // ═══════════════════════════════════════
    // 1. COOKIE CONSENT
    // ═══════════════════════════════════════
    const cookieConsent = document.getElementById('cookie-consent');
    const acceptBtn = document.getElementById('accept-cookies');

    if (cookieConsent) {
        if (localStorage.getItem('cookiesAccepted')) {
            cookieConsent.style.display = 'none';
        }
    }

    if (acceptBtn) {
        acceptBtn.addEventListener('click', function () {
            localStorage.setItem('cookiesAccepted', 'true');
            if (cookieConsent) {
                cookieConsent.style.display = 'none';
            }
        });
    }

    // ═══════════════════════════════════════
    // 2. MOBILE MENU (BURGER)
    // ═══════════════════════════════════════
    const burger = document.getElementById('burger-btn');
    const navMenu = document.getElementById('nav-menu');

    if (burger && navMenu) {
        burger.addEventListener('click', function () {
            burger.classList.toggle('is-active');
            navMenu.classList.toggle('is-open');
        });

        // Close menu when a nav link is clicked
        const navLinks = navMenu.querySelectorAll('.nav__link');
        navLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                burger.classList.remove('is-active');
                navMenu.classList.remove('is-open');
            });
        });
    }

    // ═══════════════════════════════════════
    // 3. FAQ ACCORDION
    // ═══════════════════════════════════════
    const faqItems = document.querySelectorAll('.faq__item');

    faqItems.forEach(function (item) {
        const question = item.querySelector('.faq__question');
        if (question) {
            question.addEventListener('click', function () {
                // Close all other items
                faqItems.forEach(function (other) {
                    if (other !== item) {
                        other.classList.remove('is-open');
                    }
                });
                // Toggle current item
                item.classList.toggle('is-open');
            });
        }
    });

    // ═══════════════════════════════════════
    // 4. CONTACT FORM VALIDATION
    // ═══════════════════════════════════════
    const contactForm = document.getElementById('contact-form');
    const formSuccess = document.getElementById('form-success');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            var name = document.getElementById('contact-name');
            var email = document.getElementById('contact-email');
            var message = document.getElementById('contact-message');

            var valid = true;

            // Simple validation
            if (name && name.value.trim().length < 2) {
                valid = false;
                name.style.borderColor = '#e74c3c';
            } else if (name) {
                name.style.borderColor = '';
            }

            if (email && !isValidEmail(email.value.trim())) {
                valid = false;
                email.style.borderColor = '#e74c3c';
            } else if (email) {
                email.style.borderColor = '';
            }

            if (message && message.value.trim().length < 10) {
                valid = false;
                message.style.borderColor = '#e74c3c';
            } else if (message) {
                message.style.borderColor = '';
            }

            if (valid) {
                contactForm.reset();
                if (formSuccess) {
                    formSuccess.classList.add('is-visible');
                    setTimeout(function () {
                        formSuccess.classList.remove('is-visible');
                    }, 5000);
                }
            }
        });
    }

    function isValidEmail(email) {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // ═══════════════════════════════════════
    // 5. SMOOTH SCROLL FOR ANCHOR LINKS
    // ═══════════════════════════════════════
    var anchors = document.querySelectorAll('a[href^="#"], a[href^="/#"]');
    anchors.forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var href = this.getAttribute('href');
            var hash = href.includes('#') ? '#' + href.split('#')[1] : null;

            if (hash && hash.length > 1) {
                var target = document.querySelector(hash);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });

                    // Close mobile menu if open
                    if (burger && navMenu) {
                        burger.classList.remove('is-active');
                        navMenu.classList.remove('is-open');
                    }
                }
            }
        });
    });

    // ═══════════════════════════════════════
    // 6. SCROLL-BASED HEADER SHADOW
    // ═══════════════════════════════════════
    var header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 10) {
                header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
            } else {
                header.style.boxShadow = 'none';
            }
        });
    }

})();