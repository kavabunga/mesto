c56e30dc-2883-4270-a59e-b2f7bae969c6 — так выглядит токен
cohort-42 — а так идентификатор группы

Запрос
fetch('https://mesto.nomoreparties.co/v1/cohort-42/cards', {
  headers: {
    authorization: 'c56e30dc-2883-4270-a59e-b2f7bae969c6'
  }
})
  .then(res => res.json())
  .then((result) => {
    console.log(result);
  });

  1. Инфо о пользователе

  GET https://nomoreparties.co/v1/cohortId/users/me

  {
  "name": "Jacques Cousteau",
  "about": "Sailor, researcher",
  "avatar": "https://pictures.s3.yandex.net/frontend-developer/ava.jpg",
  "_id": "e20537ed11237f86bbb20ccb",
  "cohort": "cohort0"
}

Используйте свойства name, about и avatar в соответствующих элементах шапки страницы. Свойство _id — это идентификатор пользователя, в данном случае вашего.

2. Загрузка карточек с сервера

GET https://mesto.nomoreparties.co/v1/cohortId/cards

[
  {
    "likes": [],
    "_id": "5d1f0611d321eb4bdcd707dd",
    "name": "Байкал",
    "link": "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    "owner": {
      "name": "Jacques Cousteau",
      "about": "Sailor, researcher",
      "avatar": "https://pictures.s3.yandex.net/frontend-developer/ava.jpg",
      "_id": "ef5f7423f7f5e22bef4ad607",
      "cohort": "local"
    },
    "createdAt": "2019-07-05T08:10:57.741Z"
  },
  {
    "likes": [],
    "_id": "5d1f064ed321eb4bdcd707de",
    "name": "Архыз",
    "link": "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    "owner": {
      "name": "Jacques Cousteau",
      "about": "Sailor, researcher",
      "avatar": "https://pictures.s3.yandex.net/frontend-developer/ava.jpg",
      "_id": "ef5f7423f7f5e22bef4ad607",
      "cohort": "local"
    },
    "createdAt": "2019-07-05T08:11:58.324Z"
  }
]

_id — добавить!

3. Редактирование профиля

PATCH https://mesto.nomoreparties.co/v1/cohortId/users/me

fetch('https://mesto.nomoreparties.co/v1/cohortId/users/me', {
  method: 'PATCH',
  headers: {
    authorization: 'c56e30dc-2883-4270-a59e-b2f7bae969c6',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Marie Skłodowska Curie',
    about: 'Physicist and Chemist'
  })
});

{
  "name": "Marie Skłodowska Curie",
  "about": "Physicist and Chemist",
  "avatar": "https://pictures.s3.yandex.net/frontend-developer/common/ava.jpg",
  "_id": "e20537ed11237f86bbb20ccb",
  "cohort": "cohort0",
}

4. Добавление новой карточки

POST https://mesto.nomoreparties.co/v1/cohortId/cards

{
  "likes": [],
  "_id": "5d1f0611d321eb4bdcd707dd",
  "name": "Байкал",
  "link": "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  "owner": {
    "name": "Jacques Cousteau",
    "about": "Sailor, researcher",
    "avatar": "https://pictures.s3.yandex.net/frontend-developer/ava.jpg",
    "_id": "ef5f7423f7f5e22bef4ad607",
    "cohort": "local"
  },
  "createdAt": "2019-07-05T08:10:57.741Z"
},

5. Отображение количества лайков карточки

{
  "likes": [],
  ...другие данные карточки
}

Figma — https://www.figma.com/file/PSdQFRHoxXJFs2FH8IXViF/JavaScript-9-sprint?node-id=0%3A1

6. Попап удаления карточки

Figma — https://www.figma.com/file/PSdQFRHoxXJFs2FH8IXViF/JavaScript-9-sprint?node-id=0%3A1

7. Удаление карточки
Прежде чем браться за работу с API, исправьте элемент карточки. Сделайте так, чтобы иконка удаления была только на созданных вами карточках, так как удалять чужие карточки нельзя.

DELETE https://mesto.nomoreparties.co/v1/cohortId/cards/cardId

{
  "likes": [],
  "_id": "5d1f0611d321eb4bdcd707dd", — вот он
  ...другие данные карточки
}

DELETE https://mesto.nomoreparties.co/v1/cohortId/cards/5d1f0611d321eb4bdcd707dd

8. Постановка и снятие лайка

PUT https://mesto.nomoreparties.co/v1/cohortId/cards/cardId/likes

DELETE https://mesto.nomoreparties.co/v1/cohortId/cards/cardId/likes

В ответе придёт обновлённый JSON с карточкой. Массив лайков в нём будет уже обновлён.
При постановке и снятии лайка сердечко должно менять цвет, а счётчик лайков увеличиваться или уменьшаться.
Чтобы изменить количество лайков, нужно отправить на сервер запрос с соответствующим методом. Рекомендуем брать количество лайков из ответа сервера, а не из вёрстки. Иначе могут возникнуть ошибки, когда два пользователя одновременно лайкнут одну карточку.

9. Обновление аватара пользователя

PATCH https://mesto.nomoreparties.co/v1/cohortId/users/me/avatar

При наведении указателя мыши на аватар, на нём должна появляться иконка редактирования:

А при клике, открываться форма. Эту форму нужно сделать. В ней должно быть одно поле — ссылка на новый аватар:

Figma — https://www.figma.com/file/PSdQFRHoxXJFs2FH8IXViF/JavaScript-9-sprint?node-id=0%3A1

10. Улучшенный UX всех форм

Поработайте над UX. При редактировании профиля уведомите пользователя о процессе загрузки, поменяв текст кнопки на: «Сохранение...», пока данные загружаются

Сделайте то же самое для формы добавления новой карточки и обновления аватара.

---

class Api {
  constructor(options) {
    // тело конструктора
  }

  getInitialCards() {
    // ...
  }

  // другие методы работы с API
}

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-42',
  headers: {
    authorization: 'c56e30dc-2883-4270-a59e-b2f7bae969c6',
    'Content-Type': 'application/json'
  }
});

Проверяем ок ли ответ

getInitialCards() {
  return fetch('https://mesto.nomoreparties.co/v1/cohort-42/cards', {
    headers: {
      authorization: 'c56e30dc-2883-4270-a59e-b2f7bae969c6'
    }
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
    });
}

Учитываем ошибки

getInitialCards() {
  return fetch('https://mesto.nomoreparties.co/v1/cohort-42/cards', {
    headers: {
      authorization: 'c56e30dc-2883-4270-a59e-b2f7bae969c6'
    }
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }

      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`);
    });
}

Ощибки в Catch

api.getInitialCards()
  .then((result) => {
    // обрабатываем результат
  })
  .catch((err) => {
    console.log(err); // выведем ошибку в консоль
  });

