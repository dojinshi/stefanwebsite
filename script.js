document.addEventListener("DOMContentLoaded", function () {
    // Initialize EmailJS
    emailjs.init("FE8pvQQgKCNZf51Y7"); // Replace with your actual public key

    // Form Submission Handling
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents form from refreshing

        // Send form data through EmailJS
        emailjs.sendForm("service_6sofwtw", "template_f6hqdgi", this)
            .then(function (response) {
                console.log("SUCCESS!", response.status, response.text);
                document.getElementById("status").innerText = "Message sent successfully!";
                document.getElementById("contact-form").reset();
            }, function (error) {
                console.log("FAILED...", error);
                document.getElementById("status").innerText = "Failed to send message. Please try again.";
            });
    });
});
function showContent(tabId) {
    // Get all content sections
    const sections = document.querySelectorAll('.content');
    
    // Hide all sections
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    const selectedSection = document.getElementById(tabId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

// Show the "about" section by default when the page loads
document.addEventListener('DOMContentLoaded', function() {
    showContent('about');
});


// shows shop.html
document.addEventListener("DOMContentLoaded", function() {
    const shopSection = document.getElementById("shop");

    if (window.location.pathname.includes("shop.html")) {
        shopSection.style.display = "block";
    }
});