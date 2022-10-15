import './index.css';
import {
  nameElement,
  occupationElement,
  // popupProfile,
  // popupAddItem,
  nameElementSelector,
  occupationElementSelector,
  popupProfileSelector,
  popupAddItemSelector,
  // popupPreview,
  // popupPreviewImage,
  // popupPreviewCaption,
  popupPreviewSelector,
  popupPreviewImageSelector,
  popupPreviewCaptionSelector,
  // formProfile,
  // formAddItem,
  formProfileSelector,
  formAddItemSelector,
  // nameInput,
  // occupationInput,
  // postNameInput,
  // postImageLinkInput,
  profileEditButton,
  postAddButton,
  // postSubmitButton,
  popups,
  cardsContainerSelector,
  popupToggleClass,
  postTemplate,
  validationConfig,
  initialCards
} from '../utils/constants.js';
import UserInfo from '../components/UserInfo.js';
import Section from '../scripts/Section.js';
import { Popup, PopupWithImage, PopupWithForm } from '../components/Popup.js';
import { Card } from '../scripts/Card.js';
import { FormValidator } from '../scripts/FormValidator.js';

const addItemValidator = new FormValidator(validationConfig, formAddItemSelector);
const editProfileValidator = new FormValidator(validationConfig, formProfileSelector);

const imagePreviewPopup = new PopupWithImage(popupPreviewSelector);
imagePreviewPopup.setEventListeners();

const userInfo = new UserInfo(nameElementSelector, occupationElementSelector);

function renderPost (item) {
  const card = new Card(item, postTemplate, () => {
    imagePreviewPopup.open(item);
  });
  const cardElement = card.generateCard();
  postsSection.addItem(cardElement);
};

const addItemPopup = new PopupWithForm(popupAddItemSelector, (evt) => {
  evt.preventDefault();
  const values = addItemPopup._getInputValues();
  renderPost(values);
  addItemPopup.close();
  addItemValidator.disableButton();
});
addItemPopup.setEventListeners();

const profilePopup = new PopupWithForm(popupProfileSelector, (evt) => {
  evt.preventDefault();
  const values = profilePopup._getInputValues();
  userInfo.setUserInfo(values);
  profilePopup.close();
})
profilePopup.setEventListeners();

const postsSection = new Section({
  items: initialCards,
  renderer: (item) => renderPost(item)
  },
  cardsContainerSelector
);
postsSection.renderItems();



// function preparePost (name, link, template) {
//   const cardData = {
//     image: link,
//     name: name
//   };
//   const card = new Card(cardData, template, openPreviewPopup);
//   return card.generateCard();
// };

// function renderPost (name, link, template, container) {
//   container.prepend(preparePost(name, link, template));
// }

// initialCards.forEach(function (item) {
//   renderPost(item.name, item.link, postTemplate, cardsContainer);
// })

// function openPopup (targetPopup) {
//   targetPopup.classList.add(popupToggleClass);
//   document.addEventListener('keydown', handleEscPress)
// }

// function openProfilePopup () {
//   nameInput.value = nameElement.textContent;
//   occupationInput.value = occupationElement.textContent;
//   openPopup(popupProfile);
// }

// function openAddPostPopup () {
//   openPopup(popupAddItem);
// }

// function openPreviewPopup (name, link) {
//   popupPreviewImage.src = link;
//   popupPreviewImage.alt = name;
//   popupPreviewCaption.textContent = name;
//   openPopup(popupPreview);
// }

// function closePopup (targetPopup) {
//   targetPopup.classList.remove(popupToggleClass);
//   document.removeEventListener('keydown', handleEscPress)
// }

// function handleEscPress (evt) {
//   if (evt.key === 'Escape') {
//     evt.preventDefault();
//     closePopup(document.querySelector(`.${popupToggleClass}`));
//   };
// }

// function handlePopupOverlayClick (evt, target) {
//   const popupCloseButton = target.querySelector('.popup__close-button');
//   if (evt.target === target || evt.target === popupCloseButton) {
//     closePopup(target);
//   };
// }

// function handleeditProfileValidatorSubmit (evt) {
//   evt.preventDefault();
//   nameElement.textContent = nameInput.value;
//   occupationElement.textContent = occupationInput.value;
//   closePopup(popupProfile);
// }

// function handleAddItemFormSubmit (evt) {
//   evt.preventDefault();
//   renderPost(postNameInput.value, postImageLinkInput.value, postTemplate, cardsContainer);
//   closePopup(popupAddItem);
//   formAddItem.reset();
//   addItemValidator.disableButton();
// }

profileEditButton.addEventListener('click', () => {
  const values = userInfo.getUserInfo();
  profilePopup.setInputValues(values);
  profilePopup.open()
});
postAddButton.addEventListener('click', () => addItemPopup.open());
// popups.forEach(function (item) {
//   item.addEventListener('click', (evt) => {handlePopupOverlayClick(evt, item)});
// });
// formProfile.addEventListener('submit', handleeditProfileValidatorSubmit);
// formAddItem.addEventListener('submit', handleAddItemFormSubmit);

(function enableValidation() {
  addItemValidator.enableValidation();
  editProfileValidator.enableValidation();
})();
