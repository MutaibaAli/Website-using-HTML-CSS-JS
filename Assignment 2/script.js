
window.onload = function() {
    document.querySelector('#home h1').innerHTML = "Welcome, Discover the Finest Coffee at Bean Delight!";
};
document.addEventListener('DOMContentLoaded', function() {
    
    const contactForm = document.querySelector('.contact-form-container form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        if (name === '' || email === '' || message === '') {
            alert('Please fill out all fields.'); 
            return; 
        }
        console.log('Form Submitted:', { name, email, message });
        alert('Your message has been sent successfully! We will get back to you shortly.');

       
        contactForm.reset();
    });
});




