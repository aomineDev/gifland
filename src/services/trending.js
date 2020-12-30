import config from 'config'

const service = 'trending'

export function getTrendingTerms () {
  const apiUrl = `${config.apiBaseURL}/${service}/searches?api_key=${config.apiKey}`
  
  return fetch(apiUrl)
    .then(response => response.json())
    .then(response => response.data)
}