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
  }
  else {
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
