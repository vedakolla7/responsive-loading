// script.js
window.onscroll = function() {
    changeNavbarColorOnScroll();
};

function changeNavbarColorOnScroll() {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = "#222";  // Darker background when scrolling
    } else {
        navbar.style.backgroundColor = "#333";  // Original background color
    }
}

// Change font color of menu items on hover dynamically
document.querySelectorAll('.navbar a').forEach(item => {
    item.addEventListener('mouseenter', function() {
        item.style.color = "red";  // Change font color on hover
    });
    item.addEventListener('mouseleave', function() {
        item.style.color = "white";  // Reset font color when hover ends
    });
});
