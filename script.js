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
    document.querySelector("input[type='tel']").value;

    const message =
    document.querySelector("textarea").value;

    if (name === "") {

        alert("Please enter your name.");
        return;
    }

    if (email === "") {

        alert("Please enter your email.");
        return;
    }

    if (!email.includes("@")) {

        alert("Please enter a valid email.");
        return;
    }

    if (phone === "") {
          alert("Please enter your phone number.");
        return;
    }

    if (message === "") {

        alert("Please write your message.");
        return;
    }

    alert("Message sent successfully.");

    contactForm.reset();
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
