// const popup = document.querySelector('.popup');
const popupClose = document.querySelectorAll('.popup__close');


const profileAddButton = document.querySelector('.profile__add-button');
const profileEditButton = document.querySelector('.profile__edit-button');


const popupTypeEdit = document.querySelector('.popup_type_edit');
const popupTypeNewCard = document.querySelector('.popup_type_new-card');


function openPopup (element) {
   element.classList.add('popup_is-opened');
};


function closePopup(element) {
   element.classList.remove('popup_is-opened');
};


profileAddButton.addEventListener('click', () => openPopup(popupTypeNewCard));
profileEditButton.addEventListener('click', () => openPopup(popupTypeEdit));


popupClose.forEach(element => {
   element.addEventListener('click', () => {
      const closeButton = element.closest('.popup');
      closePopup(closeButton);
   });
});


window.addEventListener('click', (evt) => {
   if (evt.target.classList.contains('popup')) {
      closePopup(evt.target);
   };
});


document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    const esc = document.querySelector(".popup_is-opened");
    closePopup(esc);
  }
});


















