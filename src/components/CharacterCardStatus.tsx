import { colors } from '@root/styles/colors';
import { getColorFromStatus } from '@root/utils/status';
import React from 'react';
import styled from 'styled-components';

const CharacterCardStatusComponent = styled.div`
  color: ${colors.primary_variant};
  font-size: 20px;
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

const StatusIcon = styled.div<{ statusColor: string }>`
  height: 0.5rem;
  width: 0.5rem;
  margin-right: 0.375rem;
  background: rgb(85, 204, 68);
  border-radius: 50%;
`;

type CharacterCardStatusProps = {
  status: string | null;
  species: string | null;
  gender: string | null;
};

export default function CharacterCardStatus({
  status,
  species,
  gender
}: CharacterCardStatusProps): JSX.Element {
  return (
    <CharacterCardStatusComponent>
      {status && <StatusIcon statusColor={getColorFromStatus(status)} />}
      {`${status} - ${species} - ${gender}`}
    </CharacterCardStatusComponent>
  );
}
