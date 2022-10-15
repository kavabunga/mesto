import {
  popupToggleClass,
  popupCloseButtonSelector
} from "../utils/constants.js";

export default class Popup {
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
