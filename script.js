

function addToCart(bookName) {
 
  let cartItems = localStorage.getItem('cartItems');

  
  if (cartItems) {
   
    cartItems = JSON.parse(cartItems);
  } else {
   
    cartItems = [];
  }

  
  cartItems.push(bookName);

  
  const cartItemsJson = JSON.stringify(cartItems);

 
  localStorage.setItem('cartItems', cartItemsJson);
}


function handleAddToCartClick(event) {
 
  event.preventDefault();


  const bookName = event.target.parentNode.querySelector('h3').textContent;

  
  addToCart(bookName);

 
  window.location.href = 'checkout.html';
}


const addToCartButtons = document.querySelectorAll('.button');


addToCartButtons.forEach(function(button) {
  button.addEventListener('click', handleAddToCartClick);
});
