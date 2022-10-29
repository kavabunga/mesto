import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(selector, popupToggleClass, popupCloseButtonSelector, handleSubmit) {
    super(selector, popupToggleClass, popupCloseButtonSelector);
    this._handleSubmit = handleSubmit;
  }

  open (id, removePostHandler) {
    super.open()
    this._openedFrom = id;
    this._removePostHandler = removePostHandler;
  }

  setEventListeners() {
    super.setEventListeners();
    this._element.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmit(this._openedFrom, this._removePostHandler);
    })
  }
}
