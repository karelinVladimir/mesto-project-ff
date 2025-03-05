import "../pages/index.css";
import { createCard, callbacks } from "./cards.js";
import { closeModal, openModal } from "./modal.js";
import { initialCards } from "./initialCards.js";
callbacks.clickImageHandler = openImagePopup;
import { enableValidation, clearValidation } from "./validation.js";

// @todo: Карточки

const placesList = document.querySelector(".places__list");

// @todo: Новые карточки

const popupNewCard = document.querySelector(".popup_type_new-card");
const placeForm = document.forms["new-place"];

// @todo: Открытие попапов

const profileAddButton = document.querySelector(".profile__add-button");
const profileEditButton = document.querySelector(".profile__edit-button");
const popupTypeEdit = document.querySelector(".popup_type_edit");
const popupTypeNewCard = document.querySelector(".popup_type_new-card");

// @todo: Редактирование профиля

const popupProfile = document.querySelector(".popup_type_edit");
const profileForm = document.forms["edit-profile"];
const nameInput = profileForm.elements.name;
const jobInput = profileForm.elements.description;
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

// @todo: Попап изображения

const popupTypeImage = document.querySelector(".popup_type_image");
const popupImageCard = document.querySelector(".popup__image");
const popupImageTitle = document.querySelector(".popup__caption");

// @todo: Функция карточки на страницу

function renderCard(item, method = "prepend") {
  const cardElement = createCard(item, callbacks);
  placesList[method](cardElement);
}

function addCards(items) {
  items.forEach((card) => {
    renderCard(card, "append");
  });
}

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const placeName = placeForm.elements["place-name"];
  const placeLink = placeForm.elements.link;
  const item = {
    name: placeName.value,
    link: placeLink.value,
  };
  renderCard(item);
  closeModal(popupNewCard);
  placeForm.reset();
  clearValidation(placeForm, validationConfig);
}

placeForm.addEventListener("submit", handleCardFormSubmit);

addCards(initialCards);

// Открытие попапов

profileAddButton.addEventListener("click", () => openModal(popupTypeNewCard));
profileEditButton.addEventListener(
  "click",
  () => openModal(popupTypeEdit),
  fillProfileInputs(), 
);

// попап, редактирование профиля

function fillProfileInputs() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closeModal(popupProfile);
}

profileForm.addEventListener("submit", handleProfileFormSubmit);

// @todo: Функция. открытие попапа с картинкой

function openImagePopup(cardImage, cardTitle) {
  popupImageCard.src = cardImage.src;
  popupImageCard.alt = cardImage.alt;
  popupImageTitle.textContent = cardTitle.textContent;
  openModal(popupTypeImage);
}

// @todo: Валидация

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};


enableValidation(validationConfig); 


// import { getInitialCards } from "./api.js";

// getInitialCards()
//   .then((result) => {
//     // обрабатываем результат
//   })
//   .catch((err) => {
//     console.log(err); // выводим ошибку в консоль
//   }); 











