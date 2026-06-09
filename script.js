// ==========================================
// GLOBALS & MULTI-PAGE UTILITIES
// ==========================================

// 1. Unified Dark Mode Toggle (With LocalStorage memory)
const themeToggle = document.getElementById("theme-toggle");

// Check and apply saved user preference immediately on load
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    if (themeToggle) themeToggle.textContent = "Light Mode";
}

if (themeToggle) {
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            themeToggle.textContent = "Light Mode";
            localStorage.setItem("theme", "dark");
        } else {
            themeToggle.textContent = "Dark Mode";
            localStorage.setItem("theme", "light");
        }
    });
}

// 2. Smooth Navigation Scroll & Active Link Highlighter
const navLinks = document.querySelectorAll("nav ul li a");
const currentPath = window.location.pathname.split("/").pop() || "index.html";

navLinks.forEach(function(link) {
    const href = link.getAttribute("href");

    // Highlight what page the user is currently visiting
    if (href === currentPath) {
        link.classList.add("active-nav");
    }

    // Handle smooth internal scrolling cleanly
    link.addEventListener("click", function(event) {
        if (href && href.startsWith("#") && href.length > 1) {
            event.preventDefault();
            const section = document.querySelector(href);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }
    });
});

// 3. Scroll To Top Button
const topButton = document.createElement("button");
topButton.innerHTML = "↑ Top";
topButton.className = "scroll-top-btn"; // Managed via CSS for clean design
document.body.appendChild(topButton);

// Apply minimal inline safety fallback styles if not in CSS
Object.assign(topButton.style, {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    padding: "10px 15px",
    display: "none",
    cursor: "pointer",
    zIndex: "1000",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "var(--primary-color, #ffb703)",
    color: "#fff"
});

window.addEventListener("scroll", function () {
    topButton.style.display = window.scrollY > 300 ? "block" : "none";
});

topButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// 4. Footer Year Sync
const footerText = document.querySelector(".footer-bottom p");
if (footerText) {
    const currentYear = new Date().getFullYear();
    footerText.innerHTML = `&copy; ${currentYear} NovelVerse. All rights reserved.`;
}


// ==========================================
// PAGE-SPECIFIC ENHANCEMENTS (Safe-guarded)
// ==========================================

// 5. Search Functionality (Home Page Only)
const searchInput = document.querySelector(".hero-text input");
const searchButton = document.querySelector(".hero-text button");

if (searchButton && searchInput) {
    searchButton.addEventListener("click", function () {
        const searchValue = searchInput.value.toLowerCase().trim();
        if (searchValue === "") {
            searchInput.placeholder = "Please enter a valid title...";
            searchInput.focus();
            return;
        }
        console.log(`Executing query for: "${searchValue}"`);
    });
}

// 6. FAQ Accordion Interaction (Home Page Only)
const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach(function(item) {
    item.addEventListener("click", function () {
        // Toggle the active class; visual styling should ideally live in styles.css
        item.classList.toggle("active");
    });
});

// 7. Genre Cards Tracker (Genres Page Only)
const genreCards = document.querySelectorAll(".genre-card");
genreCards.forEach(function(card) {
    card.addEventListener("click", function () {
        const genre = card.querySelector("h3")?.textContent.trim() || card.textContent.trim();
        console.log(`Filtering UI to show: ${genre} books`);
    });
});

// 8. "Read More" Modal / Expand Hook (Books & Featured Section)
const readButtons = document.querySelectorAll(".book-card button");
readButtons.forEach(function(button) {
    button.addEventListener("click", function () {
        const bookTitle = button.parentElement.querySelector("h3")?.textContent;
        console.log(`Opening description modal for: ${bookTitle}`);
    });
});

// 9. Interactive "Add To Library" State (Books Section Only)
const libraryButtons = document.querySelectorAll(".book-item button");
libraryButtons.forEach(function(button) {
    button.addEventListener("click", function () {
        if (!button.classList.contains("added")) {
            button.classList.add("added");
            button.textContent = "✓ Added";
            button.style.backgroundColor = "#2a9d8f"; // Smooth green color tone
            button.style.color = "#fff";
        } else {
            // Optional: Toggle back off
            button.classList.remove("added");
            button.textContent = "Add to library";
            button.style.backgroundColor = "";
            button.style.color = "";
        }
    });
});

// 10. Contact Form Processor & Character Counter (Contact Page Only)
const contactForm = document.getElementById('contactForm');
const messageBox = document.getElementById("message");

if (contactForm && messageBox) {
    // Generate Character Counter dynamically below the message text area
    const counter = document.createElement("small");
    counter.style.display = "block";
    counter.style.marginTop = "4px";
    counter.style.color = "#888";
    counter.textContent = "Characters: 0";
    messageBox.parentElement.appendChild(counter);

    messageBox.addEventListener("input", function () {
        counter.textContent = `Characters: ${messageBox.value.length}`;
    });

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const fullName = document.getElementById('full-name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = messageBox.value.trim();

        const formData = { fullName, email, phone, message };
        
        console.log('Form Processing Success:', formData);
        alert(`Thank you, ${fullName}! Your message has been sent successfully.`);
        
        contactForm.reset();
        counter.textContent = "Characters: 0";
    });
}

// 11. Newsletter Validation Handler (Multi-page Footer Component)
const newsletterForm = document.querySelector(".newsletter form");
if (newsletterForm) {
    newsletterForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const emailInput = newsletterForm.querySelector("input[type='email']");
        const emailValue = emailInput ? emailInput.value.trim() : "";

        if (!emailValue) return;

        alert("Awesome! Check your inbox soon for updates.");
        newsletterForm.reset();
    });
}


// ==========================================
// ANALYTICS & LOGGING HOOKS (Developer Console)
// ==========================================
const currentHour = new Date().getHours();
let greeting = "Evening";
if (currentHour < 12) greeting = "Morning";
else if (currentHour < 18) greeting = "Afternoon";

const booksDataset = ["The Lost World", "Dark Secrets", "Galaxy Warriors", "Broken Memories"];
const randomBook = booksDataset[Math.floor(Math.random() * booksDataset.length)];

console.log(`[NovelVerse App] Good ${greeting}! Suggested read for today: "${randomBook}"`);
