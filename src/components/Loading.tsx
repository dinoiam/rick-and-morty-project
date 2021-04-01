import React from 'react';
import Morty from '@root/images/morty.png';
import styled, { keyframes } from 'styled-components';

const dots = keyframes`
  0%, 20% {
    color: rgba(0,0,0,0);
    text-shadow:
      .25em 0 0 rgba(0,0,0,0),
      .5em 0 0 rgba(0,0,0,0);
  }
  40% {
    color: white;
    text-shadow:
      .25em 0 0 rgba(0,0,0,0),
      .5em 0 0 rgba(0,0,0,0);
  }
  60% {
    text-shadow:
      .25em 0 0 white,
      .5em 0 0 rgba(0,0,0,0);
  }
  80%, 100% {
    text-shadow:
      .25em 0 0 white,
      .5em 0 0 white;
  }
`;

const LoadingComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const LoadingImage = styled.img`
  width: 70px;
  margin-bottom: 10px;
`;

const LoadingText = styled.p`
  color: rgb(158, 158, 158);

  &::after {
    content: ' .';
    animation: ${dots} 1s steps(5, end) infinite;
  }
`;
export default function Loading(): JSX.Element {
  return (
    <LoadingComponent>
      <LoadingImage alt="loading" src={Morty} />
      <LoadingText>Loading</LoadingText>
    </LoadingComponent>
  );
}
