// Function to scroll navigation
function scrollNav(direction) {
    const navLinks = document.getElementById('navLinks');
    const scrollAmount = 200; // Amount of pixels to scroll

    if (direction === -1) {
        navLinks.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
        navLinks.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
}

// Function to scroll running content
function scrollContent(direction) {
    const contentContainer = document.getElementById('contentContainer');
    const scrollAmount = 300; // Amount of pixels to scroll

    if (direction === -1) {
        contentContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
        contentContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
}
