// Increment for quantity selector
function increment() {
    let quantityInput = document.getElementById('quantity');
    quantityInput.value = parseInt(quantityInput.value) + 1;
}
// Decrement for quantity selector
function decrement() {
    let quantityInput = document.getElementById('quantity');
    if (quantityInput.value > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
    }
}

// $(document).ready(function () {
//     $('.items').slick({
//         infinite: true,
//         lazyLoad: 'ondemand',
//         slidesToShow: 3,
//         slidesToScroll: 3
//     });
// });

// PRICE RANGE SLIDER
window.onload = function () {
    slideMin();
    slideMax();
  };
  
  const minVal = document.querySelector(".min-val");
  const maxVal = document.querySelector(".max-val");
  const priceInputMin = document.querySelector(".min-input");
  const priceInputMax = document.querySelector(".max-input");
  const minTooltip = document.querySelector(".min-tooltip");
  const maxTooltip = document.querySelector(".max-tooltip");
  const minGap = 1500;
  const range = document.querySelector(".slider-track");
  const sliderMinValue = parseInt(minVal.min);
  const sliderMaxValue = parseInt(maxVal.max);
  
  function slideMin() {
    let gap = parseInt(maxVal.value) - parseInt(minVal.value);
  }
  
  function slideMax() {
    let gap = parseInt(maxVal.value) - parseInt(minVal.value);
  }
  
  function setArea() {
    range.style.left = `${
      ((minVal.value - sliderMinValue) / (sliderMaxValue - sliderMinValue)) * 100
    }%`;
  
    range.style.left = (minVal.value / sliderMaxValue) * 100 + "%";
    minTooltip.style.left = (minVal.value / sliderMaxValue) * 100 + "%";
    range.style.right = `${
      100 -
      ((maxVal.value - sliderMinValue) / (sliderMaxValue - sliderMinValue)) * 100
    }%`;
    maxTooltip.style.right = 100 - (maxVal.value / sliderMaxValue) * 100 + "%";
  }
  
  function setMinInput() {
    let minPrice = parseInt(priceInputMin.value);
  }
  
  function setMaxInput() {
    let maxPrice = parseInt(priceInputMax.value);
  }