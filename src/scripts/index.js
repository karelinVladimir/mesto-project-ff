import '../pages/index.css';
import {initialCards, createCard} from "./cards.js";
import {closeModal, openModal} from './modal.js';
import {formElement, handleFormSubmit} from "./submit.js";

// @todo: DOM узлы
   const placesList = document.querySelector('.places__list');
   const profileAddButton = document.querySelector(".profile__add-button");
   const profileEditButton = document.querySelector(".profile__edit-button");
   const popupTypeEdit = document.querySelector(".popup_type_edit");
   const popupTypeNewCard = document.querySelector(".popup_type_new-card");


// @todo: Вывести карточки на страницу
   function addCard (item) {
      item.forEach(element => {
         const cards = createCard(element);
         placesList.append(cards);
      });  
   }
   
   addCard(initialCards)

   profileAddButton.addEventListener("click", () => openModal(popupTypeNewCard));
   profileEditButton.addEventListener("click", () => openModal(popupTypeEdit));







   







 