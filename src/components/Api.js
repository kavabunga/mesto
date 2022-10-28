export default class Api {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _fetchRequest(url, options) {
    return fetch(url, options )
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then(res => {
      return res;
    })
    .catch(err => {
      console.log(err);
    });

  }

  postData(data, directory) {
    const url = `${this._baseUrl}/${directory}`;
    const options = {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data)
    };
    return this._fetchRequest(url, options);
  }

  getData(directory) {
    const url = `${this._baseUrl}/${directory}`;
    const options = {
      method: 'GET',
      headers: this._headers,
    };
    return this._fetchRequest(url, options);
  }

  patchData(data, directory) {
    const url = `${this._baseUrl}/${directory}`;
    const options = {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(data)
    };
    return this._fetchRequest(url, options);
  }

  deleteData(directory, itemId) {
    const url = `${this._baseUrl}/${directory}/${itemId}`;
    const options = {
      method: 'DELETE',
      headers: this._headers,
    };
    return this._fetchRequest(url, options);
  }

  likeCard(itemId, state) {
    const url = `${this._baseUrl}/cards/${itemId}/likes`;
    const method = state ? 'PUT' : 'DELETE';
    const options = {
      method: method,
      headers: this._headers,
    };
    return this._fetchRequest(url, options);
  }
}
