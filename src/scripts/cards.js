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

// @todo: Функция создания карточки
   function createCard (element) {
      const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
      const deleteButton = cardElement.querySelector('.card__delete-button');
      const cardImage = cardElement.querySelector('.card__image');
      cardElement.querySelector('.card__title').textContent = element.name;
      cardImage.src = element.link;
      cardImage.alt = element.name;
      deleteButton.addEventListener('click', () => deleteCard(cardElement));
      return cardElement;
   }
// @todo: Функция удаления карточки

   function deleteCard(card) {
      card.remove();
   } 


   export {initialCards, createCard};






