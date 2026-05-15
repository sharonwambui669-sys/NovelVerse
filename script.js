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
searchButton.addEventListener("click", function () {

    const searchValue = searchInput.value.toLowerCase();

    if (searchValue === "") {

        alert("Please enter a book title.");
        return;
    }

    alert(`Searching for "${searchValue}"`);
});

// ===============================
// Genre Filtering
// ===============================

const genreCards = document.querySelectorAll(".genre-card");

genreCards.forEach(function(card) {

    card.addEventListener("click", function () {

        const genre = card.textContent;

        alert(`Showing ${genre} books`);
    });
});

// ===============================
// Read More Buttons
// ===============================

const readButtons = document.querySelectorAll(".book-card button");

readButtons.forEach(function(button) {

    button.addEventListener("click", function () {

        alert("Opening full book description...");
    });
});

// ===============================
// Add To Library Buttons
// ===============================

const libraryButtons = document.querySelectorAll(".book-item button");

libraryButtons.forEach(function(button) {

    button.addEventListener("click", function () {
           button.textContent = "Added";
        button.style.backgroundColor = "green";

        alert("Book added to library");
    });
});

// ===============================
// Contact Form Validation
// ===============================

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
    document.querySelector("input[type='text']").value;

    const email =
    document.querySelector("input[type='email']").value;

    const phone =