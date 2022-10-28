export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this.initialArray = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
    this.initialArray.forEach(item => {
      this._renderer(item);
    });
  }

  addItem(item) {
    this._container.prepend(item);
  }
}
