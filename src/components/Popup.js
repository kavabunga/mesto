import {
  popupToggleClass,
  popupPreviewImageSelector,
  popupPreviewCaptionSelector,
  popupCloseButtonSelector,
  formSelector,
  formInputSelector
} from "../utils/constants.js";

export class Popup {
  constructor(selector) {
    this._element = document.querySelector(selector);
    this._popupCloseButton = this._element.querySelector(popupCloseButtonSelector);
  }

  open() {
    this._element.classList.add(popupToggleClass);
    document.addEventListener('keydown', (evt) => this._handleEscClose(evt))
  }

  close() {
    this._element.classList.remove(popupToggleClass);
    document.removeEventListener('keydown', (evt) => this._handleEscClose(evt))
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.close();
    };
  }

  _handlePopupOverlayClick(evt) {
    if (evt.target === this._element || evt.target === this._popupCloseButton) {
      this.close();
    };
  }

  setEventListeners() {
    this._element.addEventListener('click', (evt) => this._handlePopupOverlayClick(evt));
  }
}

export class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);
  }

  _getElements() {
    this._popupPreviewImage = this._element.querySelector(popupPreviewImageSelector);
    this._popupPreviewCaption = this._element.querySelector(popupPreviewCaptionSelector);
  }

  open({name, link}) {
    super.open();
    this._getElements();
    this._popupPreviewImage.src = link;
    this._popupPreviewImage.alt = name;
    this._popupPreviewCaption.textContent = name;
    this._element.classList.add(popupToggleClass);
  }

}

export class PopupWithForm extends Popup {
  constructor(selector, handleSubmit) {
    super(selector);
    this._form = this._element.querySelector(formSelector);
    this._handleSubmit = handleSubmit;
  }

  _getInputValues() {
    this._inputList = this._form.querySelectorAll(formInputSelector);
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  setInputValues(data) {
    this._inputList = this._form.querySelectorAll(formInputSelector);
    this._inputList.forEach((input) => {
      if (data[input.name]) {
        input.value = data[input.name];
      }
    });
  }

  close() {
    super.close();
    this._form.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._element.addEventListener('submit', this._handleSubmit);
  }
}
