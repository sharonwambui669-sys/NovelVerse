// Dark Mode Toggle
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "Light Mode";
    } else {
        themeToggle.textContent = "Dark Mode";
    }
});

// ===============================
// Search Functionality
// ===============================

const searchInput = document.querySelector(".hero-text input");
const searchButton = document.querySelector(".hero-text button");
