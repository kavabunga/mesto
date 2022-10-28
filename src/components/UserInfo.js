export default class UserInfo {
  constructor(nameSelector, aboutSelector, imageSelector) {
    this._nameElement = document.querySelector(nameSelector);
    this._aboutElement = document.querySelector(aboutSelector)
    this._imageElement = document.querySelector(imageSelector)
  }

  getUserInfo() {
    const userInfo = {
      name: this._name,
      about: this._about
    };
    return userInfo;
  }

  setUserInfo({name, about}) {
    this._name = name;
    this._about = about;
  }

  setUserId(id) {
    this.id = id;
  }

  renderUserInfo() {
    this._nameElement.textContent = this._name;
    this._aboutElement.textContent = this._about;
  }

  setUserImage(link) {
    this._image = link;
  }

  renderUserImage() {
    this._imageElement.src = this._image;
    this._imageElement.alt = this._name;
  }
}
