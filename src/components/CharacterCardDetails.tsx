import React from 'react';
import styled from 'styled-components';
import { colors } from '@root/styles/colors';
import PeopleSVG from '../../src/images/group.svg';

const CharacterCardDetailsComponent = styled.div`
  color: ${colors.primary_variant};
  font-size: 20px;
  margin-top: 20px;
`;

const People = styled(PeopleSVG)`
  width: 24px;
  height: 24px;
  fill: white;
  vertical-align: bottom;
`;
type CharacterCardDetailsProps = {
  subText: React.ReactElement;
  name: string | null;
  dimension: string | null;
  numberOfResidents: number | null;
};

export default function CharacterCardDetails({
  subText,
  name,
  dimension,
  numberOfResidents
}: CharacterCardDetailsProps): JSX.Element {
  return (
    <CharacterCardDetailsComponent>
      {subText}
      {name && <span>{name}</span>}
      {dimension && <span> - {dimension}</span>}
      {numberOfResidents && (
        <>
          {' - '}
          <People></People>
          <span> {numberOfResidents}</span>
        </>
      )}
    </CharacterCardDetailsComponent>
  );
}
