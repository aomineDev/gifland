import config from 'config'

const { apiBaseUrl } = config.auth

export function login (credentials) {
  const body = JSON.stringify(credentials)

  return fetch(`${apiBaseUrl}/login`, {
      method: 'POST',
      body,
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
}
