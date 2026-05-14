//Dark Mode Toggle
const themeToggle=
document.getElementById("theme-toggle");

themeToggle.addEventListener("click",function(){
    document.body.classList.toggle("dark-mode");


if(document.body.classList.contains("dark-mode")){
    themeToggle.textContent="Light Mode";
}else{
    themeToggle.textContent="Dark Mode";
}

});

//Search Functionality
const searchInput=document.querySelector(".hero-text input");
const searchButton=document.querySelector(".hero-text button");

searchButton.addEventListener("click",function(){
    const searchValue=searchInput.value.toLowerCase();

    if(searchValue===````){
        alert("Please enter a book title.");
        return;
    }
    alert(`Searching for:${searchValue}`);
});

//Book Data Array
const books=[
    {
        title:"The Lost World",
        genre:"Adventure",
        rating:4.8
    }
    {
        title:"Broken Memories",
        genre:"Drama",
        rating:4.5
    }
    {
        title:"Dark Secrets",
        genre:"Thriller",
        rating:4.6
    }
    {
        title:"Galaxy Warriors",
        genre:"Science Fiction",
        rating:4.7
    }
];

//Display Books in console
books.forEach(function(book){console.log(book.title);
});

//Genre Filtering
const genreCards=
document.querySelectorAll(".genre-card");

genreCards.forEach(function(card){
    card.addEventListener("click",function(){
        const selectGenre=card.textContent;
        const filteredBooks=books.filter(function(book){
            return book.genre.includes(selectedGenre);
        })

        console.log(filteredBooks);
        alert(`Showing books for ${selectedGenre}`);
    })
})

//Read More Buttons
const readButtons=
document.querySelectorAll(".book-card button");
readButtons.forEach(function(button){

    button.addEventListener("click",function(){
        alert("Opening full book description...");
    })  
})
//Add to library buttons
const libraryButtons=
document.querySelectorAll(".book-item button");
libraryButtons.forEach(function(button){

    button.addEventListener("click",function(){ 
        button.textContent="Added";
    button.style.backgroundColor="green";
    alert("Book added to your library");
});
   
});

//Contact Form Validation
const contactForm=
document.querySelector(".contact-form");
contactForm.addEventListener("submit",function(event){
    event.preventDefault();

    const name=
    document.querySelector("input[type='text']").value;
    const email=
    document.querySelector("input[type='email']").value;
    const phone=
    document.querySelector("input[type='tel']").value;
    const message=
    document.querySelector("textarea").value;

    if(name===````){
        alert("Please enter your full name.");
        return;
    }

    if(email===````){
        alert("Please enter email.");
        return;
    }

    if(!email.includes("@")){
        alert("Please enter a valid email address.");
        return;
    }

    if(phone===````){
        alert("Please enter your phone number.");
        return;
    }

    if(message===````){
        alert("Please enter your message.");
        return;
    }

    alert("Message sent successfully.");

    contactForm.requestFullscreen();
})

//Newsletter Subscription
const newsletterForm=
document.querySelector(".newsletter form");

newsletterForm.addEventListener("submit",function(event){
    event.preventDefault();

    const newsletterEmail=
    newsletterForm.querySelector("input").value;

    if(newsletterEmail===````){
        alert("Please enter your email.")
        return;
    }

    alert("Thank you for subscribing.");

    newsletterForm.reset();
});

//Smooth Scrolling
const navlinks=document.querySelectorAll("nav ul li a");
navlinks.forEach(function(link){
    link.addEventListener("click",function(event){
        event.preventDefault();
        const targetId=link.getAttribute("href");
        const targetSection=
        document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior:"smooth"
        });
    });
});

//Dynamic Greeting
const currentHour=new Date().getHours();

if(currentHour<12){
    console.log("Good Morning Reader");
}else if(currentHour<18){
    console.log("Good Afternoon Reader");
}else{
    console.log("Good Evening Reader");
}

//Testimonial Rotation
const testimonials=[
    "NovelVerse helped me discover books I truly enjoy.",
    "The website is easy to use and very interactive.",
    "I love the dark mode and genre filtering features.",
];

let testimonialIndex=0;
function rotateTestimonials(){
    console.log(testimonials[testimonialIndex]);
    testimonialIndex++;

    if(testimonialIndex>=testimonials.length){
        testimonialIndex=0;
    }
}

setInterval(rotateTestimonials,4000);

// Hover Animation on Genre Cards
genreCards.forEach(function(card) {

    card.addEventListener("mouseenter", function () {
        card.style.transform = "scale(1.1)";
    });

    card.addEventListener("mouseleave", function () {
        card.style.transform = "scale(1)";
    });
});

// Book Rating Interaction
const ratings = document.querySelectorAll(".book-item span");

ratings.forEach(function(rating) {

    rating.addEventListener("click", function () {
        alert(`Book Rating: ${rating.textContent}`);
    });
});

// FAQ Interaction
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

// Welcome Message
window.addEventListener("load", function () {

    console.log("Welcome to NovelVerse Website");
});


// Scroll To Top Button Creation
const scrollButton = document.createElement("button");

scrollButton.textContent = "Top";
scrollButton.id = "scroll-top";

document.body.appendChild(scrollButton);

scrollButton.style.position = "fixed";
scrollButton.style.bottom = "20px";
scrollButton.style.right = "20px";
scrollButton.style.padding = "10px 15px";
scrollButton.style.display = "none";
scrollButton.style.cursor = "pointer";

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
});

scrollButton.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
