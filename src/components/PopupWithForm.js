import {
  formSelector,
  formInputSelector
} from "../utils/constants.js";
import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
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
