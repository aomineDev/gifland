import config from 'config'

const { apiBaseUrl } = config.user

const SERVICE = 'favs'

export function createFav ({ id, token }) {
  return fetch(`${apiBaseUrl}/${SERVICE}/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    }
  })
    .then(response => response.json())
    .then(({ favs }) => favs)
}

export function getFavs ({ token }) {
  return fetch(`${apiBaseUrl}/${SERVICE}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    }
  })
    .then(response => response.json())
    .then(({ favs }) => favs)
}

