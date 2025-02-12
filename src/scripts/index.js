import '../pages/index.css';
import {createCard, deleteCard, likeCard} from './cards.js';
import {closeModal, openModal} from './modal.js';

// @todo: DOM узлы
   const profileAddButton = document.querySelector('.profile__add-button');
   const profileEditButton = document.querySelector('.profile__edit-button');
   const popupTypeEdit = document.querySelector('.popup_type_edit');
   const popupTypeNewCard = document.querySelector('.popup_type_new-card');

// открытие попапов

   profileAddButton.addEventListener('click', () => openModal(popupTypeNewCard));
   profileEditButton.addEventListener('click', () => openModal(popupTypeEdit));

// попап, редактирование профиля

   const popupProfile = document.querySelector('.popup_type_edit');
   const formElement = document.forms['edit-profile'];
   const nameInput = formElement.elements.name;
   const jobInput = formElement.elements.description;
   const profileTitle = document.querySelector('.profile__title');
   const profileDescription = document.querySelector('.profile__description');
   const popupCloseButton = document.querySelector('.popup__close');

   function profileInputValue () {
      nameInput.value = profileTitle.textContent;
      jobInput.value = profileDescription.textContent;
   };

   profileInputValue ();

   function handleFormSubmit(evt) {
      evt.preventDefault();
      profileTitle.textContent = nameInput.value;
      profileDescription.textContent = jobInput.value;
      closeModal(popupProfile);
   };

   popupCloseButton.addEventListener('click', () => {
      profileInputValue ();
   });

   formElement.addEventListener('submit', handleFormSubmit);


// попап, добавление карточки

   const popupNewCard = document.querySelector('.popup_type_new-card');
   const placeForm = document.forms['new-place'];


   function popupNewCardSubmit (evt) {
      evt.preventDefault();
      const placeName = placeForm.elements['place-name'];
      const placeLink = placeForm.elements.link;
      const newCard = {
         name: placeName.value,
         link: placeLink.value
      };
      document.querySelector('.places__list').prepend(createCard(newCard, deleteCard, likeCard));
      closeModal(popupNewCard);
      placeForm.reset();
   };

   placeForm.addEventListener('submit', popupNewCardSubmit);














   







 