import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('renders react app', () => {
  it("should render react app", () => {
    const { container } = render(<App />);
  })
});
