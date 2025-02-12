
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

  function createCard (cardInfo,  deleteCardHandler, likeCardHandler) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const deleteButton = cardElement.querySelector('.card__delete-button');
    const likeButton = cardElement.querySelector('.card__like-button');
    const cardImage = cardElement.querySelector('.card__image');
    cardElement.querySelector('.card__title').textContent = cardInfo.name;
    cardImage.src = cardInfo.link;
    cardImage.alt = cardInfo.name;
    deleteButton.addEventListener('click', deleteCardHandler);
    likeButton.addEventListener('click', likeCardHandler);
    return cardElement;
  };

// @todo: Вывести карточки на страницу

  function addCard (item) {
    item.forEach(card => {
      const cards = createCard(card, deleteCard, likeCard);
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

  
  export {createCard, deleteCard, likeCard};








