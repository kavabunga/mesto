import './index.css';
import {
  nameElementSelector,
  occupationElementSelector,
  popupToggleClass,
  popupCloseButtonSelector,
  popupProfileSelector,
  popupAddItemSelector,
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
  initialCards,
  serverUrl,
  serverToken
} from '../utils/constants.js';
import UserInfo from '../components/UserInfo.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Api from '../components/Api.js';

const api = new Api({
  baseUrl: serverUrl,
  headers: {
    authorization: serverToken,
    'Content-Type': 'application/json'
  }
});

api.getData('users/me');
api.getData('cards');
api.patchData({
  name: 'Dusya',
  about: 'Mechanic'
}, 'users/me');
// api.getData('users/me');

const postValidator = new FormValidator(validationConfig, formAddItemSelector);
const profileValidator = new FormValidator(validationConfig, formProfileSelector);
const previewPopup = new PopupWithImage(popupPreviewSelector, popupToggleClass, popupCloseButtonSelector, popupPreviewImageSelector, popupPreviewCaptionSelector);
previewPopup.setEventListeners();
const userInfo = new UserInfo(nameElementSelector, occupationElementSelector);

function renderPost (item) {
  const cardElement = createCard(item);
  postsSection.addItem(cardElement);
};

function createCard(item) {
  const card = new Card(
    item,
    postTemplate,
    () => {
      previewPopup.open(item);
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
    const values = postPopup.getInputValues();
    renderPost(values);
    postPopup.close();
    postValidator.disableButton();
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
    const values = profilePopup.getInputValues();
    userInfo.setUserInfo(values);
    profilePopup.close();
  }
)

profilePopup.setEventListeners();

const postsSection = new Section({
    items: initialCards,
    renderer: (item) => renderPost(item)
  },
  cardsContainerSelector
);

postsSection.renderItems();

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
