import config from '../config'

export function getGifs ({ type, query, limit = 8 } = {}) {
  const offset = '0'
  const rating = 'g'
  const lang = 'en'

  const apiURL = type === 'trending' ? `${config.apiBaseURL}/trending?api_key=${config.apiKey}&limit=${limit}&rating=${rating}` : `${config.apiBaseURL}/search?api_key=${config.apiKey}&q=${query}&limit=${limit}&offset=${offset}&rating=${rating}&lang=${lang}`

  return fetch(apiURL)
    .then(response => response.json())
    .then(({ data }) => data.map(({ id, title, images }) => ({
      id,
      title,
      url: images.fixed_height_downsampled.url
    })))
}

export function getGif ({ id }) {
  const apiURL = `${config.apiBaseURL}/${id}?api_key=${config.apiKey}`

  return fetch(apiURL)
    .then(response => response.json())
    .then(({ data }) => ({
      id: data.id,
      title: data.title,
      url: data.images.fixed_height.url
    }))
}
