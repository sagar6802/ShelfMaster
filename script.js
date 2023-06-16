// script.js

// Function to handle adding a book to the checkout page
function addToCart(bookName) {
  // Retrieve the cart items from localStorage
  let cartItems = localStorage.getItem('cartItems');

  // Check if there are any existing cart items
  if (cartItems) {
    // Parse the cart items from JSON format to an array
    cartItems = JSON.parse(cartItems);
  } else {
    // If no existing cart items, initialize an empty array
    cartItems = [];
  }

  // Add the selected book to the cart items array
  cartItems.push(bookName);

  // Convert the cart items array back to JSON format
  const cartItemsJson = JSON.stringify(cartItems);

  // Store the updated cart items in localStorage
  localStorage.setItem('cartItems', cartItemsJson);
}

// Function to handle the button click event
function handleAddToCartClick(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the book name from the clicked button's parent container
  const bookName = event.target.parentNode.querySelector('h3').textContent;

  // Call the addToCart function to add the book to the checkout page
  addToCart(bookName);

  // Redirect the user to the checkout page
  window.location.href = 'checkout.html';
}

// Get all the "Add to cart" buttons
const addToCartButtons = document.querySelectorAll('.button');

// Add a click event listener to each "Add to cart" button
addToCartButtons.forEach(function(button) {
  button.addEventListener('click', handleAddToCartClick);
});
