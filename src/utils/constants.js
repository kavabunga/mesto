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
const cardsContainerSelector = '.elements';

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

export {
  nameElement,
  occupationElement,
  popupProfile,
  popupAddItem,
  popupPreview,
  popupPreviewImage,
  popupPreviewCaption,
  formProfile,
  formAddItem,
  nameInput,
  occupationInput,
  postNameInput,
  postImageLinkInput,
  profileEditButton,
  postAddButton,
  postSubmitButton,
  popups,
  cardsContainerSelector,
  popupToggleClass,
  postTemplate,
  validationConfig,
  initialCards
};
