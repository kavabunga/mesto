import './index.css';
import {
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
} from "../utils/constants.js";
import Section from "../scripts/Section.js";
import { Card } from "../scripts/Card.js";
import { FormValidator } from "../scripts/FormValidator.js";

const postForm = new FormValidator(validationConfig, formAddItem);
const profileForm = new FormValidator(validationConfig, formProfile);

const postsSection = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item, postTemplate, openPreviewPopup)
    const cardElement = card.generateCard();
    postsSection.addItem(cardElement);
    }
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
