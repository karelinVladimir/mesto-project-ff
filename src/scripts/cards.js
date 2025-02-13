import {openModal} from "./modal";

const Arkhyz = new URL("https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg", import.meta.url);
const chelyabinskRegion = new URL("https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg", import.meta.url);
const Ivanovo = new URL("https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg", import.meta.url);
const Kamchatka = new URL("https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg", import.meta.url);
const kholmogoryDistrict = new URL("https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg", import.meta.url);
const Baikal = new URL("https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg", import.meta.url);


const initialCards = [
  {
    name: "Архыз",
    link: Arkhyz,
  },
  {
    name: "Челябинская область",
    link: chelyabinskRegion,
  },
  {
    name: "Иваново",
    link: Ivanovo,
  },
  {
    name: "Камчатка",
    link: Kamchatka,
  },
  {
    name: "Холмогорский район",
    link: kholmogoryDistrict,
  },
  {
    name: "Байкал",
    link: Baikal,
  },
];

// @todo: Темплейт карточки

  const cardTemplate = document.querySelector('#card-template').content;
  const placesList = document.querySelector('.places__list');

// @todo: Функция создания карточки

  function createCard (cardInfo,  deleteCardHandler, likeCardHandler, clickImageHandler) {
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

// @todo: Вывести карточки на страницу

  function addCard (item) {
    item.forEach(card => {
      const cards = createCard(card, deleteCard, likeCard, popupImage);
      placesList.append(cards);
    });  
 };

  addCard(initialCards);

// @todo: Функция удаления карточки
     
  function deleteCard(evt) {
    const card = evt.target.closest('.card');
    card.remove();
  };


// @todo: Функция лайка карточки  

  function likeCard (evt) {
      evt.target.classList.toggle('card__like-button_is-active');
  };

// @todo: Функция попап изображения  

  function popupImage (cardImage, cardTitle) {
    const popupTypeImage = document.querySelector('.popup_type_image');
    const popupImageCard = document.querySelector('.popup__image');
    const popupImageTitle = document.querySelector('.popup__caption');
    popupImageCard.src = cardImage.src;
    popupImageCard.alt = cardImage.alt;
    popupImageTitle.textContent = cardTitle.textContent;
    openModal(popupTypeImage);
  };

  
  export {createCard, deleteCard, likeCard, popupImage};








