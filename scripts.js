// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('membership-form');
    const formMessages = document.getElementById('form-messages');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Clear previous messages
        formMessages.textContent = '';

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const dob = document.getElementById('dob').value;
        const address = document.getElementById('address').value;
        const phone = document.getElementById('phone').value;
        const membershipLevel = document.getElementById('membership-level').value;

        // Validate form inputs
        if (name === '' || email === '' || dob === '' || address === '' || phone === '' || membershipLevel === '') {
            formMessages.textContent = 'Please fill out all fields.';
            return;
        }

        if (!/^\d{3}-\d{3}-\d{4}$/.test(phone)) {
            formMessages.textContent = 'Phone number must be in the format 123-456-7890.';
            return;
        }

        // If validation passes, display a success message
        formMessages.textContent = 'Thank you for joining Mike\'s Gym!';
        formMessages.style.color = 'green';

        // Here you can add further functionality like sending the data to a server
    });
});
