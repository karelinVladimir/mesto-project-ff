import '../pages/index.css';
import { createCard, callbacks } from "./cards.js";
import { closeModal, openModal } from './modal.js';
import { initialCards } from './initialCards.js';


// @todo: Карточки

   const placesList = document.querySelector('.places__list');

// @todo: Новые карточки

   const popupNewCard = document.querySelector('.popup_type_new-card');
   const placeForm = document.forms['new-place'];

// @todo: Редактирование профиля

   const popupProfile = document.querySelector('.popup_type_edit');
   const profileForm = document.forms['edit-profile'];
   const nameInput = profileForm.elements.name;
   const jobInput = profileForm.elements.description;
   const profileTitle = document.querySelector('.profile__title');
   const profileDescription = document.querySelector('.profile__description');
   const profileCloseButton = document.querySelector('.popup__close');

// @todo: Открытие попапов

   const profileAddButton = document.querySelector('.profile__add-button');
   const profileEditButton = document.querySelector('.profile__edit-button');
   const popupTypeEdit = document.querySelector('.popup_type_edit');
   const popupTypeNewCard = document.querySelector('.popup_type_new-card');

// @todo: Функция карточки на страницу

   function addCard (item) {
      item.forEach(card => {
      const cards = createCard(card, callbacks);
      placesList.append(cards);
      });  
   };

   addCard(initialCards);

// Открытие попапов

   profileAddButton.addEventListener('click', () => openModal(popupTypeNewCard));
   profileEditButton.addEventListener('click', () => openModal(popupTypeEdit), fillProfileInputs());

// попап, редактирование профиля

   function fillProfileInputs () {
      nameInput.value = profileTitle.textContent;
      jobInput.value = profileDescription.textContent;
   };

   function handleProfileFormSubmit(evt) {
      evt.preventDefault();
      profileTitle.textContent = nameInput.value;
      profileDescription.textContent = jobInput.value;
      closeModal(popupProfile);
   };

// Возможно, я неправильно реализовал ТЗ.
// Если пользователь закрывает модальное окно нажав на крестик, то введённые значения не сохраняются

   profileCloseButton.addEventListener('click', () => {
      fillProfileInputs ();
   });

   profileForm.addEventListener('submit', handleProfileFormSubmit);

// Функция, добавление карточки

   function renderCard (evt, item, method = 'prepend') {
      evt.preventDefault();
      const placeName = placeForm.elements['place-name'];
      const placeLink = placeForm.elements.link;
      item = {
         name: placeName.value,
         link: placeLink.value
      };
      const cardElement = createCard(item, callbacks);
      placesList[method](cardElement);
      closeModal(popupNewCard);
      placeForm.reset();
   };

   placeForm.addEventListener('submit', renderCard);
















   







 