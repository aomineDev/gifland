import config from 'config'

const { apiBaseUrl, apiKey } = config.gifs

const SERVICE = 'trending'

export function getTrendingTerms () {
  const apiUrl = `${apiBaseUrl}/${SERVICE}/searches?api_key=${apiKey}`
  
  return fetch(apiUrl)
    .then(response => response.json())
    .then(response => response.data)
}