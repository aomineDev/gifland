const config = {
  gifs: {
    apiBaseUrl: process.env.GIF_API_BASE_URL || 'https://api.giphy.com/v1',
    apiKey: process.env.API_KEY || 'JhbOR7Zv1apHHrcCo0STiOQKK8EQDLyb'
  },
  user: {
    apiBaseUrl: process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : 'https://gifland-api.herokuapp.com'
  }
}

export default config