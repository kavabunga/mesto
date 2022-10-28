import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(selector, popupToggleClass, popupCloseButtonSelector, handleSubmit) {
    super(selector, popupToggleClass, popupCloseButtonSelector);
    this._handleSubmit = handleSubmit;
  }

  open (id) {
    super.open()
    this._openedFrom = id;
  }

  setEventListeners() {
    super.setEventListeners();
    this._element.addEventListener('submit', this._handleSubmit);
  }
}
