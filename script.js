// ===============================
// 1. Dark Mode Toggle
// ===============================
const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            themeToggle.textContent = "Light Mode";
        } else {
            themeToggle.textContent = "Dark Mode";
        }
    });
}

// ===============================
// 2. Search Functionality
// ===============================
const searchInput = document.querySelector(".hero-text input");
const searchButton = document.querySelector(".hero-text button");

if (searchButton && searchInput) {
    searchButton.addEventListener("click", function () {
        const searchValue = searchInput.value.toLowerCase().trim();

        if (searchValue === "") {
            alert("Please enter a book title.");
            return;
        }

        alert(`Searching for "${searchValue}"`);
    });
}

// ===============================
// 3. Genre Filtering
// ===============================
const genreCards = document.querySelectorAll(".genre-card");

genreCards.forEach(function(card) {
    card.addEventListener("click", function () {
        const genre = card.textContent.trim();
        alert(`Showing ${genre} books`);
    });
});

// ===============================
// 4. Read More Buttons
// ===============================
const readButtons = document.querySelectorAll(".book-card button");

readButtons.forEach(function(button) {
    button.addEventListener("click", function () {
        alert("Opening full book description...");
    });
});

// ===============================
// 5. Contact Form Submission
// ===============================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const fullName = document.getElementById('full-name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!fullName || !email || !message) {
            alert('Please fill out all required fields.');
            return;
        }

        const formData = {
            fullName: fullName,
            email: email,
            phone: phone,
            message: message
        };

        console.log('Form Submitted Successfully!', formData);
        alert(`Thank you, ${fullName}! Your message has been sent.`);
        contactForm.reset();
    });
}

// ===============================
// 6. Add To Library Buttons
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
// 7. Newsletter Subscription (Fixed Syntax & Variable Typos)
// ===============================
const newsletterForm = document.querySelector(".newsletter form");

if (newsletterForm) {
    newsletterForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const emailInput = newsletterForm.querySelector("input");
        const emailValue = emailInput ? emailInput.value.trim() : "";

        if (emailValue === "") {
            alert("Please enter your email.");
            return;
        }

        alert("Thank you for subscribing.");
        newsletterForm.reset();
    });
}

// ===============================
// 8. Smooth Navigation Scroll
// ===============================
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
        const href = link.getAttribute("href");

        if (href && href.startsWith("#") && href.length > 1) {
            // Only interrupt if it is an internal anchor on the current page
            if (!href.includes(".html")) {
                event.preventDefault();
                const section = document.querySelector(href);
                if (section) {
                    section.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }
        }
    });
});

// ===============================
// 9. FAQ Interaction
// ===============================
const faqItems = document.querySelectorAll(".faq-item");

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
// 10. Scroll To Top Button
// ===============================
const topButton = document.createElement("button");
topButton.innerHTML = "Top";
document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "20px";
topButton.style.right = "20px";
topButton.style.padding = "10px 15px";
topButton.style.display = "none";
topButton.style.cursor = "pointer";
topButton.style.zIndex = "1000"; // Ensures it stays visible on top of other content

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
});

topButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// ===============================
// 11. Character Counter
// ===============================
const messageBox = document.querySelector("textarea");

if (messageBox && messageBox.parentElement) {
    const counter = document.createElement("p");
    messageBox.parentElement.appendChild(counter);

    messageBox.addEventListener("input", function () {
        counter.textContent = `Characters: ${messageBox.value.length}`;
    });
}

// ===============================
// 12. Dynamic Greeting
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
// 13. Random Book Suggestion
// ===============================
const books = [
    "The Lost World",
    "Dark Secrets",
    "Galaxy Warriors",
    "Broken Memories"
];

function suggestBook() {
    const randomIndex = Math.floor(Math.random() * books.length);
    console.log(`Suggested Book: ${books[randomIndex]}`);
}
suggestBook();

// ===============================
// 14. Footer Year Update
// ===============================
const footerText = document.querySelector(".footer-bottom p");

if (footerText) {
    const currentYear = new Date().getFullYear();
    footerText.textContent = `© ${currentYear} NovelVerse. All rights reserved.`;
}

// ===============================
// 15. Website Welcome Message
// ===============================
window.addEventListener("load", function () {
    console.log("Welcome to NovelVerse");
});
