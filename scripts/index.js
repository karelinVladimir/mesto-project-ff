// @todo: Темплейт карточки
   const cardTemplate = document.querySelector('#card-template').content;
// @todo: DOM узлы
   const placesList = document.querySelector('.places__list');
// @todo: Функция создания карточки
   function createCard (element) {
      const addCard = cardTemplate.querySelector('.card').cloneNode(true);
      const closeButton = addCard.querySelector('.card__delete-button');
      addCard.querySelector('.card__image').src = element.link;
      addCard.querySelector('.card__image').alt = element.name;
      addCard.querySelector('.card__title').textContent = element.name;
      closeButton.addEventListener('click', closeCard);
      return addCard;
   }
// @todo: Функция удаления карточки
   function closeCard (evt) {
      const deleteCard = evt.target.closest('.card');
         deleteCard.remove();
   }

// @todo: Вывести карточки на страницу
      function cards (item) {
         item.forEach(element => {
            const cardElement = createCard(element);
            placesList.append(cardElement);
         });  
      }
      
      cards(initialCards)






 