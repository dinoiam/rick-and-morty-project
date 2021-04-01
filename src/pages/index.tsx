import React from 'react';
import CharacterList from '@components/CharacterList';
import styled from 'styled-components';

const IndexPage = styled.div`
  background-color: rgb(36, 40, 47);
  min-height: 100vh;
`;

export default function Index(): JSX.Element {
  return (
    <IndexPage>
      <CharacterList></CharacterList>
    </IndexPage>
  );
}
