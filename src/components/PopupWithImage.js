import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(selector, popupToggleClass, popupCloseButtonSelector, popupPreviewImageSelector, popupPreviewCaptionSelector) {
    super(selector, popupToggleClass, popupCloseButtonSelector);
    this._popupPreviewImageSelector = popupPreviewImageSelector;
    this._popupPreviewCaptionSelector = popupPreviewCaptionSelector;
    this._popupPreviewImage = this._getElements(popupPreviewImageSelector);
    this._popupPreviewCaption = this._getElements(popupPreviewCaptionSelector);
  }

  _getElements(selector) {
    return this._element.querySelector(selector);
  }

  open({name, link}) {
    super.open();
    this._popupPreviewImage.src = link;
    this._popupPreviewImage.alt = name;
    this._popupPreviewCaption.textContent = name;
    this._element.classList.add(this._popupToggleClass);
  }

}
