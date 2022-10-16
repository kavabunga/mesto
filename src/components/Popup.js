export default class Popup {
  constructor(selector, popupToggleClass, popupCloseButtonSelector) {
    this._element = document.querySelector(selector);
    this._popupCloseButton = this._element.querySelector(popupCloseButtonSelector);
    this._popupToggleClass = popupToggleClass;
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._element.classList.add(this._popupToggleClass);
    document.addEventListener('keydown', this._handleEscClose)
  }

  close() {
    this._element.classList.remove(this._popupToggleClass);
    document.removeEventListener('keydown', this._handleEscClose)
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
