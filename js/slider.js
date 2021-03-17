const slider = document.querySelector('.gallery-content');

if (slider) {
  let activeSlideIndex = 0;
  const slides = Array.from(slider.querySelectorAll('.slider-item'));
  const dots = Array.from(slider.querySelectorAll('.slider-controls button'));
  const sliderArrowPrev = slider.querySelector('.button-left');
  const sliderArrowNext = slider.querySelector('.button-right');

  const disabledArrow = () => {
    if (Number(activeSlideIndex) === 0) {
      sliderArrowNext.removeAttribute('disabled');
      sliderArrowPrev.setAttribute('disabled', '');
    } else if (Number(activeSlideIndex) === slides.length - 1) {
      sliderArrowPrev.removeAttribute('disabled');
      sliderArrowNext.setAttribute('disabled', '');
    } else {
      sliderArrowPrev.removeAttribute('disabled');
      sliderArrowNext.removeAttribute('disabled');
    }
  };

  disabledArrow();

  const setPrevSlide = () => {
    if (activeSlideIndex > 0) {
      activeSlideIndex--;
      disabledArrow();

      slides[activeSlideIndex + 1].classList.remove('slide-current');
      slides[activeSlideIndex].classList.add('slide-current');
      dots[activeSlideIndex + 1].classList.remove('current');
      dots[activeSlideIndex].classList.add('current');
    }
  }

  const setNextSlide = () => {
    if (activeSlideIndex < slides.length - 1) {
      activeSlideIndex++;
      disabledArrow();

      slides[activeSlideIndex - 1].classList.remove('slide-current');
      slides[activeSlideIndex].classList.add('slide-current');
      dots[activeSlideIndex - 1].classList.remove('current');
      dots[activeSlideIndex].classList.add('current');
    }
  }

  const setSlideByDot = () => {
    disabledArrow();

    slides.forEach((slide) => {
      slide.classList.remove('slide-current')
    });

    dots.forEach((dot) => {
      dot.classList.remove('current');
    });

    slides[activeSlideIndex].classList.add('slide-current');
    dots[activeSlideIndex].classList.add('current');
  }

  const setActiveSlider = (mode) => {
    switch (mode) {
      case 'PREV':
        setPrevSlide();
        break;
      case 'NEXT':
        setNextSlide();
        break;
      case 'DOTS':
        setSlideByDot();
        break;
    }
  };

  sliderArrowPrev.addEventListener('click', () => {
    setActiveSlider('PREV');
  });

  sliderArrowNext.addEventListener('click', () => {
    setActiveSlider('NEXT');
  });

  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      activeSlideIndex = dot.dataset.slide
      setActiveSlider('DOTS');
    });
  })
}
