import { AllCharacters_characters_results } from '@root/queries/types/AllCharacters';
import React from 'react';
import styled from 'styled-components';
import PeopleSVG from '../../src/images/group.svg';
import { device } from '@root/styles/devicesWidth';
import { colors } from '@root/styles/colors';

export type CharacterCardProps = {
  character: AllCharacters_characters_results;
};

const CharacterCardWrapper = styled.article`
  background: ${colors.background};
  border-radius: 0.5rem;
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
const CharacterCardContentTitle = styled.div`
  color: ${colors.primary_variant};
  font-weight: 700;
  font-size: 30px;
`;
const CharacterCardContentStatus = styled.div`
  color: ${colors.primary_variant};
  font-size: 20px;
`;
const CharacterCardContentDetails = styled.div`
  color: ${colors.primary_variant};
  font-size: 20px;
  margin-top: 20px;
`;

const SubText = styled.span`
  color: ${colors.primary};
  margin-bottom: 5px;
  display: block;
`;

const People = styled(PeopleSVG)`
  width: 24px;
  height: 24px;
  fill: white;
  vertical-align: bottom;
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
  return (
    <CharacterCardWrapper>
      <CharacterCardImageWrapper>
        <CharacterCardImage src={character.image ?? ''} />
      </CharacterCardImageWrapper>
      <CharacterCardContentWrapper>
        <CharacterCardContentTitle>{character.name}</CharacterCardContentTitle>
        <CharacterCardContentStatus>{`${character.status} - ${character.species}`}</CharacterCardContentStatus>
        <CharacterCardContentDetails>
          <SubText>Origin:</SubText>
          <div>
            <span>{character.origin?.name}</span> -{' '}
            <span>{character.origin?.dimension ?? '??'}</span> - <People></People>
            <span> {character.origin?.residents?.length ?? '??'}</span>
          </div>
        </CharacterCardContentDetails>
        <CharacterCardContentDetails>
          <SubText>Last known location:</SubText>
          <div>
            <span>{character.location?.name}</span> -{' '}
            <span>{character.location?.dimension ?? '??'}</span> - <People></People>
            <span> {character.location?.residents?.length ?? '??'}</span>
          </div>
        </CharacterCardContentDetails>
      </CharacterCardContentWrapper>
      <CharacterEpisodesWrapper>
        <SubText>Episodes:</SubText>
        <Episodes>
          {character.episode?.map((episode) => {
            return <li key={episode?.id}>{episode?.name}</li>;
          })}
        </Episodes>
      </CharacterEpisodesWrapper>
    </CharacterCardWrapper>
  );
});
