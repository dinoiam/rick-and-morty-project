import React from 'react';
import CharacterList from '@components/CharacterList';
import { render, act } from '@testing-library/react';
import characterQuery from '@src/queries/characterQuery';
import '@src/__mocks__/matchMedia.mock';
import { MockedProvider } from '@apollo/client/testing';
import '@src/__mocks__/intersectionObserverMock';

const firstQueryResult = {
  characters: {
    results: [
      {
        id: '19',
        name: 'Antenna Rick',
        status: 'unknown',
        species: 'Human',
        type: 'Human with antennae',
        gender: 'Male',
        origin: {
          name: 'unknown',
          dimension: null,
          residents: null
        },
        location: {
          name: 'unknown',
          dimension: null,
          residents: null
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/19.jpeg',
        episode: [
          {
            id: '10',
            name: 'Close Rick-counters of the Rick Kind'
          }
        ]
      }
    ],
    info: {
      next: 2
    }
  }
};

const secondQueryResult = {
  characters: {
    results: [
      {
        id: '20',
        name: 'Morty',
        status: 'Alive',
        species: 'Human',
        type: 'Human',
        gender: 'Male',
        origin: {
          name: 'unknown',
          dimension: null,
          residents: null
        },
        location: {
          name: 'unknown',
          dimension: null,
          residents: null
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/20.jpeg',
        episode: [
          {
            id: '10',
            name: 'Close Rick-counters of the Rick Kind'
          }
        ]
      }
    ],
    info: {
      next: 3
    }
  }
};

describe('CharacterList', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  describe('when first query completes', () => {
    test('it renders properly ', async () => {
      const mocks = [
        {
          request: {
            query: characterQuery,
            variables: { page: 1 }
          },
          result: {
            data: firstQueryResult
          }
        }
      ];
      await act(async () => {
        const { getAllByTestId } = render(
          <MockedProvider mocks={mocks} addTypename={false}>
            <CharacterList />
          </MockedProvider>
        );
        await new Promise((resolve) => setTimeout(resolve, 0));
        expect(getAllByTestId('character-card-component').length).toBe(1);
      });
    });
  });

  describe('when new charactes are fetched', () => {
    test('it updates the list of charactes', async () => {
      const mocks = [
        {
          request: {
            query: characterQuery,
            variables: { page: 1 }
          },
          result: {
            data: firstQueryResult
          }
        },
        {
          request: {
            query: characterQuery,
            variables: { page: 2 }
          },
          result: {
            data: secondQueryResult
          }
        }
      ];
      await act(async () => {
        const { getAllByTestId, getByText, queryByText } = render(
          <MockedProvider mocks={mocks} addTypename={false}>
            <CharacterList />
          </MockedProvider>
        );
        await new Promise((resolve) => setTimeout(resolve, 0));
        expect(getAllByTestId('character-card-component').length).toBe(1);
        expect(getByText('Antenna Rick')).toBeTruthy();
        expect(queryByText('Morty')).not.toBeTruthy();
        await new Promise((resolve) => setTimeout(resolve, 0));
        expect(getAllByTestId('character-card-component').length).toBe(2);
        expect(getByText('Antenna Rick')).toBeTruthy();
        expect(getByText('Morty')).toBeTruthy();
      });
    });
  });
});
