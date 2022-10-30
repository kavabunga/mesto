import './index.css';
import {
  nameElementSelector,
  aboutElementSelector,
  userImageElementSelector,
  popupAvatarSelector,
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
  formAvatarSelector,
  profileEditButton,
  postAddButton,
  avatarEditButton,
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

let userId

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

const avatarValidator = new FormValidator(
  validationConfig,
  formAvatarSelector
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
  function handleSubmit (id, removePostHandler) {
    api.deleteData('cards', id)
    .then(res => {
      removePostHandler();
      this.close();
    })
    .catch(err => {
      console.log(err)
    })
  }
);

confirmationDeletePopup.setEventListeners();

const userInfo = new UserInfo(
  nameElementSelector,
  aboutElementSelector,
  userImageElementSelector
);

function renderPost (item) {
  const cardElement = createCard(item);
  postsSection.addItem(cardElement);
};

function createCard(item) {
  const card = new Card(
    item,
    postTemplate,
    userId,
    () => {
      previewPopup.open(item);
    },
    function confirmDelete (id, removePostHandler) {
      confirmationDeletePopup.open(id, removePostHandler);
    },
    function handleLike (id, state, setLikes, setLikeArray) {
      return api.likeCard(id, state)
        .then(res => {
          setLikeArray(res.likes);
          setLikes();
        })
        .catch(err => {
          console.log(err)
        });
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
  function handleSubmit (values) {
    this.activateLoadingIndication();
    postValidator.disableButton();
    api.postData(values, 'cards')
    .then(res => {
      renderPost(res);
      this.close();
    })
    .catch(err => {
      console.log(err)
    })
    .finally(res => {
      postValidator.enableButton();
      this.deactivateLoadingIndication();
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
  function handleSubmit (values) {
    this.activateLoadingIndication();
    profileValidator.disableButton();
    api.patchData(values, 'users/me')
    .then(res => {
      userInfo.setUserInfo(res);
      this.close();
    })
    .catch(err => {
      console.log(err)
    })
    .finally(res => {
      profileValidator.enableButton();
      this.deactivateLoadingIndication();
    })
  }
)

profilePopup.setEventListeners();

const avatarPopup = new PopupWithForm(
  popupAvatarSelector,
  popupToggleClass,
  popupCloseButtonSelector,
  formSelector,
  formInputSelector,
  function handleSubmit (values) {
    this.activateLoadingIndication();
    avatarValidator.disableButton();
    api.patchData({
        avatar: values.link
      }, 'users/me/avatar')
    .then(res => {
      userInfo.setUserImage(res.avatar);
      this.close();
    })
    .catch(err => {
      console.log(err)
    })
    .finally(res => {
      avatarValidator.enableButton();
      this.deactivateLoadingIndication();
    })
  }
)

avatarPopup.setEventListeners();

const postsSection = new Section(
  function (item) {
    renderPost(item)
  },
  cardsContainerSelector
);

const cardsPromise = api.getCardsData();
const userPromise = api.getUserData();

Promise.all([cardsPromise, userPromise])
  .then(res => {
    userInfo.setUserImage(res[1].avatar);
    userInfo.setUserInfo(res[1]);
    userId = res[1]._id;
    postsSection.renderItems(res[0].reverse());
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

avatarEditButton.addEventListener('click', () => {
  avatarValidator.resetValidation();
  avatarPopup.open();
});

postValidator.enableValidation();
profileValidator.enableValidation();
avatarValidator.enableValidation();
