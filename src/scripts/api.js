const config = {
  baseUrl: "https://mesto.nomoreparties.co/v1/wff-cohort-32",
  headers: {
    authorization: "118547c1-3283-4816-b889-bc6dfde211a3",
    "Content-Type": "application/json",
  },
};

export const getInitialCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers,
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }

    // если ошибка, отклоняем промис
    return Promise.reject(`Ошибка: ${res.status}`);
  });
}; 

export const getAddCard = (data) => {
  return fetch(`${config.baseUrl}/cards`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify(data)
  })
}; 

