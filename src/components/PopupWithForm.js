import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(selector, popupToggleClass, popupCloseButtonSelector, formSelector, formInputSelector, handleSubmit) {
    super(selector, popupToggleClass, popupCloseButtonSelector);
    this._form = this._element.querySelector(formSelector);
    this._inputList = this._form.querySelectorAll(formInputSelector);
    this._handleSubmit = handleSubmit;
    this._buttonElement = this._form.querySelector('button[type="submit"]');
    this._buttonElementText = this._buttonElement.textContent;
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  setInputValues(data) {
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

  activateLoadingIndication() {
    this._buttonElement.textContent = 'Сохранение...';
  }

  deactivateLoadingIndication() {
    this._buttonElement.textContent = this._buttonElementText;
  }

  setEventListeners() {
    super.setEventListeners();
    this._element.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmit(this._getInputValues());
    });
  }
}
