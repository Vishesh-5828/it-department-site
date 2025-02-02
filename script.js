// Add smooth scrolling animation on page load
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".header");
    header.style.opacity = "0";
    header.style.transition = "opacity 1s ease-in-out";

    setTimeout(() => {
        header.style.opacity = "1";
    }, 100);
});


// Function to check if an element is in the viewport
function isElementInView(el) {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

// Function to trigger animation on scroll-up
function triggerAnimationOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');

    elements.forEach(element => {
        if (isElementInView(element)) {
            element.classList.add('fadeInUp');
            element.classList.remove('invisible');
        }
    });
}

// On page load, check if elements are already in view
window.addEventListener('load', triggerAnimationOnScroll);

// On scroll, check for elements that come into view
window.addEventListener('scroll', () => {
    if (window.scrollY < lastScrollY) {  // If scroll is upward
        triggerAnimationOnScroll();
    }
    lastScrollY = window.scrollY;  // Update last scroll position
});

// For the initial scroll detection, we need to store the scroll position
let lastScrollY = window.scrollY;





document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card-flip');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => observer.observe(card));
});


document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const filterItems = document.querySelectorAll(".filter-item");

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            // Remove active class from all buttons
            filterButtons.forEach((btn) => btn.classList.remove("active"));
            button.classList.add("active");

            const filter = button.getAttribute("data-filter");
            filterItems.forEach((item) => {
                if (filter === "all" || item.classList.contains(filter)) {
                    item.style.display = "block";
                    item.classList.add("fade-in");
                } else {
                    item.style.display = "none";
                    item.classList.remove("fade-in");
                }
            });
        });
    });
});


document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting the default way
    
    // Get form data
    const name = document.getElementById("user_name").value;
    const email = document.getElementById("user_email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Simple validation to check if all fields are filled
    if (name && email && subject && message) {
        // Simulate sending the message (in a real scenario, you'd send this to a server)
        setTimeout(function() {
            // Show success message
            alert("Thank you, " + name + "! Your message has been sent successfully.");
            // Reset form fields
            document.getElementById("contact-form").reset();
        }, 1000); // Simulate network delay
    } else {
        // Show error message if any field is missing
        alert("Please fill in all fields.");
    }
});

  // Highlight the active link
  document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
      link.addEventListener('click', function () {
        // Remove active class from all links
        navLinks.forEach(nav => nav.classList.remove('active'));
        // Add active class to clicked link
        this.classList.add('active');
      });
    });
  });

  // Change navbar color on scroll
  window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.zebra');
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = '#444'; // Slightly darker
    } else {
      navbar.style.backgroundColor = '#333'; // Default color
    }
  });






  document.addEventListener("DOMContentLoaded", function () {
    const appleCarousel = new bootstrap.Carousel('#appleCarousel', {
        interval: 3000, // Slide every 3 seconds
        ride: "carousel",
        pause: "hover", // Pause on hover
    });
});










