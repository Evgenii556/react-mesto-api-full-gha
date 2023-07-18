class Api {
  constructor(options) {
    this._url = options.baseUrl;
    this._headers = options.headers;
    this._token = options.headers['authorization'];
  }

  _getResponse(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  getData() {
    return Promise.all([ this.getUserInfo(), this.getCards()]);
  }

  getUserInfo() {
    return fetch(this._url + '/users/me', {
      headers: {authorization: this._token},
    })
      .then(this._getResponse);
  }

  editAvatar(avatar) {
    return fetch(this._url + '/users/me/avatar', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(avatar)
    })
      .then(this._getResponse);
  }

  editUserInfo(data) {
    return fetch(this._url + '/users/me', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    })
      .then(this._getResponse);
  }

  getCards() {
    return fetch(`${this._url}/cards`, {
      headers: {authorization: this._token},
    })
      .then(this._getResponse);
  }

  setLike(id, isLiked) {
    if (!isLiked) {
      return fetch(`${this._url}/cards/${id}/likes`, {
        method: 'PUT',
        headers: this._headers
      })
        .then(this._getResponse);
    } else {
      return fetch(`${this._url}/cards/${id}/likes`, {
        method: 'DELETE',
        headers: this._headers
      })
        .then(this._getResponse);
    }
  }

  changeLikeCardStatus(id, isLiked) {
    if (isLiked) {
        return this.setLike(id, this.isLiked);
    } else {
        return this.deleteLike(id);
    }
}

  deleteLike(id) {
    return fetch(`${this._url}/cards/${id}/likes`, {
        method: "DELETE",
        headers: this._headers,
    }).then(this._getResponse);
  }

  addCard({name, link}) {
    return fetch(`${this._url}/cards`, {
        method: "POST",
        headers: this._headers,
        body: JSON.stringify({
            name,
            link,
        }),
    }).then((res) => this._getResponse(res));
}

  deleteCard(id) {
    return fetch(`${this._url}/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(this._getResponse);
  }
}

const api = new Api({
  baseUrl: 'https://api.superproject.mesto.nomoredomains.xyz',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;

