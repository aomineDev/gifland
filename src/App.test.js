import { render, screen } from '@testing-library/react'
import App from './App'

test('renders without crashing', async () => {
  render(<App />)
  const title = await screen.findByText(/Trending Gifs/i)
  expect(title).toBeInTheDocument()
})
