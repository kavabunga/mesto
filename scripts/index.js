let nameElement = document.querySelector('.profile__name');
let occupationElement = document.querySelector('.profile__occupation');
let popupElement = document.querySelector('.popup');
let formElement = document.querySelector('.form');
let nameInput = document.querySelector('#input-name');
let occupationInput = document.querySelector('#input-occupation');
let profileEditButton = document.querySelector('.profile__edit-button');
let formSubmitButton = document.querySelector('.form__submit-button');
let popupCloseButton = document.querySelector('.popup__close-button');

let popupToggleClass = 'popup_opened';

let name = nameElement.textContent;
let occupation = occupationElement.textContent;

occupationInput.placeholder = occupation;
nameInput.placeholder = name;

function popupToggle() {
  let elt = popupElement;
  let toggleClass = popupToggleClass;
  if (!!elt.classList.contains(toggleClass)) {
    elt.classList.remove(toggleClass);
  } else {
    elt.classList.add(toggleClass);
  }
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    name = nameInput.value;
    occupation = occupationInput.value;
    nameElement.textContent = name;
    occupationElement.textContent = occupation;
}

profileEditButton.addEventListener('click', popupToggle);
popupCloseButton.addEventListener('click', popupToggle);
formElement.addEventListener('submit', formSubmitHandler);
