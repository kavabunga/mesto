const nameElement = document.querySelector('.profile__name');
const occupationElement = document.querySelector('.profile__occupation');
const popupProfile = document.querySelector('.popup_type_edit-profile');
const popupAddItem = document.querySelector('.popup_type_add-item');
const popupPreview = document.querySelector('.popup_type_preview');
const popupPreviewImage = popupPreview.querySelector('.popup__image');
const popupPreviewCaption = popupPreview.querySelector('.popup__caption');
const nameInput = popupProfile.querySelector('.form__input_name_name');
const occupationInput = popupProfile.querySelector('.form__input_name_occupation');
const postNameInput = popupAddItem.querySelector('.form__input_name_name');
const postImageLinkInput = popupAddItem.querySelector('.form__input_name_image-link');
const profileEditButton = document.querySelector('.profile__edit-button');
const addPostButton = document.querySelector('.profile__add-button')
const popupCloseButtons = document.querySelectorAll('.popup__close-button');
const elements = document.querySelectorAll('.element');
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

function addPost (name, link, template, container) {
  const newPost = template.querySelector('.element').cloneNode(true);
  const postImage = newPost.querySelector('.element__image');
  const postName = newPost.querySelector('.element__name');
  const postRemoveButton = newPost.querySelector('.element__delete-button');
  const postLikeButton = newPost.querySelector('.element__heart-button');
  postImage.src = link;
  postImage.alt = name;
  postImage.addEventListener('click', popupOpenPreview);
  postName.textContent = name;
  postRemoveButton.addEventListener('click', removePost);
  postLikeButton.addEventListener('click', likePost);
  container.prepend(newPost);
};

function removePost (evt) {
  const targetPost = evt.target.parentElement;
  targetPost.remove();
};

function likePost (evt) {
  const targetButton = evt.target;
  if (targetButton.classList.contains(likeToggleClass)) {
    targetButton.classList.remove(likeToggleClass);
  } else {
    targetButton.classList.add(likeToggleClass);
  };
}

initialCards.forEach(function (item) {
  console.log(item);
  addPost(item.name, item.link, templateCard, cardsContainer);
})

function popupOpen (elem) {
  elem.classList.add(popupToggleClass);
}

function popupOpenProfile () {
  nameInput.value = nameElement.textContent;
  occupationInput.value = occupationElement.textContent;
  popupOpen (popupProfile);
}

function popupOpenAddPost () {
  popupOpen (popupAddItem);
}

function popupOpenPreview (evt) {
  const targetPost = evt.target.parentElement;
  const post = {
    name: targetPost.querySelector('.element__name').textContent,
    link: targetPost.querySelector('.element__image').src,
    alt: targetPost.querySelector('.element__image').alt
  }
  popupPreviewImage.src = post.link;
  popupPreviewImage.alt = post.alt;
  popupPreviewCaption.textContent = post.name;
  popupOpen (popupPreview);
}

function popupClose (evt) {
  const targetPopup = evt.target.parentElement.parentElement;
  targetPopup.classList.remove(popupToggleClass);
}

function formProfileSubmitHandler (evt) {
  evt.preventDefault();
  nameElement.textContent = nameInput.value;
  occupationElement.textContent = occupationInput.value;
  popupClose(evt);
}

function formAddItemSubmitHandler (evt) {
  evt.preventDefault();
  addPost(postNameInput.value, postImageLinkInput.value, templateCard, cardsContainer);
  popupClose(evt);
}

profileEditButton.addEventListener('click', popupOpenProfile);
addPostButton.addEventListener('click', popupOpenAddPost);

Array.from(elements).forEach(function (item) {
  item.querySelector('.element__image').addEventListener('click', popupOpenPreview);
  item.querySelector('.element__delete-button').addEventListener('click', removePost);
  item.querySelector('.element__heart-button').addEventListener('click', likePost);
});

Array.from(popupCloseButtons).forEach(function (item) {
  item.addEventListener('click', popupClose);
});

popupProfile.addEventListener('submit', formProfileSubmitHandler);
popupAddItem.addEventListener('submit', formAddItemSubmitHandler);
