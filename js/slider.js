const sliderContainer = document.querySelector(".slider-list");
const sliderControls = document.querySelector(".slider-controls");
const arrowLeft = document.querySelector(".button-left");
const arrowRight = document.querySelector(".button-right");

let slide = sliderContainer.querySelector('.slide-current');
let radioSlide = sliderControls.querySelector('button.current');

arrowLeft.addEventListener("click", function (evt) {
  evt.preventDefault();
  let newSlide = slide.previousElementSibling;
  if (newSlide == null) {
    return;
  }
  slide.classList.remove("slide-current");
  slide = newSlide;
  slide.classList.add("slide-current");
  radioSlide.classList.remove("current");
  radioSlide = radioSlide.previousElementSibling;
  radioSlide.classList.add("current");
});

arrowRight.addEventListener("click", function (evt) {
  evt.preventDefault();
  let newSlide = slide.nextElementSibling;
  if (newSlide == null) {
    return;
  }
  slide.classList.remove("slide-current");
  slide = newSlide;
  slide.classList.add("slide-current");
  radioSlide.classList.remove("current");
  radioSlide = radioSlide.nextElementSibling;
  radioSlide.classList.add("current")
});

arrowLeft.addEventListener("click", function (evt) {
  evt.preventDefault();
  let newSlide = slide.previousElementSibling;
  if (newSlide == null) {
    return;
  }
  slide.classList.remove("slide-current");
  slide = newSlide;
  slide.classList.add("slide-current");
  radioSlide.classList.remove("current");
  radioSlide = radioSlide.previousElementSibling;
  radioSlide.classList.add("current");
});
