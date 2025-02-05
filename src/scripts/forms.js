// Находим форму в DOM
const formElement = document.forms['edit-profile'];
// Находим поля формы в DOM
const nameInput = formElement.elements.name;
const jobInput = formElement.elements.description;
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");


nameInput.value = profileTitle.textContent;
jobInput.value = profileDescription.textContent;


// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit(evt) {
  evt.preventDefault();
  // nameInput.value;
  // jobInput.value;
  // Получите значение полей jobInput и nameInput из свойства value

  // Выберите элементы, куда должны быть вставлены значения полей
    profileTitle.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
  // Вставьте новые значения с помощью textContent
    

}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
   


export {formElement, handleFormSubmit};
