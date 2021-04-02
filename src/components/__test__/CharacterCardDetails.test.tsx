import React from 'react';
import CharacterCardDetails from '@components/CharacterCardDetails';
import { render } from '@testing-library/react';

const props = {
  subText: <div data-testid="sub-text"></div>,
  name: 'test_name',
  dimension: 'test_dimension',
  numberOfResidents: 5
};

describe('CharacterCardDetails', () => {
  describe('when subText is not null', () => {
    test('it shows the subText', () => {
      const { getByTestId } = render(<CharacterCardDetails {...props}></CharacterCardDetails>);
      expect(getByTestId('sub-text')).toBeTruthy();
    });
  });
  describe('when name is not null', () => {
    test('it shows the name', () => {
      const { getByText } = render(<CharacterCardDetails {...props}></CharacterCardDetails>);
      expect(getByText('test_name', { exact: false })).toBeTruthy();
    });
  });
  describe('when dimension is not null', () => {
    test('it shows the dimension', () => {
      const { getByText } = render(<CharacterCardDetails {...props}></CharacterCardDetails>);
      expect(getByText('test_dimension', { exact: false })).toBeTruthy();
    });
  });
  describe('when numberOfResidents is not null', () => {
    test('it shows the numberOfResidents', () => {
      const { getByText } = render(<CharacterCardDetails {...props}></CharacterCardDetails>);
      expect(getByText('5', { exact: false })).toBeTruthy();
    });
  });
});
