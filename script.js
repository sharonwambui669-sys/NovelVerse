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

