// script.js

// 1. Event Handling & Interactive Features
// property search. When the user clicks the "Search" button,
// the text changes to show a search result.
const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

searchBtn.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query === '') {
        searchResults.textContent = "Please enter a location to search.";
    } else {
        searchResults.textContent = `Displaying properties in: "${query}"...`;
    }
});

// Rental Price Calculator
//calculates the total rental price based on the monthly rent and number of months.
const monthlyRentInput = document.getElementById('monthly-rent');
const rentalMonthsInput = document.getElementById('rental-months');
const calculateBtn = document.getElementById('calculate-btn');
const totalPriceParagraph = document.getElementById('total-price');

calculateBtn.addEventListener('click', () => {
    const monthlyRent = parseFloat(monthlyRentInput.value) || 0;
    const rentalMonths = parseFloat(rentalMonthsInput.value) || 0;
    
    // Ensure inputs are positive numbers
    if (monthlyRent > 0 && rentalMonths > 0) {
        const total = monthlyRent * rentalMonths;
        totalPriceParagraph.textContent = `Total Price: $${total.toFixed(2)}`;
    } else {
        totalPriceParagraph.textContent = `Please enter valid numbers.`;
    }
});


// --- 2. Custom Form Validation ---

//  handles the form submission and validates each field
const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const inquirySelect = document.getElementById('inquiry');
const messageInput = document.getElementById('message');

const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const inquiryError = document.getElementById('inquiry-error');
const messageError = document.getElementById('message-error');

// Function to validate email format using a regular expression
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

contactForm.addEventListener('submit', (event) => {
    // Prevent the form from submitting normally
    event.preventDefault();

    // Reset all previous error messages
    nameError.textContent = '';
    emailError.textContent = '';
    inquiryError.textContent = '';
    messageError.textContent = '';

    // A flag to check if the form is valid
    let isValid = true;

    // Validate Name field
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Full name is required.';
        isValid = false;
    }

    // Validate Email field
    if (emailInput.value.trim() === '') {
        emailError.textContent = 'Email is required.';
        isValid = false;
    } else if (!validateEmail(emailInput.value.trim())) {
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    // Validate Inquiry Type field
    if (inquirySelect.value === '') {
        inquiryError.textContent = 'Please select an inquiry type.';
        isValid = false;
    }

    // Validate Message field
    if (messageInput.value.trim() === '') {
        messageError.textContent = 'A message is required.';
        isValid = false;
    }

    // If all fields are valid, submit
    if (isValid) {
        alert('Thank you! Your inquiry has been sent to the Nyumba team.');
        contactForm.reset(); // Clear the form
    }
});
