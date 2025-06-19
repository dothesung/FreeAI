        // JavaScript đơn giản để xử lý menu hamburger
        document.addEventListener('DOMContentLoaded', function() {
            const hamburgerMenu = document.querySelector('.hamburger-menu');
            const navLinks = document.getElementById('navLinks');

            hamburgerMenu.addEventListener('click', function() {
                navLinks.classList.toggle('active');
            });
        });

function loadHTML(selector, file) {
  fetch(file)
    .then(res => res.text())
    .then(data => {
      document.querySelector(selector).innerHTML = data;
    });
}

document.addEventListener("DOMContentLoaded", function () {
  loadHTML("header", "header.html");
  loadHTML("footer", "footer.html");
});

