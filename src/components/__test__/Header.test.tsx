import React from 'react';
import Header from '@components/Header';
import { render } from '@testing-library/react';

describe('Header', () => {
  test('it renders properly', () => {
    const { container } = render(<Header></Header>);
    expect(container).toMatchSnapshot();
  });
});
