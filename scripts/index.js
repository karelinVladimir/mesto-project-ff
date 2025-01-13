// @todo: Темплейт карточки
   const cardTemplate = document.querySelector('#card-template').content;
// @todo: DOM узлы
   const placesList = document.querySelector('.places__list');
// @todo: Функция создания карточки
   function addCard (element) {
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

// @todo: Вывести карточки на страницу
   function cards (item) {
      item.forEach(element => {
         const cards = addCard(element);
         placesList.append(cards);
      });  
   }
   
   cards(initialCards)







 