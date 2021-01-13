const config = {
  gif: {
    apiBaseUrl: process.env.GIF_API_BASE_URL || 'https://api.giphy.com/v1',
    apiKey: process.env.API_KEY || 'JhbOR7Zv1apHHrcCo0STiOQKK8EQDLyb'
  },
  auth: {
    apiBaseUrl: process.env.AUTH_API_BASE_URL || 'http://localhost:8080'
  }
}

export default config