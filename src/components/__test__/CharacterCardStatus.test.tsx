import React from 'react';
import CharacterCardStatus from '@components/CharacterCardStatus';
import { render } from '@testing-library/react';

const props = {
  status: 'test_status',
  species: 'test_species',
  gender: 'test_gender'
};

describe('CharacterCardStatus', () => {
  describe('when status is not null', () => {
    test('it shows the status', () => {
      const { getByText } = render(<CharacterCardStatus {...props}></CharacterCardStatus>);
      expect(getByText('test_status', { exact: false })).toBeTruthy();
    });
    test('it shows the status icon', () => {
      const { getByTestId } = render(<CharacterCardStatus {...props}></CharacterCardStatus>);
      expect(getByTestId('status-icon')).toBeTruthy();
    });
  });

  describe('when species is not null', () => {
    test('it shows the species', () => {
      const { getByText } = render(<CharacterCardStatus {...props}></CharacterCardStatus>);
      expect(getByText('test_species', { exact: false })).toBeTruthy();
    });
  });

  describe('when gender is not null', () => {
    test('it shows the gender', () => {
      const { getByText } = render(<CharacterCardStatus {...props}></CharacterCardStatus>);
      expect(getByText('test_gender', { exact: false })).toBeTruthy();
    });
  });
});
