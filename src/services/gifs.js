import config from '../config'

export function getGifs ({ query = 'panda', limit = 1 } = {}) {
  const offset = '0'
  const rating = 'g'
  const lang = 'en'

  const apiURL = `${config.apiBaseURL}/search?api_key=${config.apiKey}&q=${query}&limit=${limit}&offset=${offset}&rating=${rating}&lang=${lang}`

  return fetch(apiURL)
    .then(response => response.json())
    .then(({ data }) => data.map(mapGifs))
}

function mapGifs ({ id, title, images }) {
  return {
    id,
    title,
    url: images.downsized.url
  }
}
