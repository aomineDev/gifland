import config from 'config'

const { apiBaseUrl } = config.api

const SERVICE = 'favs'

export function createFav ({ id, token }) {
  return fetch(`${apiBaseUrl}/${SERVICE}/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ jwt: token })
  })
    .then(response => response.json())
    .then(({ favs }) => favs)
}
