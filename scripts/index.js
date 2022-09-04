let nameElement = document.querySelector('.profile__name');
let occupationElement = document.querySelector('.profile__occupation');
let popupElement = document.querySelector('.popup');
let formElement = document.querySelector('.form');
let nameInput = document.querySelector('.form__input_name_name');
let occupationInput = document.querySelector('.form__input_name_occupation');
let profileEditButton = document.querySelector('.profile__edit-button');
let popupCloseButton = document.querySelector('.popup__close-button');

let popupToggleClass = 'popup_opened';

function popupToggle() {
  if (popupElement.classList.contains(popupToggleClass)) {
    popupElement.classList.remove(popupToggleClass);
  } else {
    nameInput.value = nameElement.textContent;
    occupationInput.value = occupationElement.textContent;
    popupElement.classList.add(popupToggleClass);
  }
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    nameElement.textContent = nameInput.value;
    occupationElement.textContent = occupationInput.value;
    popupToggle();
}

profileEditButton.addEventListener('click', popupToggle);
popupCloseButton.addEventListener('click', popupToggle);
formElement.addEventListener('submit', formSubmitHandler);
