export default class Card {
  constructor({name = '', link = '', likes = [], _id = '', owner = {}}, templateData, user, handleCardClick, handleRemoveClick, handleRemove, handleLike) {
    this._image = link;
    this._name = name;
    this._likes = likes;
    this._id = _id;
    this._owner = owner;
    this._user = user;
    this._templateElement = document.querySelector(templateData.templateSelector).content.querySelector(templateData.elementSelector);
    this._element = this._getTemplate();
    this._imageElement = this._element.querySelector(templateData.imageSelector);
    this._nameElement = this._element.querySelector(templateData.nameSelector);
    this._deleteButtonElement = this._element.querySelector(templateData.deleteButtonSelector);
    this._likeButtonElement = this._element.querySelector(templateData.likeButtonSelector);
    this._likeCountElement = this._element.querySelector(templateData.likeCountSelector);
    this._likeToggleClass = templateData.likeToggleClass;
    this._handleCardClick = handleCardClick;
    this._handleRemoveClick = handleRemoveClick;
    this._handleRemove = handleRemove;
    this._handleLike = handleLike;
    this._isLiked = this._checkLike();
    this._isMine = this._checkOwner();
  };

  _getLikes() {
    return this._likes.length
  }

  _setLikes() {
    this._likeCountElement.textContent = this._getLikes();
  }

  _checkLike() {
    return this._likes.find(element => element._id === this._user);
  }

  _checkOwner() {
    if (this._owner._id) {
      return this._owner._id === this._user;
    } else {
      return true;
    }
  }

  _getTemplate() {
    const cardElement = this._templateElement.cloneNode(true);
    return cardElement;
  };

  _setEventListeners() {
    this._imageElement.addEventListener('click', this._handleCardClick);
    this._deleteButtonElement.addEventListener('click', this._handleRemoveClick.bind(this)); //this._handleDeleteButtonElementClick.bind(this)
    this._likeButtonElement.addEventListener('click', this._handleLikeButtonElementClick.bind(this));
  };

  generateCard() {
    this._setEventListeners();
    this._imageElement.src = this._image;
    this._imageElement.alt = this._name;
    this._nameElement.textContent = this._name;
    if (this._isLiked) {
      this._likePost();
    }
    if (!this._isMine) {
      this._deleteButtonElement.remove();
    }
    this._setLikes();
    return this._element;
  };

  _handleLikeButtonElementClick() {
    this._likePost();
    this._isLiked = !this._isLiked;
    this._handleLike(this._id, this._isLiked)
      .then(res => {
          this._likes = res.likes
        })
      .then(res => {
          this._setLikes()
        })
      .catch(err => {
          console.log(err)
        });
  }

  removePost() {
    this._element.remove();
    this._handleRemove(this._id);
  };

  _likePost() {
    this._likeButtonElement.classList.toggle(this._likeToggleClass);
  }

}
