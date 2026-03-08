const URL = 'http://localhost:8000/articles';

const headers = {
  'Content-Type': 'application/json',
}

const articlesAPI = {
  test: () => {
    return fetch(URL).then((response) => response.json())
  },

  getAll: () => {
    return fetch(URL).then((response) => response.json())
  },

  add: (article) => {
    return fetch(URL, {
      method: 'POST',
      headers,
      body: JSON.stringify(article),
    })
      .then((response) => response.json())
  },

  getBySlug: (slug) => {
    return fetch(`${URL}/${slug}`).then((response) => response.json())
  },

  update: (slug) => {
    return fetch(`${URL}/${slug}`, {
      method: 'DELETE',
      headers,
    })
      .then((response) => response.json())
  },

  delete: (slug) => {
    return fetch(`${URL}/${slug}`, {
      method: 'DELETE',
      headers,
    })
      .then((response) => response.json())
  },
}

export default articlesAPI
