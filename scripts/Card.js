import {openPreviewPopup, removePost, likePost} from './index.js'

export class Card {
  constructor(cardData, templateData) {
    this._image = cardData.image;
    this._name = cardData.name;
    this._templateSelector = templateData.templateSelector;
    this._elementSelector = templateData.elementSelector;
    this._imageSelector = templateData.imageSelector;
    this._nameSelector = templateData.nameSelector;
    this._deleteButtonSelector = templateData.deleteButtonSelector;
    this._likeButtonSelector = templateData.likeButtonSelector;
  };

  _getTemplate() {
    const cardElement = document.querySelector(this._templateSelector).content.querySelector(this._elementSelector).cloneNode(true);
    return cardElement;
  };

  _setEventListeners() {
    this._element.addEventListener('click', (evt) => {this._handleElementClick(evt)});
  };

  generateCard() {
    this._element = this._getTemplate(this._templateSelector);
    this._setEventListeners();
    this._element.querySelector(this._imageSelector).src = this._image;
    this._element.querySelector(this._imageSelector).alt = this._name;
    this._element.querySelector(this._nameSelector).textContent = this._name;
    return this._element;
  };

  _handleElementClick(evt) {
    if (evt.target === this._element.querySelector(this._imageSelector)) {
      openPreviewPopup(this._name, this._image);
    } else if (evt.target === this._element.querySelector(this._deleteButtonSelector)) {
      removePost(this._element);
    } else if (evt.target === this._element.querySelector(this._likeButtonSelector)) {
      likePost(this._element.querySelector(this._likeButtonSelector));
    };
  };
}
