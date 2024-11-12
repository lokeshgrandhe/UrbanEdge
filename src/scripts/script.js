/*
function scrollToServices() {
    document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
}

function toggleContact() {
    const popup = document.getElementById('contact-popup');
    if (popup.style.display === 'none' || popup.style.display === '') {
        popup.style.display = 'block';
    } else {
        popup.style.display = 'none';
    }
}
*/

// Check if footer is in view and hide the floating button
/*function checkFooterOverlap() {
    const footer = document.querySelector('footer');
    const floatingContact = document.querySelector('.floating-contact');

    const footerPosition = footer.getBoundingClientRect().top;
    const screenBottom = window.innerHeight;

    if (footerPosition < screenBottom) {
        document.body.classList.add('show-contact');
    } else {
        document.body.classList.remove('show-contact');
    }
}

// Add scroll event listener
window.addEventListener('scroll', checkFooterOverlap);*/


// Toggle Contact Us Popup
function toggleContact() {
    const contactPopup = document.getElementById("contact-popup");
    contactPopup.style.display = (contactPopup.style.display === "block") ? "none" : "block";
}

// Check if footer is in view and hide the floating button
function checkFooterOverlap() {
    const footer = document.querySelector('footer');
    const floatingContact = document.querySelector('.floating-contact');

    const footerPosition = footer.getBoundingClientRect().top;
    const screenBottom = window.innerHeight;

    if (footerPosition < screenBottom) {
        document.body.classList.add('show-contact');
    } else {
        document.body.classList.remove('show-contact');
    }
}

// Event listener to check footer visibility on scroll
window.addEventListener('scroll', checkFooterOverlap);

// Initial check in case the page is loaded with the footer in view
checkFooterOverlap();



document.addEventListener("DOMContentLoaded", () => {
    const rows = document.querySelectorAll('.row');

    // Create an intersection observer to track when elements are visible in the viewport
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add 'visible' class when the row enters the viewport
                entry.target.classList.add('visible');
                entry.target.classList.remove('hidden');
            } else {
                // Optionally remove 'visible' class when the row exits the viewport
                entry.target.classList.remove('visible');
                entry.target.classList.add('hidden');
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the row is visible

    // Observe each row element
    rows.forEach(row => {
        observer.observe(row);
    });
});
