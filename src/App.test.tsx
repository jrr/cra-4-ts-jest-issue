import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);

  const enum TestEnum {
    A = 1,
    B = A * 2,
  };
  expect(linkElement).toBeInTheDocument();
});
