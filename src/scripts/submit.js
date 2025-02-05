// Находим форму в DOM
const formElement = document.forms.editprofile;
// Находим поля формы в DOM
const nameInput = document.forms.editprofile.name;
const jobInput = document.forms.editprofile.description;

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit(evt) {
  evt.preventDefault();
  const nameInputValue = nameInput.value;
  const jobInputValue = jobInput.value;
  // Получите значение полей jobInput и nameInput из свойства value
  const profileTitle = document.querySelector(".profile__title");
  const profileDescription = document.querySelector(".profile__description");
  // Выберите элементы, куда должны быть вставлены значения полей
   profileTitle.textContent = nameInputValue.value;
   profileDescription.textContent = jobInputValue.value;
  // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
   formElement.addEventListener("submit", handleFormSubmit);

export {formElement, handleFormSubmit};
