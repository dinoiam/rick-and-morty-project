import React from 'react';
import Index from '@root/pages';
import { render } from '@testing-library/react';

jest.mock(
  '@components/CharacterList',
  () =>
    function IndexMock() {
      return <div data-testid="character-list-mock"></div>;
    }
);

describe('Index', () => {
  test('it renders properly', () => {
    const { getByTestId } = render(<Index></Index>);
    expect(getByTestId('character-list-mock')).toBeTruthy();
  });
});
