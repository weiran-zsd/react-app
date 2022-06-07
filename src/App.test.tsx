import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { test } from 'vitest';

test('renders learn react link', () => {
  render(<App />);
});
