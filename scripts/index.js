let nameElement = document.querySelector('.profile__name');
let occupationElement = document.querySelector('.profile__occupation');
let popupElement = document.querySelector('.popup');
let formElement = document.querySelector('.form');
let nameInput = document.querySelector('#input-name');
let occupationInput = document.querySelector('#input-occupation');
let profileEditButton = document.querySelector('.profile__edit-button');
let popupCloseButton = document.querySelector('.popup__close-button');

let popupToggleClass = 'popup_opened';

let user = nameElement.textContent;
let occupation = occupationElement.textContent;

function popupToggle() {
  let toggleClass = popupToggleClass;
  if (!!popupElement.classList.contains(toggleClass)) {
    popupElement.classList.remove(toggleClass);
  } else {
    nameInput.value = user;
    occupationInput.value = occupation;
    popupElement.classList.add(toggleClass);
  }
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    user = nameInput.value;
    occupation = occupationInput.value;
    nameElement.textContent = user;
    occupationElement.textContent = occupation;
    popupToggle();
}

profileEditButton.addEventListener('click', popupToggle);
popupCloseButton.addEventListener('click', popupToggle);
formElement.addEventListener('submit', formSubmitHandler);
