export default class UserInfo {
  constructor(nameSelector, occupationSelector) {
    this._nameElement = document.querySelector(nameSelector);
    this._occupationElement = document.querySelector(occupationSelector)
  }

  getUserInfo() {
    const userInfo = {};
    userInfo.name = this._nameElement.textContent;
    userInfo.occupation = this._occupationElement.textContent;
    return userInfo;
  }

  setUserInfo({name, occupation}) {
    this._nameElement.textContent = name;
    this._occupationElement.textContent = occupation;
  }
}
