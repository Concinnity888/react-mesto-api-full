class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUser() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        ...this._headers,
      },
    }).then(this._checkResponse);
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: {
        ...this._headers,
      },
    }).then(this._checkResponse);
  }

  setUserInfo(user) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        ...this._headers,
      },
      body: JSON.stringify(user),
    }).then(this._checkResponse);
  }

  addNewCard(newCard) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: {
        ...this._headers,
      },
      body: JSON.stringify({
        name: newCard.name,
        link: newCard.link,
      }),
    }).then(this._checkResponse);
  }

  removeCard(idCard) {
    return fetch(`${this._baseUrl}/cards/${idCard}`, {
      method: 'DELETE',
      headers: {
        ...this._headers,
      },
    }).then(this._checkResponse);
  }

  _addLike(idCard) {
    return fetch(`${this._baseUrl}/cards/${idCard}/likes`, {
      method: 'PUT',
      headers: {
        ...this._headers,
      },
    }).then(this._checkResponse);
  }

  _removeLike(idCard) {
    return fetch(`${this._baseUrl}/cards/${idCard}/likes`, {
      method: 'DELETE',
      headers: {
        ...this._headers,
      },
    }).then(this._checkResponse);
  }

  changeLikeCardStatus(idCard, isLiked) {
    if (isLiked) {
      return this._removeLike(idCard);
    } else {
      return this._addLike(idCard);
    }
  }

  setUserAvatar(avatar) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        ...this._headers,
      },
      body: JSON.stringify(avatar),
    }).then(this._checkResponse);
  }
}

const api = new Api({
  baseUrl: 'https://mesto-ap.nomoredomains.xyz',

  headers: {
    authorization: `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json',
  },
});

export default api;
