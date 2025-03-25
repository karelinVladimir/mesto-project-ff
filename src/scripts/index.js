import "../pages/index.css";
import { createCard, callbacks } from "./cards.js";
import { closeModal, openModal } from "./modal.js";
callbacks.clickImageHandler = openImagePopup;
import { enableValidation, clearValidation } from "./validation.js";
import {
  getInitialCards,
  getRenderCard,
  getUserData,
  editProfile,
  editAvatar,
} from "./api.js";


// @todo: Кнопки Submit

const submitButtonAvatar = document.querySelector(".popup__button-avatar");
const submitButtonProfile = document.querySelector(".popup__button-profile");
const submitButtonPlace = document.querySelector(".popup__button-place");

// @todo: Карточки

const placesList = document.querySelector(".places__list");
let userId;

// @todo: Новые карточки

const popupNewCard = document.querySelector(".popup_type_new-card");
const placeForm = document.forms["new-place"];

// @todo: Открытие попапов

const profileAddButton = document.querySelector(".profile__add-button");
const profileEditButton = document.querySelector(".profile__edit-button");
const profileAvatarButton = document.querySelector(".profile__avatar-button");
const popupTypeEdit = document.querySelector(".popup_type_edit");
const popupTypeNewCard = document.querySelector(".popup_type_new-card");
const popupTypeAvatar = document.querySelector(".popup_type_avatar");

// @todo: Аватар

const popupAvatar = document.querySelector(".popup_type_avatar");
const avatarForm = document.forms["edit-avatar"]
const avatarInput = avatarForm.elements.link;
const avatarImage = document.querySelector(".profile__image");

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

// @todo: Добавление карточки на страницу

function renderCard(item, userId, method = "prepend") {
  const cardElement = createCard(item, userId, callbacks);
  placesList[method](cardElement);
}

Promise.all([getInitialCards(), getUserData()])
  .then(([cards, userData]) => { 
    userId = userData._id;
    cards.forEach(card => {
      renderCard(card, userId, "append");
    });
    profileTitle.textContent = userData.name;
    profileDescription.textContent = userData.about;
    avatarImage.style.backgroundImage = `url('${userData.avatar}')`;
  })
  .catch((err) => {
    console.error("Ошибка", err);
  });

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const placeName = placeForm.elements["place-name"].value;
  const placeLink = placeForm.elements.link.value;
  setButtonLoading(submitButtonPlace, true);
  getRenderCard(placeName, placeLink)
    .then((newCard) => {
      renderCard(newCard, userId);
      placeForm.reset();
      clearValidation(placeForm, validationConfig);
      closeModal(popupNewCard);
    })
    .catch((err) => {
      console.error("Ошибка", err);
    })
    .finally(() => {
      setButtonLoading(submitButtonPlace, false);
    });
};

placeForm.addEventListener("submit", handleCardFormSubmit);

// Открытие попапов

profileAddButton.addEventListener("click", () => openModal(popupTypeNewCard));
profileAvatarButton.addEventListener("click", () => openModal(popupTypeAvatar));
profileEditButton.addEventListener(
  "click",
  () => {
    openModal(popupTypeEdit);
    fillProfileInputs();
    clearValidation(profileForm, validationConfig);
  }
);

// попап, замена аватара

function updateAvatar(updateImage) {
  avatarImage.style.backgroundImage = `url('${updateImage}')`;
}

function handleAvatarFormSubmit(evt) {
  evt.preventDefault();
  const avatarLink = avatarInput.value;
  setButtonLoading(submitButtonAvatar, true);
  editAvatar(avatarLink)
  .then(() => {
    updateAvatar(avatarLink);
    closeModal(popupAvatar);
    avatarForm.reset();
    clearValidation(avatarForm, validationConfig);
  })
  .catch((err) => {
    console.error("Ошибка", err);
  })
  .finally(() => {
    setButtonLoading(submitButtonAvatar, false);
  })
}

avatarForm.addEventListener("submit", handleAvatarFormSubmit);

// попап, редактирование профиля

function updateProfile(userData) {
  profileTitle.textContent = userData.name;
  profileDescription.textContent = userData.about;
}

function fillProfileInputs() {
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileDescription.textContent;
  };

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  setButtonLoading(submitButtonProfile, true);
  editProfile(nameInput.value, jobInput.value)
    .then((result) => {
      updateProfile(result);
      closeModal(popupProfile);
    })
    .catch((err) => {
      console.error("Ошибка", err);
    })
    .finally(() => {
      setButtonLoading(submitButtonProfile, false);
    });
};


profileForm.addEventListener("submit", handleProfileFormSubmit);

// @todo: Функция. открытие попапа с картинкой

function openImagePopup(cardImage, cardTitle) {
  popupImageCard.src = cardImage.src;
  popupImageCard.alt = cardImage.alt;
  popupImageTitle.textContent = cardTitle.textContent;
  openModal(popupTypeImage);
};

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


// // @todo: Улучшенный UX форм

function setButtonLoading (submitButton, isLoading) {
  if (isLoading) {
    submitButton.textContent = "Сохранение...";
    submitButton.disabled = true;
  } 
  else {
    submitButton.textContent = "Сохранить";
    submitButton.disabled = false;
  }
};














