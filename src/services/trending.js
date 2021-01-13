import config from 'config'

const { apiBaseUrl, apiKey } = config.gif

const service = 'trending'

export function getTrendingTerms () {
  const apiUrl = `${apiBaseUrl}/${service}/searches?api_key=${apiKey}`
  
  return fetch(apiUrl)
    .then(response => response.json())
    .then(response => response.data)
}