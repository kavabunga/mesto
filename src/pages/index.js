import './index.css';
import {
  nameElementSelector,
  aboutElementSelector,
  popupToggleClass,
  popupCloseButtonSelector,
  popupProfileSelector,
  popupAddItemSelector,
  popupConfirmationDeleteSelector,
  popupPreviewSelector,
  popupPreviewImageSelector,
  popupPreviewCaptionSelector,
  formSelector,
  formInputSelector,
  formProfileSelector,
  formAddItemSelector,
  profileEditButton,
  postAddButton,
  cardsContainerSelector,
  postTemplate,
  validationConfig,
  serverUrl,
  serverToken
} from '../utils/constants.js';
import UserInfo from '../components/UserInfo.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Api from '../components/Api.js';
import { post } from 'jquery';

const api = new Api({
  baseUrl: serverUrl,
  headers: {
    authorization: serverToken,
    'Content-Type': 'application/json'
  }
});

const postValidator = new FormValidator(
  validationConfig,
  formAddItemSelector
);
const profileValidator = new FormValidator(
  validationConfig,
  formProfileSelector
);
const previewPopup = new PopupWithImage(
  popupPreviewSelector,
  popupToggleClass,
  popupCloseButtonSelector,
  popupPreviewImageSelector,
  popupPreviewCaptionSelector
);

previewPopup.setEventListeners();
const confirmationDeletePopup = new PopupWithConfirmation(
  popupConfirmationDeleteSelector,
  popupToggleClass,
  popupCloseButtonSelector,
  (evt) => {
    evt.preventDefault();
    confirmationDeletePopup._openedFrom.removePost();
    confirmationDeletePopup.close();
  }
);
confirmationDeletePopup.setEventListeners();

const userInfo = new UserInfo(
  nameElementSelector,
  aboutElementSelector
);

function renderPost (item) {
  const cardElement = createCard(item);
  postsSection.addItem(cardElement);
};

function createCard(item) {
  const card = new Card(
    item,
    postTemplate,
    user,
    () => {
      previewPopup.open(item);
    },
    function confirmDelete() {
      confirmationDeletePopup.open(this);
    },
    function deleteCard (id) {
      return api.deleteData('cards', id);
    },
    function likeCard (id, state) {
      return api.likeCard(id, state);
    }
  );
  const cardElement = card.generateCard();
  return cardElement
};

const postPopup = new PopupWithForm(
  popupAddItemSelector,
  popupToggleClass,
  popupCloseButtonSelector,
  formSelector,
  formInputSelector,
  (evt) => {
    evt.preventDefault();
    postValidator.activateLoadingIndication();
    postValidator.disableButton();
    const values = postPopup.getInputValues();
    renderPost(values);
    api.postData(values, 'cards')
    .finally(res => {
      postValidator.deactivateLoadingIndication();
      postPopup.close();
    })
  }
);

postPopup.setEventListeners();

const profilePopup = new PopupWithForm(
  popupProfileSelector,
  popupToggleClass,
  popupCloseButtonSelector,
  formSelector,
  formInputSelector,
  (evt) => {
    evt.preventDefault();
    profileValidator.activateLoadingIndication();
    const values = profilePopup.getInputValues();
    userInfo.setUserInfo(values);
    api.patchData(values, 'users/me')
    .finally(res => {
      profileValidator.deactivateLoadingIndication();
      profilePopup.close();
    })
  }
)

profilePopup.setEventListeners();

const postsSection = new Section({
  items: [],
  renderer: (item) => renderPost(item)
},
cardsContainerSelector
);

const cardsPromise = api.getData('cards');
const userPromise = api.getData('users/me');
let user;

Promise.all([cardsPromise, userPromise])
  .then(res => {
    postsSection.initialArray = res[0].reverse();
    user = res[1]._id;
  })
  .then(res => {
    postsSection.renderItems()
  })
  .catch(err => {
    console.log(err)
  });

profileEditButton.addEventListener('click', () => {
  const values = userInfo.getUserInfo();
  profilePopup.setInputValues(values);
  profileValidator.resetValidation();
  profilePopup.open();
});

postAddButton.addEventListener('click', () => {
  postValidator.resetValidation();
  postPopup.open();
});

postValidator.enableValidation();
profileValidator.enableValidation();
