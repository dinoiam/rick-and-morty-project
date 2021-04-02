import React, { useEffect, useMemo, useState } from 'react';
import characterQuery from '@root/queries/characterQuery';
import { AllCharacters, AllCharacters_characters_results } from '@root/queries/types/AllCharacters';
import { useQuery } from '@apollo/client';
import styled from 'styled-components';
import CharacterCard from '@components/CharacterCard';
import InfiniteScroll from '@components/InfiniteScroll';
import { device } from '@root/styles/devicesWidth';
import Loading from '@components/Loading';

const CharacterListComponent = styled.div`
  padding: 50px 15px;
  min-height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
`;
const CharacterListWrapper = styled.div`
  @media ${device.laptop} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`;

export default function CharacterList(): JSX.Element {
  const [page, setPage] = useState<number>(1);
  const { loading, error, data } = useQuery<AllCharacters>(characterQuery, {
    variables: { page }
  });
  const [allCharacters, setAllCharacters] = useState<(AllCharacters_characters_results | null)[]>(
    []
  );
  useEffect(() => {
    if (data?.characters?.results) {
      const results = data.characters.results;
      setAllCharacters((all) => [...all, ...results]);
    }
  }, [data]);

  const charactersCards = useMemo(() => {
    return allCharacters.map((character) => {
      if (character) {
        return <CharacterCard key={character.id} character={character}></CharacterCard>;
      }
    });
  }, [allCharacters]);

  return (
    <CharacterListComponent data-testid="character-list-component">
      {allCharacters.length ? (
        <InfiniteScroll
          callback={() => setPage(page + 1)}
          loading={loading}
          loadMore={data?.characters?.info?.next !== null && !error ? true : false}
        >
          <CharacterListWrapper>{charactersCards}</CharacterListWrapper>
        </InfiniteScroll>
      ) : (
        <Loading></Loading>
      )}
    </CharacterListComponent>
  );
}
