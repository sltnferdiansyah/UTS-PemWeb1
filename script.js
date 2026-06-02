/* ================================================
   CV — Script
   1. Navbar shadow on scroll
   2. Scroll-reveal for .reveal elements
   ================================================ */

document.addEventListener('DOMContentLoaded', function () {

    // ---- 1. Navbar shadow on scroll ----
    var navbar = document.getElementById('navbar');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ---- 2. Scroll Reveal ----
    var observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach(function (el) {
        observer.observe(el);
    });

});