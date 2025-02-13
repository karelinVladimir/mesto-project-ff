import { openModal } from "./modal";

// @todo: Темплейт карточки

  const cardTemplate = document.querySelector('#card-template').content;

  // @todo: Попап изображения
  const popupTypeImage = document.querySelector('.popup_type_image');
  const popupImageCard = document.querySelector('.popup__image');
  const popupImageTitle = document.querySelector('.popup__caption');

// @todo: Функция создания карточки

  function createCard (cardInfo, {deleteCardHandler, likeCardHandler, clickImageHandler}) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const deleteButton = cardElement.querySelector('.card__delete-button');
    const likeButton = cardElement.querySelector('.card__like-button');
    const cardImage = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__title');
    cardTitle.textContent = cardInfo.name;
    cardImage.src = cardInfo.link;
    cardImage.alt = cardInfo.name;
    deleteButton.addEventListener('click', deleteCardHandler);
    likeButton.addEventListener('click', likeCardHandler);
    cardImage.addEventListener("click", () => clickImageHandler(cardImage, cardTitle));
    return cardElement;
  };

  const callbacks = {
    deleteCardHandler: deleteCard,
    likeCardHandler: likeCard,
    clickImageHandler: openImagePopup
  };

// @todo: Функция удаления карточки
     
  function deleteCard(evt) {
    const card = evt.target.closest('.card');
    card.remove();
  };

// @todo: Функция лайка карточки  

  function likeCard (evt) {
      evt.target.classList.toggle('card__like-button_is-active');
  };

// @todo: Функция. открытие попапа с картинкой  
  
  function openImagePopup (cardImage, cardTitle) {
    popupImageCard.src = cardImage.src;
    popupImageCard.alt = cardImage.alt;
    popupImageTitle.textContent = cardTitle.textContent;
    openModal(popupTypeImage);
  };
  
  export {createCard, callbacks};








