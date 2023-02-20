import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('O número inicial deve ser zero', () => {
  render(<App />);
  const buttonIncrementa = screen.queryAllByRole('button');

  expect(buttonAdicionar.length).toBe(2);
  expect(screen.getByText('0')).toBeInTheDocument();
});
