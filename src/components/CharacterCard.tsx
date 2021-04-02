import { AllCharacters_characters_results } from '@root/queries/types/AllCharacters';
import React, { useMemo } from 'react';
import styled from 'styled-components';
import { device } from '@root/styles/devicesWidth';
import { colors } from '@root/styles/colors';
import CharacterCardDetails from '@components/CharacterCardDetails';
import CharacterCardStatus from '@components/CharacterCardStatus';

export type CharacterCardProps = {
  character: AllCharacters_characters_results;
};

const CharacterCardComponent = styled.article`
  background: ${colors.background};
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
  color: ${colors.primary};

  @media ${device.tablet} {
    display: flex;
    flex-wrap: wrap;
    width: 600px;
    margin: 20px auto;
    align-items: flex-start;
  }
  @media ${device.laptop} {
    margin: 0 0 20px;
  }
`;
const CharacterCardImageWrapper = styled.div`
  @media ${device.tablet} {
    width: 250px;
    height: 250px;
  }
`;
const CharacterCardImage = styled.img`
  width: 100%;
`;
const CharacterCardContentWrapper = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    flex: 1;
  }
`;
const CharacterCardContentName = styled.div`
  color: ${colors.primary_variant};
  font-weight: 700;
  font-size: 30px;
`;

const SubText = styled.span`
  color: ${colors.primary};
  margin-bottom: 5px;
  display: block;
`;

const CharacterEpisodesWrapper = styled.div`
  padding: 5px 15px 15px;

  @media ${device.tablet} {
    padding: 20px;
    width: 100%;
  }
`;

const Episodes = styled.ul`
  max-height: 100px;
  overflow: hidden;
  overflow-y: auto;
  line-height: normal;
  color: ${colors.primary_variant};
`;

export default React.memo(function CharacterCard({ character }: CharacterCardProps) {
  const episodes = useMemo(() => {
    return character.episode?.map((episode) => {
      if (episode) {
        return <li key={episode.id}>{episode.name}</li>;
      }
    });
  }, [character.episode]);
  return (
    <CharacterCardComponent data-testid="character-card-component">
      <CharacterCardImageWrapper>
        <CharacterCardImage data-testid="character-card-image" src={character.image ?? ''} />
      </CharacterCardImageWrapper>
      <CharacterCardContentWrapper>
        <CharacterCardContentName data-testid="character-card-name">
          {character.name}
        </CharacterCardContentName>
        <CharacterCardStatus
          species={character.species}
          status={character.status}
          gender={character.gender}
        />
        <CharacterCardDetails
          subText={<SubText data-testid="character-origin">Origin:</SubText>}
          name={character.origin?.name ?? null}
          dimension={character.origin?.dimension ?? null}
          numberOfResidents={character.origin?.residents?.length ?? null}
        ></CharacterCardDetails>
        <CharacterCardDetails
          subText={<SubText data-testid="character-location">Last known location:</SubText>}
          name={character.location?.name ?? null}
          dimension={character.location?.dimension ?? null}
          numberOfResidents={character.location?.residents?.length ?? null}
        ></CharacterCardDetails>
      </CharacterCardContentWrapper>
      <CharacterEpisodesWrapper data-testid="character-episodes">
        <SubText>Episodes:</SubText>
        <Episodes>{episodes}</Episodes>
      </CharacterEpisodesWrapper>
    </CharacterCardComponent>
  );
});
