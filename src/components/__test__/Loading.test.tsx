import React from 'react';
import Loading from '@components/Loading';
import { render } from '@testing-library/react';

describe('Loading', () => {
  test('it renders properly', () => {
    const { container } = render(<Loading></Loading>);
    expect(container).toMatchSnapshot();
  });
});
