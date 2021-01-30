import config from 'config'

const { apiBaseUrl } = config.user

export function signIn (credentials) {
  const body = JSON.stringify(credentials)

  return fetch(`${apiBaseUrl}/login`, {
      method: 'POST',
      body,
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (!response.ok) throw new Error('Login failed!')
        return response.json()
      })
      .then(({ data }) => data)
}

export function signUp (credentials) {
  const body = JSON.stringify(credentials)

  return fetch(`${apiBaseUrl}/register`, {
      method: 'POST',
      body,
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (!response.ok) throw new Error('Register failed!')
        return response.json()
      })
}
