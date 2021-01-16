import config from 'config'

const { apiBaseUrl, apiKey } = config.gifs

const SERVICE = 'gifs'

export function getGifs ({ type = 'search', query = '', limit = 16, rating = 'g',page = 0 } = {}) {
  const offset = page * limit
  const lang = 'en'

  const apiURL = type === 'trending' 
  ? `${apiBaseUrl}/${SERVICE}/trending?api_key=${apiKey}&limit=${limit}&rating=${rating}&offset=${offset}` 
  : `${apiBaseUrl}/${SERVICE}/search?api_key=${apiKey}&q=${query}&limit=${limit}&offset=${offset}&rating=${rating}&lang=${lang}`

  return fetch(apiURL)
    .then(response => response.json())
    .then(({ data }) => data.map(({ id, title, images }) => ({
      id,
      title,
      url: images.fixed_height_downsampled.url
    })))
}

export function getGif ({ id }) {
  const apiURL = `${apiBaseUrl}/${SERVICE}/${id}?api_key=${apiKey}`

  return fetch(apiURL)
    .then(response => response.json())
    .then(({ data }) => ({
      title: data.title,
      dateTime: data.import_datetime,
      rating: data.rating,
      user: data.user,
      url: data.images.downsized.url
      // url: data.images.fixed_height.url
    }))
}
