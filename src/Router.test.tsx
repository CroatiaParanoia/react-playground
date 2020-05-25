import React from 'react';
import { render } from '@testing-library/react';
import Router from './router';

test('renders learn react link', () => {
  const { container } = render(<div />);
  expect(container).toBeInTheDocument();
});
