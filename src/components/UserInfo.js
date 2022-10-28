export default class UserInfo {
  constructor(nameSelector, aboutSelector) {
    this._nameElement = document.querySelector(nameSelector);
    this._aboutElement = document.querySelector(aboutSelector)
  }

  getUserInfo() {
    const userInfo = {};
    userInfo.name = this._nameElement.textContent;
    userInfo.about = this._aboutElement.textContent;
    return userInfo;
  }

  setUserInfo({name, about}) {
    this._nameElement.textContent = name;
    this._aboutElement.textContent = about;
  }
}
