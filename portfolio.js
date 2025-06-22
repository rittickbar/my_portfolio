// Toggle sidebar on hamburger click
const sidebar = document.getElementById('sidebar');
const hamburger = document.getElementById('hamburger');
const content = document.getElementById('content');

hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('show');
    hamburger.classList.toggle('open');
});

// Close sidebar when clicking outside on small screens
content.addEventListener('click', () => {
    if (window.innerWidth <= 768 && sidebar.classList.contains('show')) {
        sidebar.classList.remove('show');
        hamburger.classList.remove('open');
    }
});

// Function to show selected content section
function showContent(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Show the selected section
    const selected = document.getElementById(sectionId);
    if (selected) {
        selected.classList.add('active');

        // Close sidebar on small screens
        if (window.innerWidth <= 768) {
            sidebar.classList.remove('show');
            hamburger.classList.remove('open');
        }

        // Accessibility focus
        selected.focus();
    }
}

// Initialize with first section shown
document.addEventListener('DOMContentLoaded', () => {
    showContent('section1');
});
