// Section Navigation functionality
let currentSection = 0;
const sections = [];

document.addEventListener("DOMContentLoaded", function() {
    // Get all sections
    const allSections = document.querySelectorAll("section");
    allSections.forEach(section => sections.push(section));
    
    // Show only the first section initially
    showSection(0);
    
    // Add click handlers to navigation links
    const navLinks = document.querySelectorAll("header nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetIndex = sections.findIndex(section => section.id === targetId);
            if (targetIndex !== -1) {
                showSection(targetIndex);
            }
        });
    });
});

function showSection(index) {
    // Hide all sections
    sections.forEach(section => {
        section.style.display = "none";
    });
    
    // Show the selected section
    if (index >= 0 && index < sections.length) {
        sections[index].style.display = "flex";
        currentSection = index;
        
        // Scroll to top smoothly
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
}