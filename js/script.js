 // Increment for quantity selector
 function increment(id) {
  let quantityInput = document.getElementById(id);
  quantityInput.value = parseInt(quantityInput.value) + 1;
}

// Decrement for quantity selector
function decrement(id) {
  let quantityInput = document.getElementById(id);
  if (quantityInput.value > 1) {
      quantityInput.value = parseInt(quantityInput.value) - 1;
  }
}