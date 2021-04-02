import React from 'react';
import Layout from '@components/Layout';
import { render } from '@testing-library/react';

jest.mock(
  '@components/Header',
  () =>
    function Header() {
      return <div data-testid="header"></div>;
    }
);

describe('Layout', () => {
  test('it renders properly', () => {
    const { getByTestId } = render(
      <Layout>
        <div data-testid="child"></div>
      </Layout>
    );
    expect(getByTestId('header')).toBeTruthy();
    expect(getByTestId('child')).toBeTruthy();
  });
});
