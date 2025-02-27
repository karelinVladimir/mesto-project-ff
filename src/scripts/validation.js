// @todo: Валидация профиля
const formElement =  document.querySelector('.popup__form')
const inputElement = formElement.querySelector(".popup__input");

console.log(formElement.id);
const formError = formElement.querySelector(`${formElement.id}-error`);


const showInputError = (element) => {
  element.classList.add("form__input_type_error");
  formError.classList.add("popup__input-erorr-active");
};

const hideInputError = (element) => {
  element.classList.remove("form__input_type_error");
  formError.classList.remove("popup__input-error-active");

};

const isValid = () => {
  if (!inputElement.validity.valid) {
    showInputError(inputElement);
  } else {
    hideInputError(inputElement);
  }
};

nameInput.addEventListener("input", isValid);
