const responsiveMenuButton = document.getElementById(
    'responsiveMenuToggleButton'
);

const navBarLinks = document.querySelector('.navbar-links')

responsiveMenuButton.addEventListener('click', () => {
    navBarLinks.classList.toggle('open')
    responsiveMenuButton.classList.toggle('open');
})

const allNavLinks =document.querySelectorAll('.navbar-links li');

allNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        navBarLinks.classList.remove('open');
        responsiveMenuButton.classList.remove('open')
    })
})

// POPUP //

// Wait for the page to load
document.addEventListener('DOMContentLoaded', function() {
    // Get the popup element and close button
    const popup = document.getElementById('popup');
    const closeButton = document.getElementById('closeButton');

    // Show the popup after 5 seconds
    setTimeout(function() {
        popup.style.display = 'block';
    }, 5000);

    // Close the popup when the close button is clicked
    closeButton.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    // Handle form submission
    const newsletterForm = document.getElementById('newsletterForm');
    newsletterForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get the entered email address
        const emailInput = document.getElementById('emailInput');
        const email = emailInput.value.trim();

        // Perform your newsletter subscription logic here
        // For example, send the email address to your server

        // Hide the popup
        popup.style.display = 'none';
    });
});


// Image Slider Main //
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');

    let currentPosition = 0;
    const cardWidth = slider.querySelector('.card').offsetWidth;
    const totalCards = slider.querySelectorAll('.card').length;
    const visibleCards = 3;

    function updateSliderPosition() {
        slider.style.transform = `translateX(-${currentPosition * cardWidth}px)`;
    }

    function showNextCard() {
        if (currentPosition < totalCards - visibleCards) {
            currentPosition++;
            updateSliderPosition();
        }
    }

    function showPrevCard() {
        if (currentPosition > 0) {
            currentPosition--;
            updateSliderPosition();
        }
    }

    nextButton.addEventListener('click', showNextCard);
    prevButton.addEventListener('click', showPrevCard);
});

