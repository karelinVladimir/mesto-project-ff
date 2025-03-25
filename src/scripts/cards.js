// @todo: Темплейт карточки

import { deleteCardServer, likeCardServer } from "./api";

const cardTemplate = document.querySelector("#card-template").content;

// @todo: Функция создания карточки

function createCard(
  cardInfo, userId,
  { deleteCardHandler, likeCardHandler, clickImageHandler }
) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const deleteButton = cardElement.querySelector(".card__delete-button");
  const likeButton = cardElement.querySelector(".card__like-button");
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const likeCount = cardElement.querySelector(".card__like-count");
  const isLiked = cardInfo.likes.some((user) => user._id === userId);
  if (isLiked) {
    likeButton.classList.add("card__like-button_is-active");
  }
  const userCardId = cardInfo.owner._id === userId;
  if (userCardId) {
    deleteButton.classList.remove("card__delete-button_inactive");
    deleteButton.addEventListener("click", () => deleteCardHandler(cardInfo._id, cardElement));
  } else {
    deleteButton.classList.add("card__delete-button_inactive");
  };
  cardTitle.textContent = cardInfo.name;
  cardImage.src = cardInfo.link;
  cardImage.alt = cardInfo.name; 
  likeCount.textContent = cardInfo.likes.length;
  likeButton.addEventListener("click", () => likeCardHandler(cardInfo._id, likeButton, likeCount));
  cardImage.addEventListener("click", () =>
    clickImageHandler(cardImage, cardTitle)
  );

  return cardElement;
}

const callbacks = {
  deleteCardHandler: deleteCard,
  likeCardHandler: likeCard,
  clickImageHandler: null,
};

// @todo: Функция удаления карточки

function deleteCard(cardId, cardElement) {
  deleteCardServer(cardId)
    .then(() => {
      cardElement.remove();
    })
    .catch((err) => {
      console.error("Ошибка", err);
    });
}

// @todo: Функция лайка карточки

function likeCard(cardId, likeButton, likeCount) {
  const isLiked = likeButton.classList.contains("card__like-button_is-active");
  likeCardServer(cardId, isLiked)
  .then((result) => {
    likeCount.textContent = result.likes.length;
    likeButton.classList.toggle("card__like-button_is-active");
  })
  .catch((err) => {
    console.error("Ошибка", err);
  });
}

export { createCard, callbacks };
