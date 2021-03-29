import React, { useContext } from 'react';
import characterQuery from '@root/queries/characterQuery';
import { AllCharacters } from '@root/queries/types/AllCharacters';
import { useQuery } from '@apollo/client';
import styled from 'styled-components';

const IndexPage = styled.div`
  background-color: red;
  color: black;
`;

export default function Index() {
  const { loading, error, data } = useQuery<AllCharacters>(characterQuery, {
    variables: { page: 1 }
  });

  console.log('data', data);
  return (
    <IndexPage>
      {data?.characters?.results?.map((character) => {
        return <div>{character?.name}</div>;
      })}
    </IndexPage>
  );
}
