function openModal(element) {
  element.classList.add("popup_is-opened");
  document.addEventListener("keydown", closePopupEsc);
  window.addEventListener("click", closePopupBg);
  document.addEventListener("click", closePopupButton);
}

function closeModal(element) {
  element.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", closePopupEsc);
  window.removeEventListener("click", closePopupBg);
  document.removeEventListener("click", closePopupButton);
}

function closePopupButton(evt) {
  if (evt.target.classList.contains("popup__close")) {
    const popup = evt.target.closest(".popup");
    closeModal(popup);
  }
}

function closePopupBg(evt) {
  if (evt.target.classList.contains("popup")) {
    closeModal(evt.target);
  }
}

function closePopupEsc(evt) {
  if (evt.key === "Escape") {
    const popup = document.querySelector(".popup_is-opened");
    closeModal(popup);
  }
}

export { openModal, closeModal };
