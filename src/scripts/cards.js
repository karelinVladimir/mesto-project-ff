// @todo: Темплейт карточки

const cardTemplate = document.querySelector("#card-template").content;

// @todo: Функция создания карточки

function createCard(
  cardInfo,
  { deleteCardHandler, likeCardHandler, clickImageHandler }
) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const deleteButton = cardElement.querySelector(".card__delete-button");
  const likeButton = cardElement.querySelector(".card__like-button");
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const likeCount = cardElement.querySelector(".card__like-count");
  cardTitle.textContent = cardInfo.name;
  cardImage.src = cardInfo.link;
  cardImage.alt = cardInfo.name;
  likeCount.textContent = cardInfo.likes.length;
  deleteButton.addEventListener("click", deleteCardHandler);
  likeButton.addEventListener("click", likeCardHandler);
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

function deleteCard(evt) {
  const card = evt.target.closest(".card");
  card.remove();
}

// @todo: Функция лайка карточки

function likeCard(evt) {
  evt.target.classList.toggle("card__like-button_is-active");
  
}

export { createCard, callbacks };
