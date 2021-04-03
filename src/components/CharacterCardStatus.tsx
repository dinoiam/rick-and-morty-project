import { colors } from '@src/styles/colors';
import { getColorFromStatus } from '@utils/status';
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
  background: ${({ statusColor }) => statusColor};
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
    <CharacterCardStatusComponent data-testid="character-card-status-component">
      {status && <StatusIcon data-testid="status-icon" statusColor={getColorFromStatus(status)} />}
      {`${status} - ${species} - ${gender}`}
    </CharacterCardStatusComponent>
  );
}
