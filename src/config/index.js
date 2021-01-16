const config = {
  gifs: {
    apiBaseUrl: process.env.GIF_API_BASE_URL || 'https://api.giphy.com/v1',
    apiKey: process.env.API_KEY || 'JhbOR7Zv1apHHrcCo0STiOQKK8EQDLyb'
  },
  api: {
    apiBaseUrl: process.env.AUTH_API_BASE_URL || 'http://localhost:8080'
  }
}

export default config