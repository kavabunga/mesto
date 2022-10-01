export class Card {
  constructor(cardData, templateData, openPreviewPopup) {
    this._image = cardData.image;
    this._name = cardData.name;
    this._templateElement = document.querySelector(templateData.templateSelector).content.querySelector(templateData.elementSelector);
    this._element = this._getTemplate();
    this._imageElement = this._element.querySelector(templateData.imageSelector);
    this._nameElement = this._element.querySelector(templateData.nameSelector);
    this._deleteButtonElement = this._element.querySelector(templateData.deleteButtonSelector);
    this._likeButtonElement = this._element.querySelector(templateData.likeButtonSelector);
    this._likeToggleClass = templateData.likeToggleClass;
    this._openPreviewPopup = openPreviewPopup;
  };

  _getTemplate() {
    const cardElement = this._templateElement.cloneNode(true);
    return cardElement;
  };

  _setEventListeners() {
    this._imageElement.addEventListener('click', () => {this._handleImageElementClick()});
    this._deleteButtonElement.addEventListener('click', () => {this._handleDeleteButtonElementClick()});
    this._likeButtonElement.addEventListener('click', () => {this._handleLikeButtonElementClick()});
  };

  generateCard() {
    this._setEventListeners();
    this._imageElement.src = this._image;
    this._imageElement.alt = this._name;
    this._nameElement.textContent = this._name;
    return this._element;
  };

  _handleImageElementClick() {
    this._openPreviewPopup(this._name, this._image);
  }

  _handleDeleteButtonElementClick() {
    this._removePost();
  }

  _handleLikeButtonElementClick() {
    this._likePost();
  }

  _removePost() {
    this._element.remove();
  };

  _likePost() {
    this._likeButtonElement.classList.toggle(this._likeToggleClass);
  }

}
