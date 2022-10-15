import {
  popupToggleClass,
  popupPreviewImageSelector,
  popupPreviewCaptionSelector
} from "../utils/constants.js";
import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
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
