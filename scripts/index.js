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
const addPostButton = document.querySelector('.profile__add-button')
const popups = document.querySelectorAll('.popup');
const templateCard = document.querySelector('.card-template').content;
const cardsContainer = document.querySelector('.elements');

const popupToggleClass = 'popup_opened';
const likeToggleClass = 'element__heart-button_active';

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
  const newPost = template.querySelector('.element').cloneNode(true);
  const postImage = newPost.querySelector('.element__image');
  const postName = newPost.querySelector('.element__name');
  const postRemoveButton = newPost.querySelector('.element__delete-button');
  const postLikeButton = newPost.querySelector('.element__heart-button');
  postImage.src = link;
  postImage.alt = name;
  postImage.addEventListener('click', () => {openPreviewPopup(name, link)});
  postName.textContent = name;
  postRemoveButton.addEventListener('click', () => {removePost(newPost)});
  postLikeButton.addEventListener('click', likePost);
  return newPost;
};

function renderPost (name, link, template, container) {
  container.prepend(preparePost(name, link, template));
}

function removePost (targetPost) {
  targetPost.remove();
};

function likePost (evt) {
  const targetButton = evt.target;
  targetButton.classList.toggle(likeToggleClass);
}

initialCards.forEach(function (item) {
  renderPost(item.name, item.link, templateCard, cardsContainer);
})

function openPopup (targetPopup) {
  targetPopup.classList.add(popupToggleClass);
  addEscListener();
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
  removeEscListener();
}

function handleEscPress (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePopup(document.querySelector(`.${popupToggleClass}`));
  };
}

function addEscListener () {
  document.addEventListener('keydown', handleEscPress)
}

function removeEscListener () {
  document.removeEventListener('keydown', handleEscPress)
}

function handlePopupOverlayClick (evt, target) {
  if (evt.target === target) {
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
  renderPost(postNameInput.value, postImageLinkInput.value, templateCard, cardsContainer);
  closePopup(popupAddItem);
  formAddItem.reset();
}

profileEditButton.addEventListener('click', openProfilePopup);
addPostButton.addEventListener('click', openAddPostPopup);
popups.forEach(function (item) {
  const popupCloseButton = item.querySelector('.popup__close-button');
  popupCloseButton.addEventListener('click', () => {closePopup(item)});
  item.addEventListener('click', (evt) => {handlePopupOverlayClick(evt, item)});
});
formProfile.addEventListener('submit', handleProfileFormSubmit);
formAddItem.addEventListener('submit', handleAddItemFormSubmit);
