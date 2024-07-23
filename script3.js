document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple form validation
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    // You can handle form submission here, e.g., send an email or save the data
    alert("Thank you for your message!");

    // Clear the form
    document.getElementById('contactForm').reset();
});
