import { render, fireEvent, screen } from '@testing-library/react'
import App from '../src/App'
import { test } from 'vitest'

test('render App', async () => {
  render(<App />)
})
