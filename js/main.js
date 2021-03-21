/* Открыть окно с сообщением о добавлении товара в корзину */

const cartLinks = document.querySelectorAll(".button--icon-start");
const cartPopup = document.querySelector(".modal-book");
const cartClose = cartPopup.querySelector(".modal-close");
const cartContinue = cartPopup.querySelector(".modal-button-continue");

cartLinks.forEach(function (elem) {
  elem.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.add("modal-show");
  });
});

cartClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal-show");
});

cartContinue.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (cartPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      cartPopup.classList.remove("modal-show");
    }
  }
});

/* Напишите нам */

const letterLink = document.querySelector(".letter");
const letterPopup = document.querySelector(".modal-letter");
const letterClose = letterPopup.querySelector(".modal-close");
const letterForm = letterPopup.querySelector(".letter-form");
const letterName = letterPopup.querySelector(".input-name");
const letterEmail = letterPopup.querySelector(".input-e-mail");
const letterText = letterPopup.querySelector(".input-textarea");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

letterLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  letterPopup.classList.add("modal-show");

  if (storage) {
    letterName.value = storage;
    letterEmail.focus();
  } else {
    letterName.focus();
  }
});

letterClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  letterPopup.classList.remove("modal-show");
  letterPopup.classList.remove("modal-error");
});

letterForm.addEventListener("submit", function (evt) {
  if (!letterName.value || !letterEmail.value || !letterText.value) {
    evt.preventDefault();
    letterPopup.classList.remove("modal-error");
    letterPopup.offsetWidth = letterPopup.offsetWidth;
    letterPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", letterName.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (letterPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      letterPopup.classList.remove("modal-show");
      letterPopup.classList.remove("modal-error");
    }
  }
});

/* Карта */

const mapLink = document.querySelector(".map");
const mapPopup = document.querySelector(".modal-map");
const mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});

/* Сервисы слайдер*/

const serviceLinks = document.querySelectorAll(".service-list li a");
const serviceContents = document.querySelectorAll(".service .service-content");

serviceLinks.forEach(function (elem) {
  elem.addEventListener("click", function (evt) {
    evt.preventDefault();
    let listItem = this.parentNode;
    Array.from(listItem.parentElement.children).forEach(function (el) {
      el.classList.remove("checked");
    });
    listItem.classList.add("checked");
    let listItemNumber = getIndexElement(listItem);
    serviceContents.forEach(function (el) {
      el.style.display = "none";
    });
    serviceContents[listItemNumber].style.display = "block";
  });
});

function getIndexElement(elem) {
  return Array.from(elem.parentElement.children).indexOf(elem);
}

/* Слайдер галереи */

const slider = document.querySelector(".gallery-content");

if (slider) {
  let activeSlideIndex = 0;
  const slides = Array.from(slider.querySelectorAll(".slider-item"));
  const dots = Array.from(slider.querySelectorAll(".slider-controls button"));
  const sliderArrowPrev = slider.querySelector(".button-left");
  const sliderArrowNext = slider.querySelector(".button-right");

  const disabledArrow = () => {
    if (Number(activeSlideIndex) === 0) {
      sliderArrowNext.removeAttribute("disabled");
      sliderArrowPrev.setAttribute("disabled", "");
    } else if (Number(activeSlideIndex) === slides.length - 1) {
      sliderArrowPrev.removeAttribute("disabled");
      sliderArrowNext.setAttribute("disabled", "");
    } else {
      sliderArrowPrev.removeAttribute("disabled");
      sliderArrowNext.removeAttribute("disabled");
    }
  };

  disabledArrow();

  const setPrevSlide = () => {
    if (activeSlideIndex > 0) {
      activeSlideIndex--;
      disabledArrow();

      slides[activeSlideIndex + 1].classList.remove("slide-current");
      slides[activeSlideIndex].classList.add("slide-current");
      dots[activeSlideIndex + 1].classList.remove("current");
      dots[activeSlideIndex].classList.add("current");
    }
  };

  const setNextSlide = () => {
    if (activeSlideIndex < slides.length - 1) {
      activeSlideIndex++;
      disabledArrow();

      slides[activeSlideIndex - 1].classList.remove("slide-current");
      slides[activeSlideIndex].classList.add("slide-current");
      dots[activeSlideIndex - 1].classList.remove("current");
      dots[activeSlideIndex].classList.add("current");
    }
  };

  const setSlideByDot = () => {
    disabledArrow();

    slides.forEach((slide) => {
      slide.classList.remove("slide-current");
    });

    dots.forEach((dot) => {
      dot.classList.remove("current");
    });

    slides[activeSlideIndex].classList.add("slide-current");
    dots[activeSlideIndex].classList.add("current");
  };

  const setActiveSlider = (mode) => {
    switch (mode) {
      case "PREV":
        setPrevSlide();
        break;
      case "NEXT":
        setNextSlide();
        break;
      case "DOTS":
        setSlideByDot();
        break;
    }
  };

  sliderArrowPrev.addEventListener("click", () => {
    setActiveSlider("PREV");
  });

  sliderArrowNext.addEventListener("click", () => {
    setActiveSlider("NEXT");
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      activeSlideIndex = dot.dataset.slide;
      setActiveSlider("DOTS");
    });
  });
}
