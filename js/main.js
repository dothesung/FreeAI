        // JavaScript đơn giản để xử lý menu hamburger
        document.addEventListener('DOMContentLoaded', function() {
            const hamburgerMenu = document.querySelector('.hamburger-menu');
            const navLinks = document.getElementById('navLinks');

            hamburgerMenu.addEventListener('click', function() {
                navLinks.classList.toggle('active');
            });
        });
