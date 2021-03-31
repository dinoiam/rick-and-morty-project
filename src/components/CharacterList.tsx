import React, { useEffect, useState, useRef, useCallback } from 'react';
import characterQuery from '@root/queries/characterQuery';
import { AllCharacters, AllCharacters_characters_results } from '@root/queries/types/AllCharacters';
import { useQuery } from '@apollo/client';
import styled from 'styled-components';
import CharacterCard from '@components/CharacterCard';
import { device } from '@root/styles/devicesWidth';
import Loading from '@components/Loading';

const CharacterListComponent = styled.div`
  padding: 15px;
  min-height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
const CharacterListWrapper = styled.div`
  @media ${device.laptop} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`;

export default function CharacterList() {
  const [page, setPage] = useState<number>(1);
  const { loading, data } = useQuery<AllCharacters>(characterQuery, {
    variables: { page }
  });
  const [allCharacters, setAllCharacters] = useState<(AllCharacters_characters_results | null)[]>(
    []
  );

  const observer = useRef<IntersectionObserver>();
  const bottomRef = useCallback(
    (node: HTMLDivElement) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((page) => page + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading]
  );

  useEffect(() => {
    if (data?.characters?.results) {
      const results = data.characters.results;
      setAllCharacters((all) => [...all, ...results]);
    }
  }, [data]);

  return (
    <CharacterListComponent>
      <CharacterListWrapper>
        {allCharacters.map((character, index) => {
          let elemets = [];
          if (allCharacters.length === index + 1 && data?.characters?.info?.next) {
            elemets.push(<div key={index + 1} ref={bottomRef}></div>);
          } else if (character) {
            elemets.push(<CharacterCard key={index} character={character}></CharacterCard>);
          }
          return elemets;
        })}
      </CharacterListWrapper>
      {data?.characters?.info?.next === null && <div>NOTHING ELSE TO SHOW</div>}
      {true && <Loading></Loading>}
    </CharacterListComponent>
  );
}
