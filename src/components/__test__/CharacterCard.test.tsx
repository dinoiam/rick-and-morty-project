import React from 'react';
import CharacterCard from '@components/CharacterCard';
import { render } from '@testing-library/react';
import { AllCharacters_characters_results } from '@root/queries/types/AllCharacters';

const character: AllCharacters_characters_results = {
  __typename: 'Character',
  id: 'test_id',
  name: 'test_name',
  status: 'test_status',
  species: 'test_species',
  type: 'test_type',
  gender: 'test_gender',
  origin: {
    __typename: 'Location',
    name: 'test_origin_name',
    residents: [],
    dimension: 'test_origin_dimension'
  },
  location: {
    __typename: 'Location',
    name: 'test_origin_name',
    residents: [],
    dimension: 'test_origin_dimension'
  },
  image: 'test_image',
  episode: [
    {
      name: 'test_episode_name_1',
      id: 'test_episode_id_1',
      __typename: 'Episode'
    }
  ]
};

describe('CharacterCard', () => {
  test('it renders properly', () => {
    const { getByTestId, getAllByTestId } = render(
      <CharacterCard character={character}></CharacterCard>
    );
    expect(getByTestId('character-card-status-component')).toBeTruthy();
    expect(getByTestId('character-episodes')).toBeTruthy();
    expect(getByTestId('character-origin')).toBeTruthy();
    expect(getByTestId('character-location')).toBeTruthy();
    expect(getAllByTestId('character-card-details-component').length).toBe(2);
  });

  test('it shows the name', () => {
    const { getByTestId } = render(<CharacterCard character={character}></CharacterCard>);
    expect(getByTestId('character-card-name')).toBeTruthy();
    expect(getByTestId('character-card-name').innerHTML).toBe('test_name');
  });

  test('it shows the image', () => {
    const { getByTestId } = render(<CharacterCard character={character}></CharacterCard>);
    expect(getByTestId('character-card-image')).toBeTruthy();
    expect(getByTestId('character-card-image').getAttribute('src')).toBe('test_image');
  });

  test('it shows the episodes', () => {
    const { getByTestId, getByText } = render(
      <CharacterCard character={character}></CharacterCard>
    );
    expect(getByTestId('character-episodes')).toBeTruthy();
    expect(getByText('test_episode_name_1')).toBeTruthy();
  });
});
