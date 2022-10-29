export default class UserInfo {
  constructor(nameSelector, aboutSelector, imageSelector) {
    this._nameElement = document.querySelector(nameSelector);
    this._aboutElement = document.querySelector(aboutSelector)
    this._imageElement = document.querySelector(imageSelector)
  }

  getUserInfo() {
    const userInfo = {
      name: this._nameElement.textContent,
      about: this._aboutElement.textContent
    };
    return userInfo;
  }

  setUserInfo({name, about}) {
    this._nameElement.textContent = name;
    this._aboutElement.textContent = about;
  }

  setUserImage(link) {
    this._imageElement.src = link;
    this._imageElement.alt = this._nameElement.textContent;
  }
}
