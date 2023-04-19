    


var images = ["img/del1.jpg","img/11.jpg", "img/12.jpg", "img/13.jpg"];
var currentImageIndex = 0;

function changeSlide(direction) {
  var slideImg = document.getElementById("slide-img");
  slideImg.style.opacity = 0;
  currentImageIndex = currentImageIndex + direction;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  } else if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }
  slideImg.src = images[currentImageIndex];
  setTimeout(function() {
    slideImg.style.opacity = 1;
  }, 0);
}

function nextSlide() {
  changeSlide(1);
}

function prevSlide() {
  changeSlide(-1);
}



const quantityPicker = document.querySelector('.kolvo-picker');
const minusButton = quantityPicker.querySelector('.minus');
const plusButton = quantityPicker.querySelector('.plus');
const inputField = quantityPicker.querySelector('.kolvo-input');
const priceField = document.querySelector('.cost h2');
const totalPriceField = document.querySelector('.total-price');

const pricePerItem = parseInt(priceField.innerText);
let totalItems = parseInt(inputField.value);

minusButton.addEventListener('click', function() {
  const currentValue = parseInt(inputField.value);
  if (currentValue > 1) {
    inputField.value = currentValue - 1;
    totalItems--;
    totalPriceField.innerText = pricePerItem * totalItems;
  }
});

plusButton.addEventListener('click', function() {
  const currentValue = parseInt(inputField.value);
  inputField.value = currentValue + 1;
  totalItems++;
  totalPriceField.innerText = pricePerItem * totalItems;
});
