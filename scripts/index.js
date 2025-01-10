// @todo: Темплейт карточки
   const cardTemplate = document.querySelector('#card-template').content;
// @todo: DOM узлы
   const placesItem = document.querySelector('.places__item');
// @todo: Функция создания карточки
   function createCard (element) {
      const addCard = cardTemplate.querySelector('.card').cloneNode(true);
      addCard.querySelector('.card__image').src = element.link;
      addCard.querySelector('.card__image').alt = element.name;
      addCard.querySelector('.card__title').textContent = element.name;
      return createCard;
   }
// @todo: Функция удаления карточки


// @todo: Вывести карточки на страницу
      function cards (item) {
         item.forEach(element => {
            const cardElement = createCard(element);
            placesItem.append(cardElement);
         });  
      }
      
      cards(initialCards)



            // const closeButton = document.querySelector('.card__delete-button');
      // closeButton.addEventListener('click', function (){
      //    const deleteCard = closeButton.closest('.card');
      //    deleteCard.remove();
      // });


 