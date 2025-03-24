const config = {
  baseUrl: "https://mesto.nomoreparties.co/v1/wff-cohort-32",
  headers: {
    authorization: "118547c1-3283-4816-b889-bc6dfde211a3",
    "Content-Type": "application/json",
  },
};

function responseOk (res)  {
  if (res.ok) {
      return res.json();
    }
        // если ошибка, отклоняем промис
    return Promise.reject(`Ошибка: ${res.status}`);
}

export const  getUserData = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers,
  })
    .then(responseOk);
}

export const getInitialCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers,
  })
    .then(responseOk);
}; 

export const getRenderCard = (name, link) => {
  return fetch(`${config.baseUrl}/cards`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      link: link,
    })
  })
    .then(responseOk);
}; 

export const  getEditProfile = (name, about) => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      about: about,
    })
  })
    .then(responseOk);
};

export const  deleteCardServer = (cardId) => {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  })
    .then(responseOk);
};

export const likeCardServer = (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: method,
    headers: config.headers,
  }).then(responseOk);
};



