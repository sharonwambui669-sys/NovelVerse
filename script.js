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

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    // Listen for the form submission
    contactForm.addEventListener('submit', function(event) {
        // 1. Prevent the default page refresh
        event.preventDefault();

        // 2. Grab the values from the input fields
        const fullName = document.getElementById('full-name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();

        // 3. Simple validation check (HTML 'required' handles most of this, but it's good backup)
        if (!fullName || !email || !message) {
            alert('Please fill out all required fields.');
            return;
        }

        // 4. Create an object with the data (ready to send to a server/API)
        const formData = {
            fullName: fullName,
            email: email,
            phone: phone,
            message: message
        };

        // For now, let's log it to the console to make sure it works
        console.log('Form Submitted Successfully!', formData);

        // 5. Show a success message to the user
        alert(`Thank you, ${fullName}! Your message has been sent.`);

        // 6. Clear the form fields after submission
        contactForm.reset();
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
// Newsletter Subscription
// ===============================

const newsletterForm =
document.querySelector(".newsletter form");

newsletterForm.addEventListener("submit", function(event) {
     event.preventDefault();

    const email =
    newsletterForm.querySelector("input").value;

    if (email === "") {

        alert("Please enter your email.");
        return;
    }

    alert("Thank you for subscribing.");

    newsletterForm.reset();
});

// ===============================
// Smooth Navigation Scroll
// ===============================

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {

        const href = link.getAttribute("href");

        if (href.startsWith("#")) {

            event.preventDefault();

            const section =
            document.querySelector(href);

            section.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// ===============================
// FAQ Interaction
// ===============================

const faqItems =
document.querySelectorAll(".faq-item");

faqItems.forEach(function(item) {

    item.addEventListener("click", function () {

        item.classList.toggle("active");

        if (item.classList.contains("active")) {

            item.style.backgroundColor = "#ffb703";

        } else {

            item.style.backgroundColor = "white";
        }
    });
});

// ===============================
// Scroll To Top Button
// ===============================

const topButton =
document.createElement("button");

topButton.innerHTML = "Top";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "20px";
topButton.style.right = "20px";
topButton.style.padding = "10px 15px";
topButton.style.display = "none";
topButton.style.cursor = "pointer";

// Show Button on Scroll
window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        topButton.style.display = "block";
        } else {

        topButton.style.display = "none";
    }
});

// Scroll to Top
topButton.addEventListener("click", function () {

    window.scrollTo({

        top: 0,
        behavior: "smooth"
    });
});

// ===============================
// Character Counter
// ===============================

const messageBox =
document.querySelector("textarea");

const counter =
document.createElement("p");

messageBox.parentElement.appendChild(counter);

messageBox.addEventListener("input", function () {

    counter.textContent =
    `Characters: ${messageBox.value.length}`;
});

// ===============================
// Dynamic Greeting
// ===============================

const currentHour = new Date().getHours();

if (currentHour < 12) {

    console.log("Good Morning Reader");

} else if (currentHour < 18) {

    console.log("Good Afternoon Reader");
} else {

    console.log("Good Evening Reader");
}

// ===============================
// Random Book Suggestion
// ===============================

const books = [

    "The Lost World",
    "Dark Secrets",
    "Galaxy Warriors",
    "Broken Memories",
    
];

function suggestBook() {

    const randomIndex =
    Math.floor(Math.random() * books.length);

    console.log(
        `Suggested Book: ${books[randomIndex]}`
    );
}

suggestBook();

// ===============================
// Footer Year Update
// ===============================

const footerText =
document.querySelector(".footer-bottom p");

const currentYear =
new Date().getFullYear();

footerText.textContent =
`© ${currentYear} NovelVerse. All rights reserved.`;

// ===============================
// Website Welcome Message
// ===============================

window.addEventListener("load", function () {

    console.log("Welcome to NovelVerse");
});
