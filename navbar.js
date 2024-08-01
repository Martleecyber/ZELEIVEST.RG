// navbar.js
document.addEventListener("DOMContentLoaded", function() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
            
            // Add event listener for the hamburger menu after loading the navbar
            document.querySelector('.hamburger').addEventListener('click', () => {
                const dropdown = document.querySelector('.dropdown');
                dropdown.classList.toggle('show');
                
                // Toggle the hamburger icon animation
                document.querySelectorAll('.line').forEach((line, index) => {
                    if (index === 0) {
                        line.classList.toggle('line1');
                    } else if (index === 1) {
                        line.classList.toggle('line2');
                    } else if (index === 2) {
                        line.classList.toggle('line3');
                    }
                });
            });
        });
});

