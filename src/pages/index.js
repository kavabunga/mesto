import './index.css';
import { Card } from "../scripts/Card.js";
import { FormValidator } from "../scripts/FormValidator.js";

const nameElement = document.querySelector('.profile__name');
const occupationElement = document.querySelector('.profile__occupation');
const popupProfile = document.querySelector('.popup_type_edit-profile');
const popupAddItem = document.querySelector('.popup_type_add-item');
const popupPreview = document.querySelector('.popup_type_preview');
const popupPreviewImage = popupPreview.querySelector('.popup__image');
const popupPreviewCaption = popupPreview.querySelector('.popup__caption');
const formProfile = document.querySelector('.form_type_edit-profile');
const formAddItem = document.querySelector('.form_type_add-item');
const nameInput = popupProfile.querySelector('.form__input_name_name');
const occupationInput = popupProfile.querySelector('.form__input_name_occupation');
const postNameInput = popupAddItem.querySelector('.form__input_name_name');
const postImageLinkInput = popupAddItem.querySelector('.form__input_name_image-link');
const profileEditButton = document.querySelector('.profile__edit-button');
const postAddButton = document.querySelector('.profile__add-button');
const postSubmitButton = formAddItem.querySelector('.form__submit-button');
const popups = document.querySelectorAll('.popup');
const cardsContainer = document.querySelector('.elements');

const popupToggleClass = 'popup_opened';

const postTemplate = {
  templateSelector: '.card-template',
  elementSelector: '.element',
  imageSelector: '.element__image',
  nameSelector: '.element__name',
  deleteButtonSelector: '.element__delete-button',
  likeButtonSelector: '.element__heart-button',
  likeToggleClass: 'element__heart-button_active'
};

const validationConfig = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit-button',
  inactiveButtonClass: 'form__submit-button_disabled',
  inputErrorClass: 'form__input_type_error',
};

const postForm = new FormValidator(validationConfig, formAddItem);
const profileForm = new FormValidator(validationConfig, formProfile);

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function preparePost (name, link, template) {
  const cardData = {
    image: link,
    name: name
  };
  const card = new Card(cardData, template, openPreviewPopup);
  return card.generateCard();
};

function renderPost (name, link, template, container) {
  container.prepend(preparePost(name, link, template));
}

initialCards.forEach(function (item) {
  renderPost(item.name, item.link, postTemplate, cardsContainer);
})

function openPopup (targetPopup) {
  targetPopup.classList.add(popupToggleClass);
  document.addEventListener('keydown', handleEscPress)
}

function openProfilePopup () {
  nameInput.value = nameElement.textContent;
  occupationInput.value = occupationElement.textContent;
  openPopup(popupProfile);
}

function openAddPostPopup () {
  openPopup(popupAddItem);
}

function openPreviewPopup (name, link) {
  popupPreviewImage.src = link;
  popupPreviewImage.alt = name;
  popupPreviewCaption.textContent = name;
  openPopup(popupPreview);
}

function closePopup (targetPopup) {
  targetPopup.classList.remove(popupToggleClass);
  document.removeEventListener('keydown', handleEscPress)
}

function handleEscPress (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePopup(document.querySelector(`.${popupToggleClass}`));
  };
}

function handlePopupOverlayClick (evt, target) {
  const popupCloseButton = target.querySelector('.popup__close-button');
  if (evt.target === target || evt.target === popupCloseButton) {
    closePopup(target);
  };
}

function handleProfileFormSubmit (evt) {
  evt.preventDefault();
  nameElement.textContent = nameInput.value;
  occupationElement.textContent = occupationInput.value;
  closePopup(popupProfile);
}

function handleAddItemFormSubmit (evt) {
  evt.preventDefault();
  renderPost(postNameInput.value, postImageLinkInput.value, postTemplate, cardsContainer);
  closePopup(popupAddItem);
  formAddItem.reset();
  postForm.disableButton();
}

profileEditButton.addEventListener('click', openProfilePopup);
postAddButton.addEventListener('click', openAddPostPopup);
popups.forEach(function (item) {
  item.addEventListener('click', (evt) => {handlePopupOverlayClick(evt, item)});
});
formProfile.addEventListener('submit', handleProfileFormSubmit);
formAddItem.addEventListener('submit', handleAddItemFormSubmit);

(function enableValidation() {
  postForm.enableValidation();
  profileForm.enableValidation();
})();
