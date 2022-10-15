import './index.css';
import {
  nameElementSelector,
  occupationElementSelector,
  popupProfileSelector,
  popupAddItemSelector,
  popupPreviewSelector,
  formProfileSelector,
  formAddItemSelector,
  profileEditButton,
  postAddButton,
  cardsContainerSelector,
  postTemplate,
  validationConfig,
  initialCards
} from '../utils/constants.js';
import UserInfo from '../components/UserInfo.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';

const addItemValidator = new FormValidator(validationConfig, formAddItemSelector);
const editProfileValidator = new FormValidator(validationConfig, formProfileSelector);
const imagePreviewPopup = new PopupWithImage(popupPreviewSelector);
imagePreviewPopup.setEventListeners();
const userInfo = new UserInfo(nameElementSelector, occupationElementSelector);

function renderPost (item) {
  const card = new Card(
    item,
    postTemplate,
    () => {
      imagePreviewPopup.open(item);
    }
  );
  const cardElement = card.generateCard();
  postsSection.addItem(cardElement);
};

const addItemPopup = new PopupWithForm(
  popupAddItemSelector, (evt) => {
    evt.preventDefault();
    const values = addItemPopup._getInputValues();
    renderPost(values);
    addItemPopup.close();
    addItemValidator.disableButton();
  }
);

addItemPopup.setEventListeners();

const profilePopup = new PopupWithForm(
  popupProfileSelector,
  (evt) => {
    evt.preventDefault();
    const values = profilePopup._getInputValues();
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
  profilePopup.open()
});

postAddButton.addEventListener('click', () => addItemPopup.open());

addItemValidator.enableValidation();
editProfileValidator.enableValidation();
